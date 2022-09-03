/* creating the grid */

const container = document.querySelector('#grid-container');

for (let i = 0; i < 256; i++) {
  container.appendChild(document.createElement('div')).setAttribute('id', 'gridBox');
}

/* creating the eventlistener to color the grid */

const gridBox = document.querySelectorAll('#gridBox')

gridBox.forEach(box => {
  box.addEventListener('mouseover', ()=>{
    box.setAttribute('style', 'background-color:red;');
  })
});






