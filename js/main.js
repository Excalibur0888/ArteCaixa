// Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.body;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Hero Slider
const heroSlides = [
    {
        image: 'img/hero1.jpg',
        title: 'Caixas Decorativas Artesanais',
        description: 'Criamos peças únicas que combinam beleza e funcionalidade'
    },
    {
        image: 'img/hero2.jpg',
        title: 'Design Exclusivo',
        description: 'Cada peça é criada especialmente para você'
    },
    {
        image: 'img/hero3.jpg',
        title: 'Acabamento Premium',
        description: 'Materiais selecionados e atenção aos detalhes'
    }
];

const heroSlider = document.querySelector('.hero__slider');
const heroDots = document.querySelector('.hero__dots');

// Create slides and dots
if (heroSlider && heroDots) {
    heroSlides.forEach((slide, index) => {
        // Create slide
        if (index > 0) { // First slide already exists in HTML
            const slideEl = document.createElement('div');
            slideEl.className = 'hero__slide';
            slideEl.innerHTML = `
                <div class="container">
                    <div class="hero__content">
                        <h1>${slide.title}</h1>
                        <p>${slide.description}</p>
                        <div class="hero__buttons">
                            <a href="products.html" class="btn">Ver Produtos</a>
                            <a href="contact.html" class="btn btn--outline">Contato</a>
                        </div>
                    </div>
                </div>
                <img src="${slide.image}" alt="Hero background image" class="hero__bg">
            `;
            heroSlider.appendChild(slideEl);
        }

        // Create dot
        const dot = document.createElement('button');
        dot.className = 'hero__dot';
        dot.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        heroDots.appendChild(dot);
    });

    // Hero slider functionality
    const slides = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.hero__dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0 && dots.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopSlideshow() {
            clearInterval(slideInterval);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
                stopSlideshow();
                startSlideshow();
            });
        });

        startSlideshow();
    }
}

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// Testimonials Slider
const testimonials = [
    {
        content: 'Encomendei uma caixa da coleção vintage e fiquei impressionada com a qualidade! Superou todas as minhas expectativas.',
        author: 'Maria Silva',
        location: 'São Paulo, SP',
        image: 'img/client1.jpg'
    },
    {
        content: 'Excelente trabalho! Encomendei um conjunto de caixas organizadoras e ficou tudo perfeito. Com certeza voltarei a comprar.',
        author: 'João Santos',
        location: 'Rio de Janeiro, RJ',
        image: 'img/client2.jpg'
    },
    {
        content: 'Trabalho impecável! A caixa da coleção exclusiva ficou linda e trouxe um charme especial para minha decoração.',
        author: 'Ana Costa',
        location: 'Curitiba, PR',
        image: 'img/client3.jpg'
    }
];

const testimonialsTrack = document.querySelector('.testimonials__track');
const prevBtn = document.querySelector('.arrow-btn--prev');
const nextBtn = document.querySelector('.arrow-btn--next');

let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
        slide.style.opacity = i === index ? '1' : '0';
    });
}

if (testimonialSlides.length > 0) {
    // Инициализация начального состояния
    testimonialSlides.forEach((slide, i) => {
        slide.style.transform = `translateX(${i * 100}%)`;
    });
    showTestimonial(0);

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
            showTestimonial(currentTestimonial);
        });

        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
            showTestimonial(currentTestimonial);
        });
    }
}

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top__btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 