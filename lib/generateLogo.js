function generateLogo(data) {
  const { shape, shape_color, text, text_color } = data;

  if (shape === 'Triangle'){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
      <polygon points="50,10 90,90 10,90" fill="${shape_color}" />
      <text x="50" y="50" width="50%" height="50% dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text}</text>
      </svg>`
  } else if (shape === 'Circle') {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${shape_color}" />
      <text x="50" y="50" width="50%" height="50% dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text}</text>
      </svg>`
  } else if (shape === 'Square') {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="80" fill="${shape_color}" />
      <text x="50" y="50" width="50%" height="50%" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>`
  }
}

module.exports = generateLogo;