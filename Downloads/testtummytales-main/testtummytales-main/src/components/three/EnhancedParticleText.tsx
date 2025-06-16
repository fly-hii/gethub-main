
import { useRef, useMemo } from "react";
import * as THREE from "three";

const EnhancedParticleText = () => {
  const particlesRef = useRef<THREE.Points>(null);

  // Create dense particles for thick, bulky text formation
  const { positions, colors } = useMemo(() => {
    const particleCount = 8000; // Increased for denser text
    const particlePositions: number[] = [];
    const particleColors: number[] = [];
    
    // Define thick letter shapes for "TUMMYTALES" with dense particle patterns
    const letterPatterns: { [key: string]: number[][] } = {
      'T': [
        // Top horizontal line - much thicker
        ...Array.from({length: 30}, (_, i) => [-2.0 + i * 0.133, 2.0, 0]),
        ...Array.from({length: 30}, (_, i) => [-2.0 + i * 0.133, 1.8, 0]),
        ...Array.from({length: 30}, (_, i) => [-2.0 + i * 0.133, 1.6, 0]),
        // Vertical stem - much thicker
        ...Array.from({length: 40}, (_, i) => [0, 2.0 - i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-0.2, 2.0 - i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [0.2, 2.0 - i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-0.4, 2.0 - i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [0.4, 2.0 - i * 0.08, 0]),
      ],
      'U': [
        // Left side - thick
        ...Array.from({length: 35}, (_, i) => [-1.5, 1.8 - i * 0.08, 0]),
        ...Array.from({length: 35}, (_, i) => [-1.3, 1.8 - i * 0.08, 0]),
        ...Array.from({length: 35}, (_, i) => [-1.7, 1.8 - i * 0.08, 0]),
        // Bottom curve - dense and smooth
        ...Array.from({length: 25}, (_, i) => [-1.5 + i * 0.12, -1.0 - Math.sin(i * Math.PI / 24) * 0.4, 0]),
        ...Array.from({length: 25}, (_, i) => [-1.5 + i * 0.12, -0.8 - Math.sin(i * Math.PI / 24) * 0.4, 0]),
        ...Array.from({length: 25}, (_, i) => [-1.5 + i * 0.12, -1.2 - Math.sin(i * Math.PI / 24) * 0.4, 0]),
        // Right side - thick
        ...Array.from({length: 35}, (_, i) => [1.5, -1.0 + i * 0.08, 0]),
        ...Array.from({length: 35}, (_, i) => [1.3, -1.0 + i * 0.08, 0]),
        ...Array.from({length: 35}, (_, i) => [1.7, -1.0 + i * 0.08, 0]),
      ],
      'M': [
        // Left side - thick
        ...Array.from({length: 40}, (_, i) => [-1.8, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-1.6, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-2.0, -1.5 + i * 0.08, 0]),
        // Left diagonal - thick
        ...Array.from({length: 20}, (_, i) => [-1.8 + i * 0.09, -1.5 + i * 0.16, 0]),
        ...Array.from({length: 20}, (_, i) => [-1.6 + i * 0.09, -1.3 + i * 0.16, 0]),
        ...Array.from({length: 20}, (_, i) => [-2.0 + i * 0.09, -1.7 + i * 0.16, 0]),
        // Right diagonal - thick
        ...Array.from({length: 20}, (_, i) => [0 + i * 0.09, 1.7 - i * 0.16, 0]),
        ...Array.from({length: 20}, (_, i) => [0.2 + i * 0.09, 1.5 - i * 0.16, 0]),
        ...Array.from({length: 20}, (_, i) => [-0.2 + i * 0.09, 1.9 - i * 0.16, 0]),
        // Right side - thick
        ...Array.from({length: 40}, (_, i) => [1.8, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [1.6, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [2.0, -1.5 + i * 0.08, 0]),
      ],
      'Y': [
        // Left diagonal - thick
        ...Array.from({length: 15}, (_, i) => [-1.5 + i * 0.1, -1.5 + i * 0.2, 0]),
        ...Array.from({length: 15}, (_, i) => [-1.3 + i * 0.1, -1.3 + i * 0.2, 0]),
        ...Array.from({length: 15}, (_, i) => [-1.7 + i * 0.1, -1.7 + i * 0.2, 0]),
        // Right diagonal - thick
        ...Array.from({length: 15}, (_, i) => [1.5 - i * 0.1, -1.5 + i * 0.2, 0]),
        ...Array.from({length: 15}, (_, i) => [1.3 - i * 0.1, -1.3 + i * 0.2, 0]),
        ...Array.from({length: 15}, (_, i) => [1.7 - i * 0.1, -1.7 + i * 0.2, 0]),
        // Vertical stem - thick
        ...Array.from({length: 20}, (_, i) => [0, 1.8 - i * 0.16, 0]),
        ...Array.from({length: 20}, (_, i) => [-0.2, 1.8 - i * 0.16, 0]),
        ...Array.from({length: 20}, (_, i) => [0.2, 1.8 - i * 0.16, 0]),
      ],
      'A': [
        // Left side - thick
        ...Array.from({length: 25}, (_, i) => [-1.2 - i * 0.02, -1.5 + i * 0.12, 0]),
        ...Array.from({length: 25}, (_, i) => [-1.0 - i * 0.02, -1.3 + i * 0.12, 0]),
        ...Array.from({length: 25}, (_, i) => [-1.4 - i * 0.02, -1.7 + i * 0.12, 0]),
        // Right side - thick
        ...Array.from({length: 25}, (_, i) => [1.2 + i * 0.02, -1.5 + i * 0.12, 0]),
        ...Array.from({length: 25}, (_, i) => [1.0 + i * 0.02, -1.3 + i * 0.12, 0]),
        ...Array.from({length: 25}, (_, i) => [1.4 + i * 0.02, -1.7 + i * 0.12, 0]),
        // Crossbar - thick
        ...Array.from({length: 15}, (_, i) => [-0.7 + i * 0.093, 0.3, 0]),
        ...Array.from({length: 15}, (_, i) => [-0.7 + i * 0.093, 0.1, 0]),
        ...Array.from({length: 15}, (_, i) => [-0.7 + i * 0.093, 0.5, 0]),
        // Top point - thick
        [0, 1.8, 0], [-0.1, 1.8, 0], [0.1, 1.8, 0],
        [0, 1.6, 0], [-0.1, 1.6, 0], [0.1, 1.6, 0],
      ],
      'L': [
        // Vertical line - thick
        ...Array.from({length: 40}, (_, i) => [-1.2, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-1.0, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-1.4, -1.5 + i * 0.08, 0]),
        // Horizontal bottom - thick
        ...Array.from({length: 20}, (_, i) => [-1.2 + i * 0.12, -1.5, 0]),
        ...Array.from({length: 20}, (_, i) => [-1.2 + i * 0.12, -1.3, 0]),
        ...Array.from({length: 20}, (_, i) => [-1.2 + i * 0.12, -1.7, 0]),
      ],
      'E': [
        // Vertical line - thick
        ...Array.from({length: 40}, (_, i) => [-1.2, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-1.0, -1.5 + i * 0.08, 0]),
        ...Array.from({length: 40}, (_, i) => [-1.4, -1.5 + i * 0.08, 0]),
        // Top horizontal - thick
        ...Array.from({length: 15}, (_, i) => [-1.2 + i * 0.133, 1.7, 0]),
        ...Array.from({length: 15}, (_, i) => [-1.2 + i * 0.133, 1.5, 0]),
        ...Array.from({length: 15}, (_, i) => [-1.2 + i * 0.133, 1.9, 0]),
        // Middle horizontal - thick
        ...Array.from({length: 12}, (_, i) => [-1.2 + i * 0.1, 0.1, 0]),
        ...Array.from({length: 12}, (_, i) => [-1.2 + i * 0.1, -0.1, 0]),
        ...Array.from({length: 12}, (_, i) => [-1.2 + i * 0.1, 0.3, 0]),
        // Bottom horizontal - thick
        ...Array.from({length: 15}, (_, i) => [-1.2 + i * 0.133, -1.5, 0]),
        ...Array.from({length: 15}, (_, i) => [-1.2 + i * 0.133, -1.3, 0]),
        ...Array.from({length: 15}, (_, i) => [-1.2 + i * 0.133, -1.7, 0]),
      ],
      'S': [
        // Top curve - thick
        ...Array.from({length: 18}, (_, i) => [1.5 - i * 0.167, 1.7 - Math.sin(i * Math.PI / 17) * 0.3, 0]),
        ...Array.from({length: 18}, (_, i) => [1.5 - i * 0.167, 1.5 - Math.sin(i * Math.PI / 17) * 0.3, 0]),
        ...Array.from({length: 18}, (_, i) => [1.5 - i * 0.167, 1.9 - Math.sin(i * Math.PI / 17) * 0.3, 0]),
        // Middle section - thick
        ...Array.from({length: 12}, (_, i) => [-0.7 + i * 0.117, 0.1 + Math.sin(i * Math.PI / 11) * 0.2, 0]),
        ...Array.from({length: 12}, (_, i) => [-0.7 + i * 0.117, -0.1 + Math.sin(i * Math.PI / 11) * 0.2, 0]),
        ...Array.from({length: 12}, (_, i) => [-0.7 + i * 0.117, 0.3 + Math.sin(i * Math.PI / 11) * 0.2, 0]),
        // Bottom curve - thick
        ...Array.from({length: 18}, (_, i) => [-1.5 + i * 0.167, -1.5 + Math.sin(i * Math.PI / 17) * 0.3, 0]),
        ...Array.from({length: 18}, (_, i) => [-1.5 + i * 0.167, -1.3 + Math.sin(i * Math.PI / 17) * 0.3, 0]),
        ...Array.from({length: 18}, (_, i) => [-1.5 + i * 0.167, -1.7 + Math.sin(i * Math.PI / 17) * 0.3, 0]),
      ]
    };

    const text = "TUMMYTALES";
    const letterSpacing = 4.5; // Increased spacing for bulkier letters
    const startX = -(text.length * letterSpacing) / 2 + letterSpacing / 2;

    let particleIndex = 0;
    
    // Place particles directly in text formation
    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      const pattern = letterPatterns[letter] || [[0, 0, 0]];
      const letterX = startX + i * letterSpacing;

      pattern.forEach(([x, y, z]) => {
        if (particleIndex < particleCount) {
          particlePositions.push(letterX + x, y, z);
          
          // Bright pink colors with variation
          const pinkIntensity = 0.7 + Math.sin(particleIndex * 0.02) * 0.3;
          const color = new THREE.Color().setHSL(0.83, 1.0, pinkIntensity); // Bright pink
          particleColors.push(color.r, color.g, color.b);
          
          particleIndex++;
        }
      });
    }

    // Fill remaining space with invisible particles
    for (let i = particleIndex; i < particleCount; i++) {
      particlePositions.push(0, 0, -1000); // Hide them far away
      particleColors.push(0, 0, 0); // Make them invisible
    }

    return {
      positions: new Float32Array(particlePositions),
      colors: new Float32Array(particleColors)
    };
  }, []);

  return (
    <group position={[0, 0, 0]}>
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
          size={0.4} // Increased particle size for better visibility
          vertexColors
          transparent
          opacity={1.0} // Full opacity
          blending={THREE.AdditiveBlending}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
};

export default EnhancedParticleText;
