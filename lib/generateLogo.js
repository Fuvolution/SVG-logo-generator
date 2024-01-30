const { Circle, Square, Triangle } = require('./shape');

function generateLogo(data) {
  const { shape, shape_color, text, text_color } = data;

  let shapeInstance;

  switch (shape) {
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
    case 'Circle':
      shapeInstance = new Circle();
      break;
    default:
      console.log('Invalid shape');
      return '';
  }

  shapeInstance.setColor(shape_color);
  shapeInstance.setText(text);
  shapeInstance.setTextColor(text_color);

  return shapeInstance.render();
}

module.exports = generateLogo;