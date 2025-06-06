const draggable = document.querySelector('#draggable');
const dropzone = document.querySelector('#dropzone');
const result = document.querySelector('#result');
const generateButton = document.querySelector('#generate');

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.outerHTML);
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('hovering');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('hovering');
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('hovering');
    const data = e.dataTransfer.getData('text/plain');
    dropzone.innerHTML += data;
});

generateButton.addEventListener('click', () => {
    result.textContent = formatHTML(dropzone.outerHTML);
    //console.log(formatHTML(dropzone.outerHTML));
});