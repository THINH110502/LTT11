document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('#auto-slider .item');
    let currentIndex = 0;
    let intervalTime = 4000;
    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }
    items[currentIndex].classList.add('active');
    setInterval(showNextItem, intervalTime);
});