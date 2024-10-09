document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-images img');
    const totalSlides = slides.length;
    const bannerImages = document.querySelector('.banner-images');
    let slideInterval;

    // Função para mostrar o slide baseado no índice atual
    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        bannerImages.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    // Função para ir para o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Função para ir para o slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }


    // Reiniciar o intervalo para os slides automáticos
    function restartSlideInterval() {
        clearInterval(slideInterval); // Para o intervalo atual
        slideInterval = setInterval(nextSlide, 5000); // Reinicia o intervalo de 5 segundos
    }

    // Evento para os botões de navegação
    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        restartSlideInterval(); // Reinicia o intervalo ao clicar
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        restartSlideInterval(); // Reinicia o intervalo ao clicar
    });

    // Troca automática de slide a cada 5 segundos
    slideInterval = setInterval(nextSlide, 5000);

    // Exibe o primeiro slide ao carregar a página
    showSlide(currentSlide);

    // Atualiza o tamanho dos slides se a janela for redimensionada
    window.addEventListener('resize', () => showSlide(currentSlide));
});
