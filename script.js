//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentActive = 0;

nextButton.addEventListener('click', () => {
    currentActive++;
    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx <= currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    if (currentActive === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentActive === circles.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

update();
