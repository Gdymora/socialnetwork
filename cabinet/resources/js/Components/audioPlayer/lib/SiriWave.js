class SiriWave {
    constructor(opt = {}) {
        this.phase = 0;
        this.run = false; 
        console.log(opt)
        // UI vars
        this.ratio = opt.ratio || window.devicePixelRatio || 1;
        this.width = this.ratio * (opt.width || 320);
        this.width_2 = this.width / 2;
        this.width_4 = this.width / 4;
        this.height = this.ratio * (opt.height || 100);
        this.height_2 = this.height / 2;
        this.MAX = this.height_2 - 4;

        // Constructor options
        this.amplitude = opt.amplitude || 1;
        this.speed = opt.speed || 0.2;
        this.frequency = opt.frequency || 6;
        this.color = this.hex2rgb(opt.color || "#fff") || "255,255,255";

        // Canvas
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        if (opt.cover) {
            this.canvas.style.width = this.canvas.style.height = "100%";
        } else {
            this.canvas.style.width = `${this.width / this.ratio}px`;
            this.canvas.style.height = `${this.height / this.ratio}px`;
        }

        this.container = opt.container || document.body;
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        // Start
        if (opt.autostart) {
            this.start();
        }
    }

    hex2rgb(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(
            shorthandRegex,
            (m, r, g, b) => r + r + g + g + b + b
        );
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
                  result[3],
                  16
              )}`
            : null;
    }

    _GATF_cache = {};
    _globAttFunc(x) {
        if (this._GATF_cache[x] == null) {
            this._GATF_cache[x] = Math.pow(4 / (4 + Math.pow(x, 4)), 4);
        }
        return this._GATF_cache[x];
    }

    _xpos(i) {
        return this.width_2 + i * this.width_4;
    }

    _ypos(i, attenuation) {
        var att = (this.MAX * this.amplitude) / attenuation;
        return (
            this.height_2 +
            this._globAttFunc(i) *
                att *
                Math.sin(this.frequency * i - this.phase)
        );
    }

    _drawLine(attenuation, color, width) {
        this.ctx.moveTo(0, 0);
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width || 1;

        var i = -2;
        while ((i += 0.01) <= 2) {
            var y = this._ypos(i, attenuation);
            if (Math.abs(i) >= 1.9) y = this.height_2;
            this.ctx.lineTo(this._xpos(i), y);
        }

        this.ctx.stroke();
    }

    _clear() {
        this.ctx.globalCompositeOperation = "destination-out";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.globalCompositeOperation = "source-over";
    }

    _draw() {
        if (this.run === false) return;

        this.phase = (this.phase + Math.PI * this.speed) % (2 * Math.PI);

        this._clear();
        this._drawLine(-2, `rgba(${this.color},0.1)`);
        this._drawLine(-6, `rgba(${this.color},0.2)`);
        this._drawLine(4, `rgba(${this.color},0.4)`);
        this._drawLine(2, `rgba(${this.color},0.6)`);
        this._drawLine(1, `rgba(${this.color},1)`, 1.5);

        if (window.requestAnimationFrame) {
            requestAnimationFrame(this._draw.bind(this));
            return;
        }
        setTimeout(this._draw.bind(this), 20);
    }

    start() {
        this.phase = 0;
        this.run = true;
        this._draw();
    }

    stop() {
        this.phase = 0;
        this.run = false;
    }

    setSpeed(v) {
        this.speed = v;
    }

    setNoise(v) {
        this.setAmplitude(v);
    }

    setAmplitude(v) {
        this.amplitude = Math.max(Math.min(v, 1), 0);
    }
}

export default SiriWave;
