document.addEventListener('DOMContentLoaded', function () {

  const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
  ];

  const galleryContainer = document.querySelector('.gallery-container');

  images.forEach((imageUrl) => {
    const anchor = document.createElement('a');
    anchor.setAttribute('data-lightbox', 'gallery');
    anchor.setAttribute('data-title', 'Image');
    anchor.href = imageUrl;

    const image = document.createElement('img');
    image.src = imageUrl;
    image.classList.add('gallery-image');

    anchor.appendChild(image);
    galleryContainer.appendChild(anchor);
  });

  // Exemple de codi per gestionar un esdeveniment de clic de botó
  const button = document.querySelector('#myButton');
  button.addEventListener('click', () => {
    // Fer alguna cosa quan es faci clic al botó
  });
});
