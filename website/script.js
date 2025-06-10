document.getElementById('imageInput').addEventListener('change', function(event) {
    const gallery = document.getElementById('gallery');
    Array.from(event.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'gallery-image';
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

document.getElementById('bookBtn').addEventListener('click', function() {
    const result = document.getElementById('bookingResult');
    result.textContent = 'Thank you! Your booking for ₹1 has been received.';
});
