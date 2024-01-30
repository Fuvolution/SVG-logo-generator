const Shape = require('./shape');

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Circle;