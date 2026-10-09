'use client';

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private timerInterval: any = null;
  private oscillatorInterval: any = null;

  public init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTrack(frequencyBase: number = 432, mood: string = 'dawn') {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    this.stop();
    this.isPlaying = true;

    // 1. Vinyl Crackle & Ambient Rain Warmth
    this.startVinylNoise();

    // 2. Warm Rhodes / Lo-Fi Chords
    const chordScales: { [key: string]: number[] } = {
      dawn: [261.63, 329.63, 392.0, 493.88, 523.25], // Cmaj7, E, G, B
      groove: [293.66, 349.23, 440.0, 523.25, 587.33], // Dm7, F, A, C
      lounge: [220.0, 261.63, 329.63, 392.0, 440.0], // Am7, C, E, G
      midnight: [196.0, 246.94, 293.66, 369.99, 440.0], // Gmaj7#11
    };

    const notes = chordScales[mood] || chordScales.dawn;
    let noteIdx = 0;

    const playHarmonic = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = mood === 'midnight' ? 'sawtooth' : 'triangle';
      const freq = notes[noteIdx % notes.length];
      noteIdx++;

      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass filter for warm lofi vibe
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800 + Math.random() * 400, this.ctx.currentTime);
      filter.Q.setValueAtTime(2, this.ctx.currentTime);

      // Smooth attack and gentle decay
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.07, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 3.6);
    };

    playHarmonic();
    this.oscillatorInterval = setInterval(playHarmonic, 2200);
  }

  private startVinylNoise() {
    if (!this.ctx || !this.masterGain) return;

    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Pink noise approximation for warm tape hiss
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.012;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1400;

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.value = 0.04;

      this.noiseNode.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      this.noiseNode.start();
    } catch {
      // Audio buffer fallback safe
    }
  }

  public setVolume(volume: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume * 0.3)), this.ctx.currentTime);
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.oscillatorInterval) {
      clearInterval(this.oscillatorInterval);
      this.oscillatorInterval = null;
    }
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {}
      this.noiseNode = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const soundEngine = new AmbientSoundEngine();
