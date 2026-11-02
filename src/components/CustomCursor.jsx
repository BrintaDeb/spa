import React, { useEffect, useState } from 'react';

/**
 * Tactile Fluid Dual-Ring Magnetic Cursor
 * Morphs into a frosted glass pill displaying context labels (BREATHE, EXPLORE, RESERVE).
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ mode: 'default', text: '' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (desktop mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check for elements with data-cursor attributes
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || '';
        setCursorState({ mode: 'interactive', text });
      } else if (e.target.closest('button, a, input, select, [role="button"]')) {
        setCursorState({ mode: 'hover', text: '' });
      } else {
        setCursorState({ mode: 'default', text: '' });
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the trailing magnetic ring
    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isInteractive = cursorState.mode === 'interactive';
  const isHover = cursorState.mode === 'hover';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Precision inner gold dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isInteractive ? 0 : 1,
        }}
      />

      {/* Trailing tactile ring / morphing glass pill */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center ${
          isInteractive
            ? 'px-4 py-1.5 rounded-full bg-[#2C2623]/80 dark:bg-[#E6E2DA]/90 text-[#F6F4F0] dark:text-[#111210] backdrop-blur-md border border-[#D4AF37]/50 shadow-lg scale-100'
            : isHover
            ? 'w-12 h-12 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 backdrop-blur-xs scale-110'
            : 'w-8 h-8 rounded-full border border-[#D4AF37]/40 scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {isInteractive && (
          <span className="font-mono-telemetry text-[10px] tracking-widest font-semibold uppercase">
            {cursorState.text}
          </span>
        )}
      </div>
    </div>
  );
}

