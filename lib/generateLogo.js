const { Circle, Square, Triangle } = require('./shape');

function generateLogo(data) {
  const { shape, shape_color, text, text_color } = data;

  if (shape === 'Triangle'){
    return `<polygon points="50,10 90,90 10,90" fill="${shape_color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text}</text>`
  } else if (shape === 'Circle') {
    return `<circle cx="50" cy="50" r="40" fill="${shape_color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text}</text>`
  } else if (shape === 'Square') {
    return `<rect x="10" y="10" width="80" height="80" fill="${shape_color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text}</text>`
  }

  /*
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
  */
}

module.exports = generateLogo;