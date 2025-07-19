import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Lock, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ---------- Initial Data ---------- */
const initialPosts = [
  {
    id: 1,
    title: "A Beginner's Guide to Launching a Web Development Startup",
    date: "Jan 2023",
    readTime: 5,
    excerpt: "From idea validation to pricing strategies—everything you need to land your first client.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60",
    tags: ["Web Dev", "Startup"],
    content: `
      <h1>Introduction</h1>
      <p>Starting a web development startup can be both exciting and overwhelming. With the increasing demand for digital solutions, there's never been a better time to turn your coding skills into a profitable business. However, success requires more than just technical expertise—you need a solid strategy for idea validation, client acquisition, pricing, and marketing.</p>
      
      <!-- Rest of the content remains the same -->
    `,
    author: "DEV&DONE",
    publishedAt: "2025-07-18 T10:00:00Z",
    isPublished: true
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Comprehensive Guide",
    date: "Mar 2023",
    readTime: 8,
    excerpt: "Learn how to leverage React Hooks to build cleaner, more efficient functional components.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=60",
    tags: ["React", "Frontend"],
    content: `
      <h1>Introduction to React Hooks</h1>
      <p>React Hooks revolutionized how we write React components by allowing us to use state and lifecycle features in functional components. This guide will walk you through all the essential hooks with practical examples.</p>
      
      <h3>1. useState: Managing Component State</h3>
      <p>The useState hook is the most fundamental hook for managing local state in functional components.</p>
      
      <h4>Basic Usage</h4>
      <pre>
const [count, setCount] = useState(0);
      </pre>
      
      <h4>Best Practices</h4>
      <ul>
        <li>Use multiple useState calls for unrelated state values</li>
        <li>For complex state, consider useReducer instead</li>
        <li>Remember that state updates are asynchronous</li>
      </ul>
      
      <h3>2. useEffect: Side Effects Management</h3>
      <p>useEffect combines componentDidMount, componentDidUpdate, and componentWillUnmount into a single API.</p>
      
      <h4>Common Use Cases</h4>
      <ul>
        <li>Data fetching</li>
        <li>Setting up subscriptions</li>
        <li>Manually changing the DOM</li>
      </ul>
      
      <h3>3. Custom Hooks: Reusable Logic</h3>
      <p>Custom hooks let you extract component logic into reusable functions.</p>
      
      <h4>Example: useFetch Hook</h4>
      <pre>
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);
  return data;
}
      </pre>
      
      <h2>Advanced Hook Patterns</h2>
      <p>Learn how to combine hooks for powerful patterns like:</p>
      <ul>
        <li>State management with useContext + useReducer</li>
        <li>Performance optimization with useMemo and useCallback</li>
        <li>Custom hook libraries for common tasks</li>
      </ul>
    `,
    author: "DEV&DONE",
    publishedAt: "2025-03-15 T09:30:00Z",
    isPublished: true
  },
  {
    id: 3,
    title: "The Complete Guide to Docker for Developers",
    date: "May 2023",
    readTime: 10,
    excerpt: "Containerize your applications and streamline your development workflow with Docker.",
    image: "https://images.unsplash.com/photo-1648393847044-0f31992a9ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9ja2VyJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    tags: ["DevOps", "Containers"],
    content: `
      <h1>Why Docker Matters</h1>
      <p>Docker has become the de facto standard for containerization, solving the "it works on my machine" problem by packaging applications with all their dependencies.</p>
      
      <h3>1. Docker Fundamentals</h3>
      <h4>Key Concepts</h4>
      <ul>
        <li>Images: Blueprints for containers</li>
        <li>Containers: Running instances of images</li>
        <li>Dockerfile: Recipe for building images</li>
        <li>Volumes: Persistent data storage</li>
      </ul>
      
      <h3>2. Building Your First Docker Image</h3>
      <h4>Sample Dockerfile</h4>
      <pre>
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
      </pre>
      
      <h3>3. Docker Compose for Multi-Container Apps</h3>
      <p>Define and run multi-container applications with a single command.</p>
      
      <h4>docker-compose.yml Example</h4>
      <pre>
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
      </pre>
      
      <h2>Production Best Practices</h2>
      <ul>
        <li>Use multi-stage builds to reduce image size</li>
        <li>Implement proper logging strategies</li>
        <li>Secure your containers with minimal privileges</li>
        <li>Monitor container health and performance</li>
      </ul>
    `,
    author: "DEV&DONE",
    publishedAt: "2025-05-22 T14:15:00Z",
    isPublished: true
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals for Developers",
    date: "Jul 2023",
    readTime: 12,
    excerpt: "Bridge the gap between software engineering and machine learning with practical examples.",
    image: "https://media.istockphoto.com/id/2170889984/photo/digital-abstract-cpu-ai-artificial-intelligence-and-machine-learning-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=zGSV2_Jth30uGNDD7g-XV-nJTxRL2HH2O3qJH7T3AV4=",
    tags: ["AI", "Machine Learning"],
    content: `
      <h1>Getting Started with ML</h1>
      <p>Machine learning is transforming industries, and as a developer, you're uniquely positioned to implement ML solutions. This guide focuses on practical implementation rather than complex math.</p>
      
      <h3>1. Understanding ML Workflow</h3>
      <h4>The 5 Key Steps</h4>
      <ol>
        <li>Data collection and preparation</li>
        <li>Feature engineering</li>
        <li>Model selection</li>
        <li>Training and evaluation</li>
        <li>Deployment and monitoring</li>
      </ol>
      
      <h3>2. Popular ML Libraries</h3>
      <table>
        <thead>
          <tr>
            <th>Library</th>
            <th>Primary Use</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TensorFlow</td>
            <td>Deep Learning</td>
            <td>Python</td>
          </tr>
          <tr>
            <td>Scikit-learn</td>
            <td>Classical ML</td>
            <td>Python</td>
          </tr>
          <tr>
            <td>PyTorch</td>
            <td>Research & DL</td>
            <td>Python</td>
          </tr>
        </tbody>
      </table>
      
      <h3>3. Building Your First Model</h3>
      <h4>Example: Sentiment Analysis</h4>
      <pre>
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC

# Prepare data
texts = ["I love this product", "This is terrible"]
labels = [1, 0]  # 1=positive, 0=negative

# Vectorize text
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Train model
model = LinearSVC()
model.fit(X, labels)

# Predict
test_text = "This is awesome"
prediction = model.predict(vectorizer.transform([test_text]))
      </pre>
      
      <h2>Going Further</h2>
      <p>Once you've mastered the basics:</p>
      <ul>
        <li>Explore neural networks with TensorFlow/Keras</li>
        <li>Learn about model deployment options</li>
        <li>Understand ethical considerations in ML</li>
        <li>Experiment with AutoML tools</li>
      </ul>
    `,
    author: "DEV&DONE",
    publishedAt: "2025-07-10 T11:45:00Z",
    isPublished: true
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Modern Web Applications",
    date: "Sep 2023",
    readTime: 7,
    excerpt: "Protect your web applications from common vulnerabilities and security threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60",
    tags: ["Security", "Web Dev"],
    content: `
      <h1>The Importance of Web Security</h1>
      <p>With increasing cyber threats, security must be a priority from day one of development. This guide covers essential practices to protect your applications and users.</p>
      
      <h3>1. Common Web Vulnerabilities</h3>
      <h4>OWASP Top 10</h4>
      <ul>
        <li>Injection attacks (SQL, NoSQL, OS)</li>
        <li>Broken Authentication</li>
        <li>Sensitive Data Exposure</li>
        <li>XML External Entities (XXE)</li>
        <li>Broken Access Control</li>
      </ul>
      
      <h3>2. Essential Security Measures</h3>
      <h4>For All Web Apps</h4>
      <ul>
        <li>Implement HTTPS everywhere</li>
        <li>Use secure headers (CSP, XSS Protection)</li>
        <li>Validate and sanitize all inputs</li>
        <li>Implement proper authentication (OAuth 2.0, JWT)</li>
      </ul>
      
      <h3>3. Secure Coding Practices</h3>
      <h4>JavaScript Example</h4>
      <pre>
// Dangerous: Direct DOM injection
document.getElementById('output').innerHTML = userInput;

// Safe: Text content only
document.getElementById('output').textContent = userInput;
      </pre>
      
      <h4>SQL Example</h4>
      <pre>
// Dangerous: String concatenation
const query = 'SELECT * FROM users WHERE id = "$"{userId}"';

// Safe: Parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.execute(query, [userId]);
      </pre>
      
      <h2>Advanced Security</h2>
      <p>For high-security applications:</p>
      <ul>
        <li>Implement rate limiting</li>
        <li>Use Web Application Firewalls (WAF)</li>
        <li>Regular security audits</li>
        <li>Bug bounty programs</li>
      </ul>
    `,
    author: "David Wilson",
    publishedAt: "2025-09-05 T16:20:00Z",
    isPublished: true
  },
];
/* ---------- Blog Card Component ---------- */
const BlogCard = ({ post, onOpen }) => {
  return (
    <motion.article
      className="relative bg-[#1E1E1E]/80 backdrop-blur-md border border-[#1E1E1E] rounded-2xl overflow-hidden group hover:border-[#6EE7B7]/40 transition-all duration-300"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex flex-col justify-between min-h-[260px]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#6EE7B7]/10 text-[#6EE7B7]">
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#E5E7EB] leading-tight mb-2">
            {post.title}
          </h3>

          <p className="text-sm text-[#9CA3AF] line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-[#9CA3AF]">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
            <span>•</span>
            <Clock size={14} />
            <span>{post.readTime} min read</span>
          </div>

          <button
            onClick={() => onOpen(post)}
            className="flex items-center gap-1 text-[#6EE7B7] font-semibold hover:text-[#34D399] transition-colors"
          >
            Read more
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ---------- Article Modal Component ---------- */
const ArticleModal = ({ post, onClose }) => {
  // Function to safely render HTML content with custom styling
  const renderContent = (html) => {
    return (
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: html 
        }} 
      />
    );
  };

  return (
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
            className="bg-[#1E1E1E] border border-[#6EE7B7]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
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
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#6EE7B7]/10 text-[#6EE7B7]">
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold text-[#E5E7EB] mb-2">{post.title}</h1>

              <div className="flex items-center gap-4 text-sm text-[#9CA3AF] mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime} min read
                </span>
                <span>By {post.author}</span>
              </div>

              <div className="border-t border-[#374151] pt-6">
                <div className="prose prose-invert max-w-none">
                  {/* Custom styling for different HTML elements */}
                  <style jsx global>{`
                    .prose h1 {
                      font-size: 2rem;
                      font-weight: 700;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                      color: #E5E7EB;
                    }
                    .prose h2 {
                      font-size: 1.75rem;
                      font-weight: 600;
                      margin-top: 1.75rem;
                      margin-bottom: 0.875rem;
                      color: #E5E7EB;
                    }
                    .prose h3 {
                      font-size: 1.5rem;
                      font-weight: 600;
                      margin-top: 1.5rem;
                      margin-bottom: 0.75rem;
                      color: #E5E7EB;
                    }
                    .prose h4 {
                      font-size: 1.25rem;
                      font-weight: 600;
                      margin-top: 1.25rem;
                      margin-bottom: 0.625rem;
                      color: #E5E7EB;
                    }
                    .prose p {
                      margin-bottom: 1rem;
                      line-height: 1.75;
                      color: #E5E7EB;
                    }
                    .prose ul, .prose ol {
                      margin-bottom: 1rem;
                      padding-left: 1.5rem;
                    }
                    .prose li {
                      margin-bottom: 0.5rem;
                    }
                    .prose table {
                      width: 100%;
                      margin-bottom: 1rem;
                      border-collapse: collapse;
                    }
                    .prose th, .prose td {
                      padding: 0.5rem;
                      border: 1px solid #374151;
                      text-align: left;
                    }
                    .prose th {
                      background-color: #1E1E1E;
                      font-weight: 600;
                    }
                    .prose tr:nth-child(even) {
                      background-color: #1E1E1E;
                    }
                    .prose pre {
                      background-color: #1E1E1E;
                      padding: 1rem;
                      border-radius: 0.5rem;
                      overflow-x: auto;
                      margin-bottom: 1rem;
                    }
                    .prose strong {
                      color: #6EE7B7;
                      font-weight: 600;
                    }
                  `}</style>
                  {renderContent(post.content)}
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-[#374151]">
                <button
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#6EE7B7] text-[#1E1E1E] px-4 py-2 rounded-lg font-semibold hover:bg-[#34D399] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------- Rest of the components remain the same ---------- */

/* ---------- Main Blog Component ---------- */
const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Filter only published posts for public view
  const publishedPosts = posts.filter(post => post.isPublished);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleEditPost = (updatedPost) => {
    setPosts(posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    ));
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowAuth(false);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  return (
    <section className="min-h-screen bg-[#121212] text-[#E5E7EB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {publishedPosts.map(post => (
            <BlogCard key={post.id} post={post} onOpen={setSelectedPost} />
          ))}
        </motion.div>

        {/* Admin Access Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAuth(true)}
            className="inline-flex items-center gap-2 bg-[#1E1E1E] border border-[#6EE7B7]/30 text-[#6EE7B7] px-6 py-3 rounded-lg font-semibold hover:bg-[#6EE7B7]/10 transition-colors"
          >
            <Lock size={18} />
            Admin Access
          </button>
        </div>

        {/* Article Modal */}
        <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />

        {/* Auth Form */}
        {showAuth && (
          <AuthForm
            onLogin={handleAdminLogin}
            onClose={() => setShowAuth(false)}
          />
        )}

        {/* Admin Panel */}
        {isAdmin && (
          <AdminPanel
            posts={posts}
            onAddPost={handleAddPost}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
            onClose={handleAdminLogout}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;