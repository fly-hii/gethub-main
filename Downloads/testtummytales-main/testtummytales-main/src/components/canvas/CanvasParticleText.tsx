import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  formed: boolean;
}

const CanvasParticleText = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const isComponentMountedRef = useRef(true); // Ref to track mount status

  // Meow Script function
  const executeMetaScript = () => {
    console.log('Executing Meow Script after Tummytales formation...');
    
    try {
      console.log('🐱 Meow Script activated!');
    } catch (error) {
      console.error('Error executing Meow Script:', error);
    }
  };

  useEffect(() => {
    isComponentMountedRef.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // Enable alpha for transparency
    if (!ctx) return;

    // Define handleResize in a scope accessible by both init and cleanup
    const handleResize = () => {
      if (!canvas || !ctx || !isComponentMountedRef.current) return;
      
      const dpr = window.devicePixelRatio || 1;
      
      // Set canvas physical size
      canvas.width = canvas.offsetWidth * dpr;
      // The division by 3 makes the canvas's drawable height one-third of its styled height.
      canvas.height = (canvas.offsetHeight / 3) * dpr; 
      
      // Scale context to use CSS pixels for drawing commands
      ctx.resetTransform(); // Reset any previous transforms before scaling
      ctx.scale(dpr, dpr);

      // Note: If you want the text to re-form on resize, you'd need to re-run createTextParticles
      // and restart the animation. For simplicity, this example doesn't do that.
      // The particles will maintain their target positions relative to the initial size.
    };
    
    const createTextParticles = () => {
      const particles: Particle[] = [];
      if (!canvas || !ctx) return particles;

      const FONT_STYLE = 'bold 150px "Meow Script", "Noto Serif Telugu", cursive';
      const text = 'Tummytales';

      // The effective CSS height of the main canvas where particles will be drawn
      const effectiveCanvasCssHeight = canvas.offsetHeight / 3;
      const effectiveCanvasCssWidth = canvas.offsetWidth;
      
      // Create temporary canvas to get pixel data
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return particles;
      
      // Set tempCanvas dimensions to match the effective drawing area of the main canvas
      tempCanvas.width = effectiveCanvasCssWidth;
      tempCanvas.height = effectiveCanvasCssHeight;
      
      tempCtx.font = FONT_STYLE;
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillStyle = 'white'; // Color doesn't matter for alpha, but set it
      // Draw text centered within the effective height of the tempCanvas
      tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);
      
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = imageData.data;
      
      const spacing = 3; 
      for (let y = 0; y < tempCanvas.height; y += spacing) {
        for (let x = 0; x < tempCanvas.width; x += spacing) {
          const index = (y * tempCanvas.width + x) * 4;
          const alpha = data[index + 3];
          
          if (alpha > 128 && particles.length < 3000) {
            particles.push({
              x: Math.random() * effectiveCanvasCssWidth,
              y: Math.random() * effectiveCanvasCssHeight,
              targetX: x, // These are CSS pixel coordinates
              targetY: y, // These are CSS pixel coordinates
              vx: 0,
              vy: 0,
              size: Math.random() * 1.2 + 0.8,
              alpha: 0,
              formed: false
            });
          }
        }
      }
      return particles;
    };

    const initAnimation = async () => {
      try {
        // Wait for all document fonts (including Meow Script) to be loaded
        await document.fonts.ready;
      } catch (fontError) {
        console.warn("Font loading error or timeout, proceeding with available fonts:", fontError);
      }

      if (!isComponentMountedRef.current || !canvas || !ctx) return;

      handleResize(); // Initial resize and scale
      window.addEventListener('resize', handleResize);

      particlesRef.current = createTextParticles();
      if (!isComponentMountedRef.current) return;
      
      let startTime = Date.now();
      const formationDuration = 800;
      let meowScriptExecuted = false;
      
      const animate = () => {
        if (!isComponentMountedRef.current || !ctx || !canvas) {
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          return;
        }
        
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / formationDuration, 1);
        
        // Clear canvas using CSS dimensions because context is scaled
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight / 3); 
        
        if (progress >= 1 && !meowScriptExecuted) {
          executeMetaScript();
          meowScriptExecuted = true;
        }
        
        particlesRef.current.forEach((particle, index) => {
          const particleDelay = index * 0.5;
          const particleProgress = Math.max(0, Math.min((elapsed - particleDelay) / formationDuration, 1));
          
          if (particleProgress > 0) {
            const easeProgress = 1 - Math.pow(1 - particleProgress, 2);
            const dx = particle.targetX - particle.x;
            const dy = particle.targetY - particle.y;
            
            particle.x += dx * easeProgress * 0.15;
            particle.y += dy * easeProgress * 0.15;
            particle.alpha = Math.min(particleProgress * 1.5, 1);
            
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 8) {
              particle.formed = true;
            }
          }
          
          if (particle.formed && progress >= 1) {
            const time = currentTime * 0.0005;
            particle.x = particle.targetX + Math.sin(time + particle.targetX * 0.008) * 0.8;
            particle.y = particle.targetY + Math.cos(time + particle.targetY * 0.008) * 0.5;
          }
          
          if (particle.alpha > 0) {
            ctx.save();
            ctx.globalAlpha = particle.alpha;
            
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size
            );
            gradient.addColorStop(0, '#8b5cf6');
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0.4)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        });
        
        if (isComponentMountedRef.current) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    initAnimation();
    
    return () => {
      isComponentMountedRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Meow+Script&family=Noto+Serif+Telugu:wght@100..900&display=swap" 
        rel="stylesheet" 
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full" // These classes might be overridden by inline style
        style={{ width: '100%', height: '600px' }} // Visual height of the canvas container
      />
    </>
  );
};

export default CanvasParticleText;