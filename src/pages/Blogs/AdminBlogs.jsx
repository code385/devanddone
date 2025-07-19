import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ExternalLink, Plus, X } from 'lucide-react';

/* ---------- Data ---------- */
const initialPosts = [
  // ... (keep your existing posts array) ...
];

/* ---------- Admin Panel Component ---------- */
const AdminBlogs = ({ onAddPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    image: '',
    tags: '',
    date: new Date().toLocaleString('default', { month: 'short', year: 'numeric' }),
    readTime: 5,
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      ...newPost,
      id: Date.now(),
      tags: newPost.tags.split(',').map(tag => tag.trim())
    };
    onAddPost(post);
    setIsOpen(false);
    setNewPost({
      title: '',
      excerpt: '',
      image: '',
      tags: '',
      date: new Date().toLocaleString('default', { month: 'short', year: 'numeric' }),
      readTime: 5,
      link: ''
    });
  };

  return (
    <div className="mt-16 border-t border-[#2E2E2E] pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#E5E7EB]">Admin Panel</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-[#6EE7B7] text-[#121212] px-4 py-2 rounded-lg font-semibold hover:bg-[#5ED7A7] transition-colors"
          >
            <Plus size={18} />
            {isOpen ? 'Cancel' : 'Add New Article'}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#1E1E1E] rounded-xl p-6 mb-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-1">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full bg-[#2E2E2E] border border-[#374151] rounded-lg px-4 py-2 text-[#E5E7EB] focus:border-[#6EE7B7] focus:ring-[#6EE7B7]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-1">Excerpt</label>
                <textarea
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                  className="w-full bg-[#2E2E2E] border border-[#374151] rounded-lg px-4 py-2 text-[#E5E7EB] focus:border-[#6EE7B7] focus:ring-[#6EE7B7]"
                  rows="3"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#9CA3AF] mb-1">Image URL</label>
                  <input
                    type="url"
                    value={newPost.image}
                    onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                    className="w-full bg-[#2E2E2E] border border-[#374151] rounded-lg px-4 py-2 text-[#E5E7EB] focus:border-[#6EE7B7] focus:ring-[#6EE7B7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#9CA3AF] mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                    className="w-full bg-[#2E2E2E] border border-[#374151] rounded-lg px-4 py-2 text-[#E5E7EB] focus:border-[#6EE7B7] focus:ring-[#6EE7B7]"
                    placeholder="Web Dev, Startup, AI"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#9CA3AF] mb-1">Read Time (minutes)</label>
                  <input
                    type="number"
                    value={newPost.readTime}
                    onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                    className="w-full bg-[#2E2E2E] border border-[#374151] rounded-lg px-4 py-2 text-[#E5E7EB] focus:border-[#6EE7B7] focus:ring-[#6EE7B7]"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#9CA3AF] mb-1">External Link</label>
                  <input
                    type="url"
                    value={newPost.link}
                    onChange={(e) => setNewPost({...newPost, link: e.target.value})}
                    className="w-full bg-[#2E2E2E] border border-[#374151] rounded-lg px-4 py-2 text-[#E5E7EB] focus:border-[#6EE7B7] focus:ring-[#6EE7B7]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6EE7B7] text-[#121212] py-2 rounded-lg font-semibold hover:bg-[#5ED7A7] transition-colors"
              >
                Publish Article
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

/* ---------- Updated Modal Component ---------- */
const ArticleModal = ({ post, onClose }) => (
  <AnimatePresence>
    {post && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          onClick={e => e.stopPropagation()}
          className="bg-[#1E1E1E] border border-[#6EE7B7]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-[#6EE7B7] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#6EE7B7]/10 text-[#6EE7B7]">
                  #{tag}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#E5E7EB]">{post.title}</h2>

            <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} min read</span>
            </div>

            <p className="text-[#9CA3AF] leading-relaxed">{post.excerpt}</p>

            {/* Dummy full article */}
            <div className="prose prose-invert prose-sm max-w-none text-[#E5E7EB]">
              {/* ... (keep your existing article content) ... */}
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#6EE7B7] text-[#121212] px-4 py-2 rounded-lg font-semibold hover:opacity-90"
              >
                <ExternalLink size={16} />
                Continue reading
              </a>
              <button
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#6EE7B7] text-[#6EE7B7] px-4 py-2 rounded-lg font-semibold hover:bg-[#6EE7B7]/10"
              >
                <X size={16} />
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ---------- Updated Page Component ---------- */
const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState(initialPosts);
  const [isAdmin, setIsAdmin] = useState(false); // In a real app, this would come from auth

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section className="min-h-screen bg-[#121212] text-[#E5E7EB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            <span className="text-[#6EE7B7]">Blogs</span> &{' '}
            <span className="text-[#93C5FD]">Insights</span>
          </motion.h1>
          <p className="mt-3 text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Deep dives into web dev, AI, and career growth—written for developers.
          </p>
        </div>

        {/* Admin Toggle (for demo purposes) */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className={`px-4 py-2 rounded-lg font-medium ${isAdmin ? 'bg-[#6EE7B7] text-[#121212]' : 'bg-[#2E2E2E] text-[#E5E7EB]'}`}
          >
            {isAdmin ? 'Exit Admin Mode' : 'Enter Admin Mode'}
          </button>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map(post => (
            <BlogCard key={post.id} post={post} onOpen={setSelectedPost} />
          ))}
        </motion.div>

        {/* Admin Panel */}
        {isAdmin && <AdminPanel onAddPost={handleAddPost} />}

        {/* Modal */}
        <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      </div>
    </section>
  );
};

export default AdminBlogs;