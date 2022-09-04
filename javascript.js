/* creating the grid */

const container = document.querySelector('#grid-container');

for (let i = 0; i < 256; i++) {
  container.appendChild(document.createElement('div')).setAttribute('id', 'gridBox');
}

/* creating the eventlistener to color the grid */

var gridBox = document.querySelectorAll('#gridBox')

gridBox.forEach(box => {
  box.addEventListener('mouseover', ()=>{
    box.setAttribute('style', 'background-color:red;');
  })
});

/* creating button to reset the grid */

const resetButton = document.querySelector('#reset')

resetButton.addEventListener('click', () => {
  var gridBox = document.querySelectorAll('#gridBox');
  gridBox.forEach(box => {
    box.removeAttribute('style');
  });
})

/* creating the Zoom Out Button */

const zoomOutButton = document.querySelector('#grid-size-out')

zoomOutButton.addEventListener('click', () => {
  if (document.querySelectorAll('#gridBox').length === 256) {
  
  for (let i = 0; i < 3840; i++) {
    container.appendChild(document.createElement('div')).setAttribute('id', 'gridBox');
  };

  container.setAttribute('style', 'grid-template-columns: repeat(64, 1fr);');

  var gridBox = document.querySelectorAll('#gridBox');

  gridBox.forEach(box => {
    box.removeAttribute('style');
    box.addEventListener('mouseover', ()=>{
      box.setAttribute('style', 'background-color:red;');
    })
  });

} else {
  var gridBox = document.querySelectorAll('#gridBox');
  gridBox.forEach(box => {
    box.removeAttribute('style');
  });
}

});

/* creating the Zoom In Button */

const zoomInButton = document.querySelector('#grid-size-in')

zoomInButton.addEventListener('click', () => {
  if (document.querySelectorAll('#gridBox').length > 256) {
  
    var gridBox = document.querySelectorAll('#gridBox');

    gridBox.forEach(box => {
      box.remove();
    });

    for (let i = 0; i < 256; i++) {
      container.appendChild(document.createElement('div')).setAttribute('id', 'gridBox');
    };

    container.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);');

    var gridBox = document.querySelectorAll('#gridBox');

    gridBox.forEach(box => {
      box.addEventListener('mouseover', ()=>{
        box.setAttribute('style', 'background-color:red;');
      })

    });

  } else {
    var gridBox = document.querySelectorAll('#gridBox');
    gridBox.forEach(box => {
      box.removeAttribute('style');
    });
  }

});