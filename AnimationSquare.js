function changeColor() {
    var rect = document.getElementById('myRect');
    var currentColor = rect.getAttribute('fill');
    var newColor;
    switch (currentColor) {case 'blue': newColor = 'red';
        break;
      case 'red': newColor = 'green';
        break;
      case 'green': newColor = 'orange';
        break;
      case 'orange': newColor = 'blue';
        break;
      default: newColor = 'blue'; 
    }
  rect.setAttribute('fill', newColor);
}