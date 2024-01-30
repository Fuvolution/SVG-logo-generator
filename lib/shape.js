class Shape{
    constructor( shape, color, text, textColor) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setShape(shape){
        this.shape = shape;
    }

    setColor(color){
        this.color = color;
    }

    setText(text){
        this.text = text;
    }

    setTextColor(text){
        this.textColor = textColor;
    }
}

module.exports = Shape; 