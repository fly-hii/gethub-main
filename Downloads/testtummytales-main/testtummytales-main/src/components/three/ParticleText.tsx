
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleText = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Create text-shaped particle positions
  const { positions, colors } = useMemo(() => {
    const text = "TUMMYTALES";
    const particlePositions: number[] = [];
    const particleColors: number[] = [];
    
    // Define letter shapes using point patterns for 3D effect
    const letterPatterns: { [key: string]: number[][] } = {
      'T': [
        // Top bar
        [-0.6, 0.6, 0], [-0.4, 0.6, 0], [-0.2, 0.6, 0], [0, 0.6, 0], [0.2, 0.6, 0], [0.4, 0.6, 0], [0.6, 0.6, 0],
        [-0.6, 0.6, -0.2], [-0.4, 0.6, -0.2], [-0.2, 0.6, -0.2], [0, 0.6, -0.2], [0.2, 0.6, -0.2], [0.4, 0.6, -0.2], [0.6, 0.6, -0.2],
        // Vertical line
        [0, 0.4, 0], [0, 0.2, 0], [0, 0, 0], [0, -0.2, 0], [0, -0.4, 0], [0, -0.6, 0],
        [0, 0.4, -0.2], [0, 0.2, -0.2], [0, 0, -0.2], [0, -0.2, -0.2], [0, -0.4, -0.2], [0, -0.6, -0.2],
      ],
      'U': [
        // Left side
        [-0.5, 0.6, 0], [-0.5, 0.4, 0], [-0.5, 0.2, 0], [-0.5, 0, 0], [-0.5, -0.2, 0],
        [-0.5, 0.6, -0.2], [-0.5, 0.4, -0.2], [-0.5, 0.2, -0.2], [-0.5, 0, -0.2], [-0.5, -0.2, -0.2],
        // Bottom
        [-0.3, -0.4, 0], [-0.1, -0.6, 0], [0.1, -0.6, 0], [0.3, -0.4, 0],
        [-0.3, -0.4, -0.2], [-0.1, -0.6, -0.2], [0.1, -0.6, -0.2], [0.3, -0.4, -0.2],
        // Right side
        [0.5, -0.2, 0], [0.5, 0, 0], [0.5, 0.2, 0], [0.5, 0.4, 0], [0.5, 0.6, 0],
        [0.5, -0.2, -0.2], [0.5, 0, -0.2], [0.5, 0.2, -0.2], [0.5, 0.4, -0.2], [0.5, 0.6, -0.2],
      ],
      'M': [
        // Left side
        [-0.5, -0.6, 0], [-0.5, -0.4, 0], [-0.5, -0.2, 0], [-0.5, 0, 0], [-0.5, 0.2, 0], [-0.5, 0.4, 0], [-0.5, 0.6, 0],
        [-0.5, -0.6, -0.2], [-0.5, -0.4, -0.2], [-0.5, -0.2, -0.2], [-0.5, 0, -0.2], [-0.5, 0.2, -0.2], [-0.5, 0.4, -0.2], [-0.5, 0.6, -0.2],
        // Middle peak
        [-0.3, 0.4, 0], [-0.1, 0.2, 0], [0.1, 0.2, 0], [0.3, 0.4, 0],
        [-0.3, 0.4, -0.2], [-0.1, 0.2, -0.2], [0.1, 0.2, -0.2], [0.3, 0.4, -0.2],
        // Right side
        [0.5, 0.6, 0], [0.5, 0.4, 0], [0.5, 0.2, 0], [0.5, 0, 0], [0.5, -0.2, 0], [0.5, -0.4, 0], [0.5, -0.6, 0],
        [0.5, 0.6, -0.2], [0.5, 0.4, -0.2], [0.5, 0.2, -0.2], [0.5, 0, -0.2], [0.5, -0.2, -0.2], [0.5, -0.4, -0.2], [0.5, -0.6, -0.2],
      ],
      'Y': [
        // Left diagonal
        [-0.5, 0.6, 0], [-0.3, 0.4, 0], [-0.1, 0.2, 0],
        [-0.5, 0.6, -0.2], [-0.3, 0.4, -0.2], [-0.1, 0.2, -0.2],
        // Right diagonal
        [0.5, 0.6, 0], [0.3, 0.4, 0], [0.1, 0.2, 0],
        [0.5, 0.6, -0.2], [0.3, 0.4, -0.2], [0.1, 0.2, -0.2],
        // Vertical
        [0, 0, 0], [0, -0.2, 0], [0, -0.4, 0], [0, -0.6, 0],
        [0, 0, -0.2], [0, -0.2, -0.2], [0, -0.4, -0.2], [0, -0.6, -0.2],
      ],
      'A': [
        // Top
        [0, 0.6, 0], [0, 0.6, -0.2],
        // Left side
        [-0.1, 0.4, 0], [-0.2, 0.2, 0], [-0.3, 0, 0], [-0.4, -0.2, 0], [-0.5, -0.4, 0], [-0.5, -0.6, 0],
        [-0.1, 0.4, -0.2], [-0.2, 0.2, -0.2], [-0.3, 0, -0.2], [-0.4, -0.2, -0.2], [-0.5, -0.4, -0.2], [-0.5, -0.6, -0.2],
        // Right side
        [0.1, 0.4, 0], [0.2, 0.2, 0], [0.3, 0, 0], [0.4, -0.2, 0], [0.5, -0.4, 0], [0.5, -0.6, 0],
        [0.1, 0.4, -0.2], [0.2, 0.2, -0.2], [0.3, 0, -0.2], [0.4, -0.2, -0.2], [0.5, -0.4, -0.2], [0.5, -0.6, -0.2],
        // Crossbar
        [-0.2, 0.1, 0], [-0.1, 0.1, 0], [0, 0.1, 0], [0.1, 0.1, 0], [0.2, 0.1, 0],
        [-0.2, 0.1, -0.2], [-0.1, 0.1, -0.2], [0, 0.1, -0.2], [0.1, 0.1, -0.2], [0.2, 0.1, -0.2],
      ],
      'L': [
        // Vertical
        [-0.4, 0.6, 0], [-0.4, 0.4, 0], [-0.4, 0.2, 0], [-0.4, 0, 0], [-0.4, -0.2, 0], [-0.4, -0.4, 0], [-0.4, -0.6, 0],
        [-0.4, 0.6, -0.2], [-0.4, 0.4, -0.2], [-0.4, 0.2, -0.2], [-0.4, 0, -0.2], [-0.4, -0.2, -0.2], [-0.4, -0.4, -0.2], [-0.4, -0.6, -0.2],
        // Bottom
        [-0.2, -0.6, 0], [0, -0.6, 0], [0.2, -0.6, 0], [0.4, -0.6, 0],
        [-0.2, -0.6, -0.2], [0, -0.6, -0.2], [0.2, -0.6, -0.2], [0.4, -0.6, -0.2],
      ],
      'E': [
        // Vertical
        [-0.4, 0.6, 0], [-0.4, 0.4, 0], [-0.4, 0.2, 0], [-0.4, 0, 0], [-0.4, -0.2, 0], [-0.4, -0.4, 0], [-0.4, -0.6, 0],
        [-0.4, 0.6, -0.2], [-0.4, 0.4, -0.2], [-0.4, 0.2, -0.2], [-0.4, 0, -0.2], [-0.4, -0.2, -0.2], [-0.4, -0.4, -0.2], [-0.4, -0.6, -0.2],
        // Top
        [-0.2, 0.6, 0], [0, 0.6, 0], [0.2, 0.6, 0], [0.4, 0.6, 0],
        [-0.2, 0.6, -0.2], [0, 0.6, -0.2], [0.2, 0.6, -0.2], [0.4, 0.6, -0.2],
        // Middle
        [-0.2, 0.1, 0], [0, 0.1, 0], [0.2, 0.1, 0],
        [-0.2, 0.1, -0.2], [0, 0.1, -0.2], [0.2, 0.1, -0.2],
        // Bottom
        [-0.2, -0.6, 0], [0, -0.6, 0], [0.2, -0.6, 0], [0.4, -0.6, 0],
        [-0.2, -0.6, -0.2], [0, -0.6, -0.2], [0.2, -0.6, -0.2], [0.4, -0.6, -0.2],
      ],
      'S': [
        // Top curve
        [0.4, 0.6, 0], [0.2, 0.6, 0], [0, 0.6, 0], [-0.2, 0.6, 0], [-0.4, 0.4, 0],
        [0.4, 0.6, -0.2], [0.2, 0.6, -0.2], [0, 0.6, -0.2], [-0.2, 0.6, -0.2], [-0.4, 0.4, -0.2],
        // Middle
        [-0.2, 0.2, 0], [0, 0.1, 0], [0.2, 0.1, 0],
        [-0.2, 0.2, -0.2], [0, 0.1, -0.2], [0.2, 0.1, -0.2],
        // Bottom curve
        [0.4, -0.4, 0], [0.4, -0.2, 0], [0.2, -0.6, 0], [0, -0.6, 0], [-0.2, -0.6, 0], [-0.4, -0.6, 0],
        [0.4, -0.4, -0.2], [0.4, -0.2, -0.2], [0.2, -0.6, -0.2], [0, -0.6, -0.2], [-0.2, -0.6, -0.2], [-0.4, -0.6, -0.2],
      ]
    };

    const letterSpacing = 1.8;
    const startX = -(text.length * letterSpacing) / 2;

    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      const pattern = letterPatterns[letter] || [[0, 0, 0]];
      const letterX = startX + i * letterSpacing;

      pattern.forEach(([x, y, z]) => {
        // Add multiple particles per point for density
        for (let j = 0; j < 5; j++) {
          particlePositions.push(
            letterX + x + (Math.random() - 0.5) * 0.1,
            y + (Math.random() - 0.5) * 0.1,
            z + (Math.random() - 0.5) * 0.3
          );

          // Pink to purple gradient with some variety
          const hue = 0.85 + Math.random() * 0.15;
          const saturation = 0.7 + Math.random() * 0.3;
          const lightness = 0.5 + Math.random() * 0.4;
          
          const color = new THREE.Color().setHSL(hue, saturation, lightness);
          particleColors.push(color.r, color.g, color.b);
        }
      });
    }

    return {
      positions: new Float32Array(particlePositions),
      colors: new Float32Array(particleColors)
    };
  }, []);

  // Animation
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      const positionAttribute = particlesRef.current.geometry.attributes.position;
      const array = positionAttribute.array as Float32Array;
      
      // Animate particles with floating motion
      for (let i = 0; i < array.length; i += 3) {
        const originalX = positions[i];
        const originalY = positions[i + 1];
        const originalZ = positions[i + 2];
        
        array[i] = originalX + Math.sin(time * 2 + originalX * 3) * 0.03;
        array[i + 1] = originalY + Math.cos(time * 1.5 + originalY * 4) * 0.02;
        array[i + 2] = originalZ + Math.sin(time + originalZ * 5) * 0.015;
      }
      
      positionAttribute.needsUpdate = true;
    }
    
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
};

export default ParticleText;
