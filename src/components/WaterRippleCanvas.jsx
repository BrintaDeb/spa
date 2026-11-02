import React, { useEffect, useRef } from 'react';

/**
 * Interactive 60fps Water Displacement & Ambient Thermal Mist Canvas
 * Supports mouse pointer & mobile touch gestures on Android and iOS.
 * Simulates gentle ripples over thermal spring waters and floating botanical light dust.
 */
export default function WaterRippleCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Dynamic water ripples
    const ripples = [];
    const maxRipples = 14;

    class Ripple {
      constructor(x, y, color = 'peach') {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.maxRadius = Math.random() * 80 + 60;
        this.alpha = 0.55;
        this.speed = Math.random() * 1.4 + 0.9;
        this.color = color;
      }

      update() {
        this.radius += this.speed;
        this.alpha = Math.max(0, 0.55 * (1 - this.radius / this.maxRadius));
      }

      draw(c) {
        if (this.alpha <= 0.01) return;
        c.save();
        
        // Outer concentric ring
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.strokeStyle = this.color === 'pink'
          ? `rgba(253, 145, 204, ${this.alpha * 0.5})`
          : `rgba(9, 49, 141, ${this.alpha * 0.35})`;
        c.lineWidth = 1.2;
        c.stroke();

        // Inner echo ring
        if (this.radius > 16) {
          c.beginPath();
          c.arc(this.x, this.y, this.radius * 0.62, 0, Math.PI * 2);
          c.strokeStyle = `rgba(253, 145, 204, ${this.alpha * 0.3})`;
          c.lineWidth = 0.8;
          c.stroke();
        }

        c.restore();
      }
    }

    // Floating ambient thermal mist & botanical luminous particles
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.4 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.45 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    }));

    let lastSpawnTime = 0;
    const addRipple = (clientX, clientY, color = 'pink') => {
      const now = performance.now();
      if (now - lastSpawnTime > 90) {
        if (ripples.length >= maxRipples) ripples.shift();
        ripples.push(new Ripple(clientX, clientY, color));
        lastSpawnTime = now;
      }
    };

    // Desktop pointer move
    const handlePointerMove = (e) => {
      addRipple(e.clientX, e.clientY);
    };

    // Mobile touch events
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        addRipple(e.touches[0].clientX, e.touches[0].clientY, 'royal');
      }
    };

    const handlePointerDown = (e) => {
      // Trigger a dual ripple on click/tap
      addRipple(e.clientX, e.clientY, 'pink');
      setTimeout(() => {
        if (ripples.length >= maxRipples) ripples.shift();
        ripples.push(new Ripple(e.clientX, e.clientY, 'royal'));
      }, 120);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Render ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.update();
        r.draw(ctx);
        if (r.alpha <= 0.01) {
          ripples.splice(i, 1);
        }
      }

      // Render floating thermal mist particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulse += 0.025;

        if (p.y < -20) {
          p.y = window.innerHeight + 10;
          p.x = Math.random() * window.innerWidth;
        }

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 145, 204, ${currentOpacity * 0.45})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
