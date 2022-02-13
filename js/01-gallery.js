import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", renderGallery(galleryItems));
galleryRef.addEventListener("click", openImage);

function renderGallery(gallery) {
  const makeUp = gallery
    .map(
      (gallery) => `
    <div class="gallery__item">
    <a class="gallery__link" href="${gallery.original}">
    <img class="gallery__image"
    src="${gallery.preview}"
    data-source="${gallery.original}"
    alt="${gallery.description}">
    </a></div>
    `
    )
    .join("");

  return makeUp;
}

// 2. Реализация делегирования на div.gallery и получение
// url большого изображения.

function openImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}" />
        `);
  console.dir(event.target.dataset.source);
  instance.show();
}
