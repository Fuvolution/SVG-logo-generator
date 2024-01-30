const Shape = require('./shape');

class Square extends Shape {
    consturctor(color, text, textColor) {
        super('Square', color, text, textColor);
    } 

    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Square;