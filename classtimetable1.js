// Add images dynamically
const scheduleDivs = document.querySelectorAll('.schedule');

scheduleDivs.forEach(div => {
    const day = div.getAttribute('id');
    div.style.backgroundImage = `url(${day.toLowerCase()}.jpg)`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';
});
