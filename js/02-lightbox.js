import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const newGalleryList = galleryItems
.map((galleryItem) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}" onclick="event.preventDefault ()">
       <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>
 </li>`
})
.join('');
console.log(newGalleryList)

galleryEl.insertAdjacentHTML('beforeend',newGalleryList);
console.log(galleryEl);


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    
    captionDelay: 250,
});




// console.log(galleryItems);
