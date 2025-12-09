document.addEventListener('DOMContentLoaded', () => {
    const blowButton = document.getElementById('blow-button');
    const flames = document.querySelectorAll('.flame');
    const candlesContainer = document.getElementById('candles-container');
    const birthdayMessage = document.getElementById('birthday-message');
    const photoGallery = document.getElementById('photo-gallery');

    blowButton.addEventListener('click', () => {
        // 1. Blow out the candles (Flames Off)
        flames.forEach(flame => {
            flame.classList.add('blown-out');
        });

        // 2. Hide the button
        blowButton.style.display = 'none';
        
        // 3. Display the message and photos
        // Hide the candles container and show the message
        candlesContainer.style.display = 'none';
        birthdayMessage.classList.remove('hidden');

        // Ensure photo gallery is visible/styled correctly
        photoGallery.style.opacity = 1;

        console.log("Candles blown out and message displayed!");
    });
});