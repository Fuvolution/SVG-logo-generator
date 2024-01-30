const Shape = require('./shape');

class Triangle extends Shape {
    render() {
        return `<polygon points="50,10 90,90 10,90" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Triangle;