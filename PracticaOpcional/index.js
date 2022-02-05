class Canvas {
    canvas;
    xInitial;
    yInitial;
    color;

    constructor () {
        this.canvas = document.getElementById('canvas-polygon').getContext('2d');
        this.color = 'black'
    }

    setInitial(x, y) {
        this.xInitial = x;
        this.yInitial = y;
    }
    
    draw(x, y) {
        if (this.xInitial && this.yInitial) {
            this.canvas.beginPath();
            this.canvas.strokeStyle = this.color;
            this.canvas.moveTo(this.xInitial, this.yInitial);
            this.canvas.lineTo(x, y);
            this.canvas.stroke();
            this.canvas.closePath();
            this.xInitial = null;
            this.yInitial = null;
        }
    }

    setColor(color) {
        this.color = color;
    }

}

const canvas = new Canvas();

const draw = (event) => {
    canvas.draw(event.layerX, event.layerY);
};

const setInitial = (event) => {
    canvas.setInitial(event.layerX, event.layerY);
};

const setColor = (color) => {
    canvas.setColor(color);
}