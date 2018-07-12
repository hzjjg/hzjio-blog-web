import $ from "jquery";
export class Main {

    private canvas: HTMLCanvasElement;
    private $canvas: JQuery<HTMLCanvasElement>;
    private ctx: CanvasRenderingContext2D;
    private isDrawing: boolean;

    private startX: number;
    private startY: number;

    constructor() {
        this.canvas = <HTMLCanvasElement>$('#canvas')[0];
        this.$canvas = $(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.init()
    }

    private bindEvent() {
        this.$canvas.on('mousedown', (e) => {
            let sx = e.pageX - this.$canvas.offset().left;
            let sy = e.pageY; - this.$canvas.offset().top;

            this.isDrawing = true;
            this.ctx.beginPath();

            this.startX =sx;
            this.startY = sy;
            // this.ctx.moveTo(sx, sy);
        })

        this.$canvas.on('mousemove', (e) => {
            if (this.isDrawing) {
                let sx = e.pageX - this.$canvas.offset().left;
                let sy = e.pageY - this.$canvas.offset().top;

                this.drawRect(this.startX, this.startY, sx - this.startX, sy - this.startY)
                // this.drawLine(sx, sy)
            }
        })

        this.$canvas.on('mouseup', (e) => {
            this.isDrawing = false;
            this.startX = null;
            this.startY = null;
        })
    }

    private drawLine(x: number, y: number) {
        this.ctx.lineTo(x, y);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#ff4444';
        this.ctx.stroke();
        this.ctx.save();
    }

    private drawRect(x: number, y: number, w: number, h: number) {
        this.ctx.clearRect(0,0,this.$canvas.width(),this.$canvas.height());
        this.ctx.strokeRect(x, y, w, h);
        this.ctx.fillRect(x, y, w, h);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#ff4444';
        this.ctx.fillStyle = 'rgba(255, 165, 0, 1)'
        this.ctx.stroke();
    }

    private init() {
        const winWidth = $(window).width();
        const winHeight = $(window).height();

        this.$canvas.attr('width', winWidth).attr('height', winHeight);

        this.bindEvent();
    }
}

const main = new Main();