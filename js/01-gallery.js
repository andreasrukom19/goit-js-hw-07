import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

function renderList(images) {
  const markup = images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item" >
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" >
      </a>
    </li>`
  }).join('');

  list.innerHTML = markup;
}

renderList(galleryItems);

list.addEventListener('click', showImage);

function showImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const linkOrigin = event.target.dataset.source;
  const originImage = basicLightbox.create(`
    <img src="${linkOrigin}" width="800" height="600">
  `)
  originImage.show();
}

console.log(galleryItems);
