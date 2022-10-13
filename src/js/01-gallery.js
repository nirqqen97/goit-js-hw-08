import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const refs ={
    galleryRef: document.querySelector(".gallery"),
}

const gallyryMarkUp = createGalleryMarkUp(galleryItems)
refs.galleryRef.insertAdjacentHTML("afterbegin",gallyryMarkUp)
    function createGalleryMarkUp(galleryItems) {
    return galleryItems.map(({preview,original,description})=>{
        return `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}}" />
      </a></li>`
})    
// large-image.jpg обязательно надо добавить в хреф
.join('');
}
// ------------------------------------------------------1------------------------------------
refs.galleryRef.addEventListener('click',onImageClick)
function onImageClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== "IMG") {
        return
    }
    console.log(evt.target.nodeName)
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
    captionDelay: 250

 });
