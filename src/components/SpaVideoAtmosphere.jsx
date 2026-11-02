import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Maximize2, Sparkles, Wind, Droplets, CloudRain, Play, Pause, Flower2, Heart } from 'lucide-react';
import soundscape from '../utils/soundscape';

/**
 * SpaVideoAtmosphere - Flagship Procedural Video & Ambient Effects Canvas
 * Renders real-time 60fps soothing spa simulations:
 * 1. Thermal Springs & Caustics
 * 2. Basalt Stones & Rising Steam
 * 3. Rose Petal Botanical Waters
 * 4. Soothing Rain & Water Droplets
 */
export default function SpaVideoAtmosphere({ onOpenBooking }) {
  const [activeMode, setActiveMode] = useState('springs'); // 'springs', 'steam', 'rose', 'rain'
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [breathePhase, setBreathePhase] = useState('Inhale'); // Inhale, Hold, Exhale
  const [breatheSeconds, setBreatheSeconds] = useState(4);
  const [mistDensity, setMistDensity] = useState(45);
  const canvasRef = useRef(null);

  // Soundscape toggle
  const toggleSound = () => {
    const active = soundscape.toggle();
    setIsPlayingSound(active);
  };

  // Sync audio mode with visual mode
  useEffect(() => {
    if (activeMode === 'springs') soundscape.setMode('droplets');
    else if (activeMode === 'steam') soundscape.setMode('rain');
    else if (activeMode === 'rose') soundscape.setMode('droplets');
    else if (activeMode === 'rain' || activeMode === 'candle') soundscape.setMode('all');
  }, [activeMode]);

  // 4-4-4 Guided Breathing rhythm timer
  useEffect(() => {
    let timer;
    let sec = 4;
    let phase = 'Inhale';

    const interval = setInterval(() => {
      sec -= 1;
      if (sec <= 0) {
        if (phase === 'Inhale') {
          phase = 'Hold';
          sec = 4;
        } else if (phase === 'Hold') {
          phase = 'Exhale';
          sec = 4;
        } else {
          phase = 'Inhale';
          sec = 4;
        }
        setBreathePhase(phase);
      }
      setBreatheSeconds(sec);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Procedural Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles for steam & petals
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 1.5,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
    }));

    let t = 0;

    const render = () => {
      if (!isPaused) {
        t += 0.02;
        ctx.clearRect(0, 0, width, height);

        // MODE 1: Thermal Springs & Liquid Caustics
        if (activeMode === 'springs') {
          // Warm mineral pool gradient
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, 'rgba(237, 245, 242, 0.95)');
          grad.addColorStop(0.5, 'rgba(255, 247, 244, 0.9)');
          grad.addColorStop(1, 'rgba(240, 230, 222, 0.95)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          // Caustic light shimmer waves
          ctx.save();
          for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.moveTo(0, height * 0.3 + Math.sin(t + i) * 35);
            for (let x = 0; x < width; x += 25) {
              const y =
                height * 0.35 +
                Math.sin(x * 0.008 + t * 0.8 + i) * 25 +
                Math.cos(x * 0.005 - t * 0.5) * 20;
              ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(253, 145, 204, ${0.14 - i * 0.015})`;
            ctx.lineWidth = 18 - i * 2;
            ctx.stroke();
          }
          ctx.restore();

          // Gentle concentric surface droplets
          const dropRadius = ((t * 40) % 180);
          const dropAlpha = Math.max(0, 1 - dropRadius / 180);
          ctx.beginPath();
          ctx.arc(width * 0.5, height * 0.45, dropRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(9, 49, 141, ${dropAlpha * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // MODE 2: Basalt Stones & Rising Herbal Steam
        else if (activeMode === 'steam') {
          // Darker tranquil sauna gradient
          const grad = ctx.createRadialGradient(width * 0.5, height * 0.7, 50, width * 0.5, height * 0.5, width * 0.8);
          grad.addColorStop(0, 'rgba(56, 49, 46, 0.92)');
          grad.addColorStop(0.6, 'rgba(43, 37, 35, 0.96)');
          grad.addColorStop(1, 'rgba(26, 22, 21, 0.98)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          // Simulated smooth river stones silhouettes
          ctx.fillStyle = 'rgba(20, 18, 17, 0.85)';
          ctx.beginPath();
          ctx.ellipse(width * 0.35, height * 0.8, 120, 60, -0.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(width * 0.65, height * 0.82, 140, 70, 0.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(width * 0.5, height * 0.73, 90, 45, 0, 0, Math.PI * 2);
          ctx.fill();

          // Warm amber heat glow on stones
          const stoneGlow = ctx.createRadialGradient(width * 0.5, height * 0.72, 10, width * 0.5, height * 0.72, 90);
          stoneGlow.addColorStop(0, 'rgba(247, 156, 97, 0.35)');
          stoneGlow.addColorStop(1, 'rgba(247, 156, 97, 0)');
          ctx.fillStyle = stoneGlow;
          ctx.beginPath();
          ctx.arc(width * 0.5, height * 0.72, 90, 0, Math.PI * 2);
          ctx.fill();

          // Volumetric rising steam vapor trails
          particles.slice(0, mistDensity).forEach((p) => {
            p.y -= p.speedY * 1.5;
            p.x += Math.sin(t + p.angle) * 0.8;
            p.size += 0.08;

            if (p.y < height * 0.1 || p.size > 28) {
              p.y = height * 0.75;
              p.x = width * 0.5 + (Math.random() - 0.5) * (width * 0.4);
              p.size = Math.random() * 5 + 3;
            }

            const steamAlpha = Math.max(0, 0.35 * (1 - (height * 0.75 - p.y) / (height * 0.65)));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(246, 235, 225, ${steamAlpha * 0.45})`;
            ctx.fill();
          });
        }

        // MODE 3: Rose Water & Floating Botanical Petals
        else if (activeMode === 'rose') {
          // Romantic soft blush watercolor bath
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, 'rgba(255, 241, 237, 0.95)');
          grad.addColorStop(0.5, 'rgba(253, 230, 224, 0.92)');
          grad.addColorStop(1, 'rgba(249, 215, 206, 0.95)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          // Flowing botanical rose petals
          particles.forEach((p) => {
            p.y += p.speedY * 0.4;
            p.x += Math.sin(t + p.angle) * 0.6;
            p.angle += p.spin;

            if (p.y > height + 20) {
              p.y = -20;
              p.x = Math.random() * width;
            }

            // Draw organic rose petal shape
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size * 2.2, p.size * 1.3, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(253, 145, 204, ${p.alpha * 0.7})`;
            ctx.fill();
            ctx.restore();
          });
        }

        // MODE 4: Soothing Rain & Water Droplets
        else if (activeMode === 'rain' || activeMode === 'candle') {
          // Deep tranquil royal blue night water pool
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, 'rgba(9, 49, 141, 0.96)');
          grad.addColorStop(0.5, 'rgba(6, 32, 94, 0.98)');
          grad.addColorStop(1, 'rgba(4, 20, 60, 1)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          // Diagonal light rain streaks
          ctx.strokeStyle = 'rgba(253, 145, 204, 0.25)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          for (let i = 0; i < 45; i++) {
            const rx = (i * 47 + t * 380) % (width + 100) - 50;
            const ry = (i * 73 + t * 850) % (height + 100) - 50;
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx - 7, ry + 22);
          }
          ctx.stroke();

          // Concentric water drop ripple rings
          const dropCenters = [
            { x: width * 0.25, y: height * 0.4, speed: 26, offset: 0 },
            { x: width * 0.65, y: height * 0.3, speed: 22, offset: 40 },
            { x: width * 0.45, y: height * 0.7, speed: 30, offset: 90 },
            { x: width * 0.8, y: height * 0.65, speed: 24, offset: 130 },
          ];

          dropCenters.forEach((d) => {
            for (let ring = 0; ring < 3; ring++) {
              const rad = ((t * d.speed + d.offset + ring * 25) % 130);
              const alpha = Math.max(0, 0.45 * (1 - rad / 130));
              ctx.beginPath();
              ctx.ellipse(d.x, d.y, rad * 1.5, rad * 0.7, 0, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(253, 145, 204, ${alpha})`;
              ctx.lineWidth = 1.3;
              ctx.stroke();
            }
          });
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [activeMode, isPaused, mistDensity]);

  const modes = [
    { id: 'springs', label: 'Thermal Waters', icon: Droplets, desc: 'Mineral Hydro-Caustics' },
    { id: 'steam', label: 'Basalt & Steam', icon: Wind, desc: 'Herbal Vapor Mist' },
    { id: 'rose', label: 'Botanical Rose', icon: Flower2, desc: 'Rosewater Bath & Petals' },
    { id: 'rain', label: 'Rain & Droplets', icon: CloudRain, desc: 'Soothing Rain & Droplets' },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 bg-[#FFFFFF] overflow-hidden border-b border-[#09318D]/15">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-script text-4xl sm:text-5xl text-[#FD91CC] font-bold block">
            Atmospheric Stillness
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-[0.18em] text-[#09318D] font-extrabold">
            Live Generated Spa Experience
          </h2>
          <p className="text-sm sm:text-base text-[#38528E] font-medium leading-relaxed">
            Tune your sensory state before your arrival at Samariya. Interact with fluid 60fps thermal water ripples,
            volumetric steam, and soothing gentle rain with organic water droplets.
          </p>
        </div>

        {/* The Interactive Video Canvas Studio Box */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#09318D]/20 bg-[#09318D]">
          
          {/* 60fps Procedural Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Top Floating Glass Controls Bar */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 z-20 pointer-events-auto">
            {/* Vibe Selection Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/90 backdrop-blur-md border border-[#09318D]/15 shadow-sm">
              {modes.map((m) => {
                const Icon = m.icon;
                const active = activeMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveMode(m.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                      active
                        ? 'bg-[#09318D] text-white shadow-xs'
                        : 'text-[#38528E] hover:text-[#09318D] hover:bg-[#09318D]/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Audio & Playback Quick Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                className={`p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-sm flex items-center gap-1.5 ${
                  isPlayingSound
                    ? 'bg-[#FD91CC] text-[#09318D] border-[#FD91CC]'
                    : 'bg-white/90 text-[#09318D] border-[#09318D]/20 hover:bg-white'
                }`}
                title="Toggle Soothing Rain & Water Droplets Soundscape"
              >
                {isPlayingSound ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-[10px] font-bold uppercase tracking-wider hidden md:inline">
                  {isPlayingSound ? 'Rain & Drops ON' : 'Audio OFF'}
                </span>
              </button>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2.5 rounded-full bg-white/90 hover:bg-white text-[#09318D] backdrop-blur-md border border-[#09318D]/20 shadow-sm transition-all"
                title={isPaused ? 'Resume Motion' : 'Pause Motion'}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Center Guided Breathing Halo Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 p-4">
            <div className="relative flex items-center justify-center">
              {/* Concentric Breathing Glow Ring */}
              <div
                className={`w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-white/60 transition-all duration-1000 ${
                  breathePhase === 'Inhale'
                    ? 'scale-125 bg-white/15 shadow-[0_0_50px_rgba(255,255,255,0.4)]'
                    : breathePhase === 'Hold'
                    ? 'scale-125 bg-amber-400/10 shadow-[0_0_60px_rgba(247,156,97,0.4)]'
                    : 'scale-90 bg-white/5'
                }`}
              />

              {/* Central Text HUD */}
              <div className="absolute text-center text-white drop-shadow-md">
                <span className="font-script text-3xl sm:text-4xl block text-amber-200">
                  {breathePhase}
                </span>
                <span className="text-xl sm:text-2xl font-heading font-extrabold tracking-widest block">
                  {breatheSeconds}s
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-80 mt-1 block">
                  4-4-4 Meditation
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Context Banner & Direct Reservation Trigger */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 z-20 pointer-events-auto bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Sparkles className="w-5 h-5 text-amber-300 hidden sm:block shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide block">
                  {modes.find((m) => m.id === activeMode)?.desc}
                </span>
                <span className="text-[10px] text-white/80 block">
                  Private treatment chambers in Banamalipur, Agartala • Open 10 AM – 8:30 PM Daily
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                onOpenBooking({
                  name: `${modes.find((m) => m.id === activeMode)?.label} Ritual`,
                  price: 999,
                  duration: '60 MIN',
                })
              }
              className="w-full sm:w-auto px-6 py-2.5 rounded-full btn-peach text-xs font-bold uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              Book This Experience @ ₹999 →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

