function toggleImages(category) {
    var images = document.querySelectorAll('.menu-image');

    // Hide all images
    images.forEach(function(image) {
        image.style.display = 'none';
    });

    // Show images of the selected category
    var selectedImages = document.querySelectorAll('.menu-image.' + category);
    selectedImages.forEach(function(image) {
        image.style.display = 'block';
    });

    // Show the image container
    document.getElementById('image-container').style.display = 'flex';

    item.classList.add('active');
}



