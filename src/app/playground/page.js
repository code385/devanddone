'use client';

import Section from '@/components/ui/Section';
import InteractiveDemo from '@/components/playground/InteractiveDemo';
import AIDemo from '@/components/playground/AIDemo';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

export default function PlaygroundPage() {
  return (
    <Section className="pt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Playground</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This is not a template agency. Explore interactive demos showcasing our 
            technical capabilities with 3D experiences, animations, and AI tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <InteractiveDemo />
          <AIDemo />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most agencies show you static portfolios. We show you what we can build 
              in real-time. This playground demonstrates:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>3D interactive experiences using Three.js and React Three Fiber</li>
              <li>Smooth animations and micro-interactions with Framer Motion</li>
              <li>AI-powered tools and integrations</li>
              <li>Modern web technologies working together seamlessly</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              If our own website is this advanced, imagine what we'll build for you.
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

