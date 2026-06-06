window.gameSounds = {
    ctx: null,

    getContext() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) {
                return null;
            }
            this.ctx = new AudioContext();
        }
        return this.ctx;
    },

    play(type) {
        const ctx = this.getContext();
        if (!ctx) {
            return;
        }

        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.connect(gain);
        gain.connect(ctx.destination);

        switch (type) {
            case 'correct':
                oscillator.type = 'triangle';
                oscillator.frequency.value = 660;
                gain.gain.value = 0.15;
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.14);
                break;
            case 'wrong':
                oscillator.type = 'sine';
                oscillator.frequency.value = 220;
                gain.gain.value = 0.12;
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.20);
                break;
            case 'hint':
                oscillator.type = 'triangle';
                oscillator.frequency.value = 520;
                gain.gain.value = 0.12;
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.18);
                break;
            case 'win':
                gain.gain.value = 0.12;
                const notes = [880, 1046, 784];
                let startTime = ctx.currentTime;
                notes.forEach((freq, index) => {
                    const noteOsc = ctx.createOscillator();
                    const noteGain = ctx.createGain();
                    noteOsc.connect(noteGain);
                    noteGain.connect(ctx.destination);
                    noteOsc.type = 'triangle';
                    noteOsc.frequency.value = freq;
                    noteGain.gain.value = 0.14;
                    noteOsc.start(startTime + index * 0.12);
                    noteOsc.stop(startTime + index * 0.12 + 0.12);
                });
                break;
            default:
                oscillator.type = 'sine';
                oscillator.frequency.value = 440;
                gain.gain.value = 0.1;
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.14);
                break;
        }
    }
};
