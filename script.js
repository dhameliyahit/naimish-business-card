var currentIndex = 0;
var images = [
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141003_a8af41ca.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141007_0500b6a4.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141007_b944fb1c.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141006_ac1295c3.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141004_2fe40407.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141000_e6b9b39a.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_141000_0fe0a7fa.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_140957_e7278612.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-07-14_at_140955_a12010c6.jpg",
    "https://cdn0030.qrcodechimp.com/qr/PROD/6464cf7c6a734a24226f7a53/fm/whatsapp_image_2024-06-09_at_100409_40c4212f.jpg"
];

function openModal(index) {
    currentIndex = index;
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    
    modal.style.display = "flex";
    modalImg.src = images[currentIndex];
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeSlide(step) {
    currentIndex += step;
    
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Wrap to the last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Wrap to the first image
    }
    
    var modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentIndex];
}
