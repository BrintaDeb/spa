/**
 * SAMARIYA SANCTUARY - Soothing Water Droplets & Light Rain Soundscape Engine
 * 
 * Synthesizes organic light rainfall, delicate water droplets (cavitation plinks),
 * and gentle thermal spring trickles using pure Web Audio API without external media files.
 * Supports multi-track mode switching: 'all' (Rain + Droplets), 'rain' (Light Rain), 'droplets' (Water Drops).
 */

class SoundscapeEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.rainGain = null;
    this.streamGain = null;
    this.dropsGain = null;
    this.rainSource = null;
    this.streamSource = null;
    this.rainFilter = null;
    this.streamFilter = null;
    this.dropTimer = null;
    this.mode = 'all'; // 'all', 'rain', 'droplets'
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  setMode(newMode) {
    this.mode = newMode;
    if (this.isPlaying && this.ctx) {
      const now = this.ctx.currentTime;
      if (this.rainGain) {
        const target = (newMode === 'all' || newMode === 'rain') ? 0.18 : 0.0001;
        this.rainGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, target), now + 0.6);
      }
      if (this.dropsGain) {
        const target = (newMode === 'all' || newMode === 'droplets') ? 0.45 : 0.0001;
        this.dropsGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, target), now + 0.6);
      }
      if (this.streamGain) {
        const target = (newMode === 'all' || newMode === 'droplets') ? 0.12 : 0.0001;
        this.streamGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, target), now + 0.6);
      }
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  // Generate 4-second looping pink noise buffer for soft rain
  createRainBuffer() {
    const sampleRate = this.ctx.sampleRate;
    const bufferSize = sampleRate * 4;
    const buffer = this.ctx.createBuffer(2, bufferSize, sampleRate);
    
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.045;
        b6 = white * 0.115926;
      }
    }
    return buffer;
  }

  // Generate 4-second soft stream buffer
  createStreamBuffer() {
    const sampleRate = this.ctx.sampleRate;
    const bufferSize = sampleRate * 4;
    const buffer = this.ctx.createBuffer(2, bufferSize, sampleRate);

    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        lastOut = (lastOut + (0.02 * white)) / 1.02;
        data[i] = lastOut * 0.35;
      }
    }
    return buffer;
  }

  playWaterDrop() {
    if (!this.isPlaying || !this.ctx || !this.dropsGain) return;
    if (this.mode !== 'all' && this.mode !== 'droplets') return;

    const now = this.ctx.currentTime;
    
    // Create sine oscillator for droplet bubble
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Natural soothing water harmonic notes (pentatonic frequencies)
    const pitches = [680, 780, 880, 1040, 1180, 1320, 1540];
    const baseFreq = pitches[Math.floor(Math.random() * pitches.length)] * (0.96 + Math.random() * 0.08);

    osc.type = 'sine';

    // Cavitation frequency chirp: rapid upward frequency bend mimicking surface water tension break
    const riseRatio = 1.35 + Math.random() * 0.25;
    osc.frequency.setValueAtTime(baseFreq * 0.75, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * riseRatio, now + 0.035);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, now + 0.12);

    // Droplet volume envelope: crisp 2ms attack, smooth exponential decay
    const dropVol = 0.1 + Math.random() * 0.15;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(dropVol, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

    // Stereo panning (spatial drops falling all around)
    if (this.ctx.createStereoPanner) {
      const panner = this.ctx.createStereoPanner();
      panner.pan.setValueAtTime((Math.random() * 1.6) - 0.8, now);
      osc.connect(gain);
      gain.connect(panner);
      panner.connect(this.dropsGain);
    } else {
      osc.connect(gain);
      gain.connect(this.dropsGain);
    }

    osc.start(now);
    osc.stop(now + 0.16);

    // Clean up
    setTimeout(() => {
      try {
        osc.disconnect();
        gain.disconnect();
      } catch (e) {}
    }, 200);
  }

  scheduleNextDrop() {
    if (!this.isPlaying) return;

    // Organic random delays: occasional gentle double-drops, random pauses
    const isDouble = Math.random() < 0.28;
    const delay = isDouble ? (70 + Math.random() * 110) : (450 + Math.random() * 1100);

    this.dropTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.playWaterDrop();
        this.scheduleNextDrop();
      }
    }, delay);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    // 1. Master Gain with smooth fade in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.4, now + 2.0);
    this.masterGain.connect(this.ctx.destination);

    // 2. Light Rain Channel
    this.rainGain = this.ctx.createGain();
    const rainVol = (this.mode === 'all' || this.mode === 'rain') ? 0.18 : 0.0001;
    this.rainGain.gain.setValueAtTime(rainVol, now);
    this.rainGain.connect(this.masterGain);

    this.rainFilter = this.ctx.createBiquadFilter();
    this.rainFilter.type = 'lowpass';
    this.rainFilter.frequency.setValueAtTime(850, now);
    this.rainFilter.Q.setValueAtTime(0.7, now);
    this.rainFilter.connect(this.rainGain);

    this.rainSource = this.ctx.createBufferSource();
    this.rainSource.buffer = this.createRainBuffer();
    this.rainSource.loop = true;
    this.rainSource.connect(this.rainFilter);
    this.rainSource.start(now);

    // 3. Soft Stream / Trickle Channel
    this.streamGain = this.ctx.createGain();
    const streamVol = (this.mode === 'all' || this.mode === 'droplets') ? 0.12 : 0.0001;
    this.streamGain.gain.setValueAtTime(streamVol, now);
    this.streamGain.connect(this.masterGain);

    this.streamFilter = this.ctx.createBiquadFilter();
    this.streamFilter.type = 'lowpass';
    this.streamFilter.frequency.setValueAtTime(450, now);
    this.streamFilter.connect(this.streamGain);

    this.streamSource = this.ctx.createBufferSource();
    this.streamSource.buffer = this.createStreamBuffer();
    this.streamSource.loop = true;
    this.streamSource.connect(this.streamFilter);
    this.streamSource.start(now);

    // 4. Delicate Water Droplets Channel
    this.dropsGain = this.ctx.createGain();
    const dropsVol = (this.mode === 'all' || this.mode === 'droplets') ? 0.45 : 0.0001;
    this.dropsGain.gain.setValueAtTime(dropsVol, now);
    this.dropsGain.connect(this.masterGain);

    this.isPlaying = true;

    // Start organic droplet scheduler
    this.scheduleNextDrop();
  }

  stop() {
    if (!this.isPlaying || !this.masterGain) return;

    if (this.dropTimer) {
      clearTimeout(this.dropTimer);
      this.dropTimer = null;
    }

    const now = this.ctx.currentTime;
    // Smooth 1.2s fade out to avoid clicks
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      if (this.rainSource) {
        try { this.rainSource.stop(); this.rainSource.disconnect(); } catch (e) {}
        this.rainSource = null;
      }
      if (this.streamSource) {
        try { this.streamSource.stop(); this.streamSource.disconnect(); } catch (e) {}
        this.streamSource = null;
      }
      this.isPlaying = false;
    }, 1200);
  }
}

export const soundscape = new SoundscapeEngine();
export default soundscape;
