'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import PlaygroundScene from './PlaygroundScene';

export default function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState('3d');

  const demos = [
    { id: '3d', label: '3D Scene', icon: '🎮' },
    { id: 'animation', label: 'Animations', icon: '✨' },
    { id: 'particles', label: 'Particles', icon: '🌟' },
    { id: 'interactive', label: 'Interactive', icon: '🎯' },
    { id: 'typography', label: 'Typography', icon: '📝' },
    { id: 'loading', label: 'Loading States', icon: '⏳' },
    { id: 'morphing', label: 'Morphing Shapes', icon: '🌀' },
    { id: 'colors', label: 'Color Picker', icon: '🎨' },
    { id: 'timeline', label: 'Timeline', icon: '📊' },
    { id: 'cardflip', label: 'Card Flip', icon: '🃏' },
    { id: 'waves', label: 'Wave Animation', icon: '🌊' },
    { id: 'glitch', label: 'Glitch Effect', icon: '💫' },
    { id: 'magnetic', label: 'Magnetic Button', icon: '🧲' },
    { id: 'scroll', label: 'Scroll Reveal', icon: '📜' },
    { id: 'gestures', label: 'Gestures', icon: '👆' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Card>
      <div className="mb-6">
        <motion.h3 
          className="text-xl font-semibold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Interactive Demos
        </motion.h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {demos.map((demo) => (
            <motion.div
              key={demo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeDemo === demo.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveDemo(demo.id)}
                className="relative"
              >
                <span className="mr-2">{demo.icon}</span>
                {demo.label}
                {activeDemo === demo.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/20 rounded-lg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDemo}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-[400px]"
        >
          {activeDemo === '3d' && <PlaygroundScene />}
          {activeDemo === 'animation' && <AnimationDemo />}
          {activeDemo === 'particles' && <ParticleDemo />}
          {activeDemo === 'interactive' && <InteractiveElementsDemo />}
          {activeDemo === 'typography' && <TypographyDemo />}
          {activeDemo === 'loading' && <LoadingStatesDemo />}
          {activeDemo === 'morphing' && <MorphingShapesDemo />}
          {activeDemo === 'colors' && <ColorPickerDemo />}
          {activeDemo === 'timeline' && <TimelineDemo />}
          {activeDemo === 'cardflip' && <CardFlipDemo />}
          {activeDemo === 'waves' && <WaveAnimationDemo />}
          {activeDemo === 'glitch' && <GlitchEffectDemo />}
          {activeDemo === 'magnetic' && <MagneticButtonDemo />}
          {activeDemo === 'scroll' && <ScrollRevealDemo />}
          {activeDemo === 'gestures' && <GesturesDemo />}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}

function AnimationDemo() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div 
      className="space-y-6"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {/* Gradient Box with Animation */}
      <motion.div
        className="w-full h-64 bg-gradient-to-br from-primary via-secondary to-primary rounded-lg flex items-center justify-center relative overflow-hidden"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: hovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
        <motion.div
          className="text-4xl font-bold text-white relative z-10"
          animate={{
            scale: clicked ? [1, 1.2, 1] : 1,
            rotate: clicked ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          Framer Motion
        </motion.div>
      </motion.div>

      {/* Animated Cards */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-24 bg-muted rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 10px 25px rgba(0, 217, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-8 h-8 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Progress Bar Animation */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Loading Animation</p>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        This demo showcases smooth animations powered by Framer Motion. 
        Hover, click, and interact with elements to see micro-interactions in action.
      </p>
    </motion.div>
  );
}

function ParticleDemo() {
  const [particles, setParticles] = useState([]);

  const createParticle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticle = {
      id: Date.now() + Math.random(),
      x,
      y,
    };
    
    setParticles((prev) => [...prev, newParticle]);
    
    // Remove particle after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-full h-96 bg-gradient-to-br from-background via-muted to-background rounded-lg relative overflow-hidden cursor-crosshair border-2 border-border"
        onClick={createParticle}
        onMouseMove={(e) => {
          if (Math.random() > 0.95) {
            createParticle(e);
          }
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [1, 0.5, 0],
              y: particle.y - 100,
              x: particle.x + (Math.random() - 0.5) * 50,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-muted-foreground text-sm">
            Click or move mouse to create particles
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
          >
            <motion.div
              className="text-2xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              ⭐
            </motion.div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Interactive particle system. Click anywhere to create animated particles that follow physics-based motion.
      </p>
    </motion.div>
  );
}

function InteractiveElementsDemo() {
  const [count, setCount] = useState(0);
  const [dragged, setDragged] = useState(false);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Counter with Animation */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <motion.button
            className="px-6 py-3 bg-primary text-background rounded-lg font-semibold"
            onClick={() => setCount(count - 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            -
          </motion.button>
          <motion.div
            key={count}
            className="text-4xl font-bold min-w-[100px] text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {count}
          </motion.div>
          <motion.button
            className="px-6 py-3 bg-primary text-background rounded-lg font-semibold"
            onClick={() => setCount(count + 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            +
          </motion.button>
        </div>
      </div>

      {/* Draggable Card */}
      <motion.div
        className="h-32 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragStart={() => setDragged(true)}
        onDragEnd={() => setDragged(false)}
        animate={{
          scale: dragged ? 1.05 : 1,
          rotate: dragged ? 5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.p
          className="text-white font-semibold"
          animate={{
            opacity: dragged ? 0.8 : 1,
          }}
        >
          {dragged ? 'Dragging...' : 'Drag me!'}
        </motion.p>
      </motion.div>

      {/* Toggle Switch */}
      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
        <span className="text-sm font-medium">Toggle Animation</span>
        <motion.div
          className="w-14 h-7 bg-muted-foreground/30 rounded-full p-1 cursor-pointer"
          onClick={() => setDragged(!dragged)}
        >
          <motion.div
            className="w-5 h-5 bg-primary rounded-full"
            animate={{
              x: dragged ? 28 : 0,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
      </div>

      {/* Progress Circle */}
      <div className="flex justify-center">
        <motion.div
          className="w-32 h-32 relative"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-primary"
              strokeDasharray={352}
              strokeDashoffset={352}
              animate={{
                strokeDashoffset: [352, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </svg>
        </motion.div>
      </div>

      <p className="text-sm text-muted-foreground">
        Interactive elements with drag, toggle, and counter animations. All powered by Framer Motion for smooth interactions.
      </p>
    </motion.div>
  );
}

function TypographyDemo() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Text */}
      <div className="space-y-4">
        <motion.h1
          className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundSize: '200% auto',
          }}
        >
          Animated Typography
        </motion.h1>
        
        <motion.p
          className="text-2xl"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          animate={{
            scale: hovered ? 1.1 : 1,
            letterSpacing: hovered ? '0.2em' : '0em',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Hover me for effect
        </motion.p>
      </div>

      {/* Text Reveal */}
      <div className="h-20 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-2xl font-bold"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Scrolling Text Animation
        </motion.div>
      </div>

      {/* Letter Animation */}
      <div className="flex justify-center gap-2">
        {'DEVELOPMENT'.split('').map((letter, i) => (
          <motion.span
            key={i}
            className="text-3xl font-bold"
            initial={{ y: 0, opacity: 0.5 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>

      {/* Typewriter Effect */}
      <div className="h-16 bg-muted rounded-lg flex items-center px-4">
        <motion.span
          className="text-lg font-mono"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.span>
      </div>

      <p className="text-sm text-muted-foreground">
        Advanced typography animations including gradient text, letter spacing, scrolling, and typewriter effects.
      </p>
    </motion.div>
  );
}

function LoadingStatesDemo() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Spinner */}
      <div className="flex justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Dots Loading */}
      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-primary rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Skeleton Loader */}
      <div className="space-y-3">
        <motion.div
          className="h-4 bg-muted rounded"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="h-4 bg-muted rounded w-3/4"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="h-4 bg-muted rounded w-1/2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.4,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="flex justify-center">
        <motion.div
          className="w-20 h-20 bg-primary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Various loading states including spinners, dots, skeleton loaders, progress bars, and pulse effects.
      </p>
    </motion.div>
  );
}

function MorphingShapesDemo() {
  const [shape, setShape] = useState(0);
  const shapes = ['circle', 'square', 'triangle', 'diamond'];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Morphing Shape */}
      <div className="flex justify-center items-center h-64">
        <motion.div
          className="w-32 h-32 bg-primary"
          animate={{
            borderRadius: shape === 0 ? '50%' : shape === 1 ? '0%' : shape === 2 ? '0%' : '0%',
            rotate: shape === 2 ? [0, 45, 0] : shape === 3 ? [0, 45, 0] : 0,
            clipPath: shape === 2 
              ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
              : shape === 3
              ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              : 'none',
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          onClick={() => setShape((shape + 1) % shapes.length)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>

      {/* Blob Animation */}
      <div className="flex justify-center">
        <motion.div
          className="w-40 h-40 bg-gradient-to-r from-primary to-secondary rounded-full"
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Shape Grid */}
      <div className="grid grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-16 bg-primary"
            animate={{
              borderRadius: i % 2 === 0 ? '50%' : '0%',
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Click the shape to morph between circle, square, triangle, and diamond. Blob animation creates organic, fluid shapes.
      </p>
    </motion.div>
  );
}

function ColorPickerDemo() {
  const [selectedColor, setSelectedColor] = useState('#00d9ff');
  const colors = ['#00d9ff', '#9333ea', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Color Display */}
      <motion.div
        className="h-48 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: selectedColor }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <motion.span
          className="text-2xl font-bold text-white drop-shadow-lg"
          key={selectedColor}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {selectedColor}
        </motion.span>
      </motion.div>

      {/* Color Swatches */}
      <div className="flex gap-4 justify-center flex-wrap">
        {colors.map((color) => (
          <motion.button
            key={color}
            className="w-16 h-16 rounded-full border-4 border-background shadow-lg"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              borderColor: selectedColor === color ? color : 'transparent',
              scale: selectedColor === color ? 1.1 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>

      {/* Gradient Preview */}
      <div className="h-24 rounded-lg overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            background: `linear-gradient(90deg, ${selectedColor}, ${colors[(colors.indexOf(selectedColor) + 1) % colors.length]})`,
          }}
          animate={{
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Interactive color picker with smooth transitions. Click swatches to change the color and see animated gradients.
      </p>
    </motion.div>
  );
}

function TimelineDemo() {
  const steps = [
    { id: 1, label: 'Planning', progress: 100 },
    { id: 2, label: 'Design', progress: 75 },
    { id: 3, label: 'Development', progress: 50 },
    { id: 4, label: 'Testing', progress: 25 },
    { id: 5, label: 'Launch', progress: 0 },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Timeline Dot */}
            <motion.div
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 relative"
              whileHover={{ scale: 1.2 }}
              animate={{
                backgroundColor: step.progress === 100 ? '#10b981' : '#00d9ff',
              }}
            >
              {step.id}
            </motion.div>
            
            {/* Step Content */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">{step.label}</h4>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${step.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{step.progress}% Complete</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Animated timeline showing project progress with smooth transitions and interactive elements.
      </p>
    </motion.div>
  );
}

function CardFlipDemo() {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center">
        <div className="w-64 h-64 perspective-1000">
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
            onClick={() => setFlipped(!flipped)}
          >
            {/* Front */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl"
              style={{ backfaceVisibility: 'hidden' }}
            >
              Front
            </motion.div>
            
            {/* Back */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white font-bold text-xl"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              Back
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Card Stack */}
      <div className="flex justify-center gap-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-20 h-32 bg-primary rounded-lg cursor-pointer"
            whileHover={{ 
              rotateY: 180,
              z: 50,
            }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full bg-secondary rounded-lg" />
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Click the card to flip it. Hover over the card stack to see 3D rotation effects.
      </p>
    </motion.div>
  );
}

function WaveAnimationDemo() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* SVG Wave */}
      <div className="h-48 bg-gradient-to-b from-primary/20 to-transparent rounded-lg overflow-hidden relative">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-primary"
            animate={{
              d: [
                'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
                'M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z',
                'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      {/* Multiple Waves */}
      <div className="h-32 bg-muted rounded-lg overflow-hidden relative">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-full"
            style={{ height: `${30 + i * 10}%` }}
            animate={{
              x: ['-100%', '0%'],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.3,
            }}
          >
            <div className="h-full bg-primary opacity-20 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Ripple Effect */}
      <div className="flex justify-center items-center h-32">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border-2 border-primary rounded-full"
            animate={{
              scale: [0, 3],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Various wave animations including SVG waves, multiple wave layers, and ripple effects.
      </p>
    </motion.div>
  );
}

function GlitchEffectDemo() {
  const [glitch, setGlitch] = useState(false);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glitch Text */}
      <div className="relative h-32 flex items-center justify-center">
        <motion.h1
          className="text-4xl font-bold"
          animate={glitch ? {
            x: [0, -2, 2, -2, 2, 0],
            textShadow: [
              '2px 0 #00d9ff, -2px 0 #ec4899',
              '-2px 0 #00d9ff, 2px 0 #ec4899',
              '2px 0 #00d9ff, -2px 0 #ec4899',
              '0 0 transparent',
            ],
          } : {}}
          transition={{ duration: 0.1 }}
          onMouseEnter={() => setGlitch(true)}
          onMouseLeave={() => setGlitch(false)}
        >
          GLITCH EFFECT
        </motion.h1>
      </div>

      {/* Glitch Box */}
      <motion.div
        className="h-48 bg-gradient-to-r from-primary to-secondary rounded-lg relative overflow-hidden"
        animate={glitch ? {
          clipPath: [
            'inset(0 0 0 0)',
            'inset(20% 0 60% 0)',
            'inset(60% 0 20% 0)',
            'inset(0 0 0 0)',
          ],
        } : {}}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setGlitch(true)}
        onMouseLeave={() => setGlitch(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
          Hover for Glitch
        </div>
      </motion.div>

      {/* Scan Lines */}
      <div className="h-32 bg-muted rounded-lg relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00d9ff 2px, #00d9ff 4px)',
          }}
          animate={{
            y: [0, 20],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Glitch effects with text distortion, color shifts, and scan lines. Hover over elements to trigger glitch animations.
      </p>
    </motion.div>
  );
}

function MagneticCards() {
  const cards = [1, 2, 3].map(() => useState({ x: 0, y: 0 }));
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map(([pos, setPos], i) => (
        <motion.div
          key={i}
          className="h-24 bg-primary rounded-lg cursor-pointer"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setPos({ x, y });
          }}
          onMouseLeave={() => setPos({ x: 0, y: 0 })}
          animate={{
            x: pos.x * 0.2,
            y: pos.y * 0.2,
            rotateX: pos.y * 0.05,
            rotateY: pos.x * 0.05,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.05 }}
        />
      ))}
    </div>
  );
}

function MagneticButtonDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [refPosition, setRefPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, ref) => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
      setRefPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Magnetic Button */}
      <div className="flex justify-center items-center h-64">
        <motion.button
          className="px-8 py-4 bg-primary text-background rounded-lg font-semibold text-lg relative"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          animate={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Magnetic Button
        </motion.button>
      </div>

      {/* Magnetic Cards */}
      <MagneticCards />

      <p className="text-sm text-muted-foreground">
        Magnetic buttons that follow your cursor with smooth spring physics. Move your mouse over the buttons to see the effect.
      </p>
    </motion.div>
  );
}

function ScrollRevealDemo() {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll Triggered Elements */}
      <div className="space-y-4 h-96 overflow-y-auto p-4 border border-border rounded-lg">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="h-32 bg-primary rounded-lg flex items-center justify-center text-white font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            Scroll Item {i}
          </motion.div>
        ))}
      </div>

      {/* Fade In on Scroll */}
      <motion.div
        className="h-32 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Fade In on Scroll
      </motion.div>

      {/* Slide In */}
      <motion.div
        className="h-32 bg-muted rounded-lg flex items-center justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        Slide In from Left
      </motion.div>

      <p className="text-sm text-muted-foreground">
        Scroll-triggered animations that reveal content as you scroll. Elements fade in, slide in, and scale up when they enter the viewport.
      </p>
    </motion.div>
  );
}

function GesturesDemo() {
  const [swiped, setSwiped] = useState(false);
  const [panned, setPanned] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Swipeable Card */}
      <motion.div
        className="h-32 bg-primary rounded-lg flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        onDragEnd={(e, info) => {
          if (Math.abs(info.offset.x) > 50) {
            setSwiped(true);
            setTimeout(() => setSwiped(false), 1000);
          }
        }}
        animate={{
          x: swiped ? (swiped ? 200 : 0) : 0,
          opacity: swiped ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {swiped ? 'Swiped!' : 'Swipe me left or right'}
      </motion.div>

      {/* Pan Gesture */}
      <motion.div
        className="h-32 bg-secondary rounded-lg flex items-center justify-center text-white font-bold cursor-move relative overflow-hidden"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDrag={(e, info) => setPanned({ x: info.offset.x, y: info.offset.y })}
        onDragEnd={() => setPanned({ x: 0, y: 0 })}
        animate={{
          x: panned.x,
          y: panned.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        Pan me around
      </motion.div>

      {/* Pinch Zoom (Simulated) */}
      <div className="h-32 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="w-20 h-20 bg-primary rounded-lg"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs">
            Pinch
          </div>
        </motion.div>
      </div>

      {/* Long Press */}
      <motion.button
        className="w-full h-16 bg-primary text-background rounded-lg font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onTapStart={() => {
          const timer = setTimeout(() => {
            alert('Long press detected!');
          }, 1000);
          return () => clearTimeout(timer);
        }}
      >
        Long Press Me (1 second)
      </motion.button>

      <p className="text-sm text-muted-foreground">
        Various gesture interactions including swipe, pan, pinch zoom simulation, and long press detection.
      </p>
    </motion.div>
  );
}

