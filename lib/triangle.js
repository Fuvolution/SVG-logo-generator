const Triangle = require('./shapes');

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = Triangle;