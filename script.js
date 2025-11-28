function scrollToNews() {
    document.getElementById("news").scrollIntoView({
        behavior: "smooth"
    });
}


  const slider = document.getElementById('slider');
        const dotsContainer = document.getElementById('dots');
        const totalSlides = slider.children.length;
        let index = 0;

        for (let i = 0; i < totalSlides; i++) {
            let dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');
        function updateDots() {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function goToSlide(i) {
            index = i;
            slider.style.transform = `translateX(-${index * 100}%)`;
            updateDots();
        }

        document.getElementById('next').onclick = () => {
            index = (index + 1) % totalSlides;
            goToSlide(index);
        };

        document.getElementById('prev').onclick = () => {
            index = (index - 1 + totalSlides) % totalSlides;
            goToSlide(index);
        };

        setInterval(() => {
            index = (index + 1) % totalSlides;
            goToSlide(index);
        }, 10000);

        updateDots();