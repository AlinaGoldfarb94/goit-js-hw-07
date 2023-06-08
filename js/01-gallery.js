import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const newGalleryList = galleryItems
.map((galleryItem) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}" onclick="event.preventDefault ()">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}" 
      />
    </a>
  </li>`
})
.join('');
console.log(newGalleryList)

galleryEl.insertAdjacentHTML('beforeend',newGalleryList);
console.log(galleryEl);

const container = document.querySelector('.gallery');
console.log(container);

container.addEventListener ('click', onA)
function onA (e) {
e.target.src = e.target.dataset.source
console.log(e.target.src)

const instance = basicLightbox.create(`
    <img src='${e.target.src}' width="800" height="600">
`)
instance.show()
}



// console.log(galleryItems);
