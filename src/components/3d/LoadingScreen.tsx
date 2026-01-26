import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.7;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          roughness={0.1}
          metalness={0.9}
          wireframe
          emissive="#00d4ff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 300);
          return 100;
        }
        return prev + Math.random() * 25 + 15;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="relative w-64 h-64 mb-8">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            <Suspense fallback={null}>
              <LoadingGeometry />
            </Suspense>
          </Canvas>
        </div>

        <motion.h2
          className="text-2xl font-heading font-bold text-gradient mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading Experience
        </motion.h2>

        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="mt-4 text-muted-foreground font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
