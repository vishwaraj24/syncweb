document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Global UI Behaviors ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- Vertical Modal Logic ---
    const nextBiteCard = document.getElementById('nextbite-card');
    const verticalModal = document.getElementById('vertical-modal');
    const verticalModalClose = document.getElementById('vertical-modal-close');

    if (nextBiteCard && verticalModal) {
        nextBiteCard.addEventListener('click', () => {
            verticalModal.classList.add('active');
            // reset scroll position when opening
            const scrollingArea = verticalModal.querySelector('div[style*="overflow-y: auto"]');
            if (scrollingArea) scrollingArea.scrollTop = 0;
        });
    }

    if (verticalModalClose && verticalModal) {
        verticalModalClose.addEventListener('click', () => {
            verticalModal.classList.remove('active');
        });
    }

    if (verticalModal) {
        verticalModal.addEventListener('click', (e) => {
            // Close if clicking outside the modal content
            if (e.target === verticalModal) {
                verticalModal.classList.remove('active');
            }
        });
    }

});
