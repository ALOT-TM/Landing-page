
function handleCTAClick(source) {
    const event = {
        source: source,
        timestamp: new Date()
    };
    
    console.log('CTA clicked:', event);
    alert(`Por añadir :c Fuente: ${source}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.card, .feature-card, .target-card, .about-card, .info-card, .split-image');
    cards.forEach(card => observer.observe(card));
    
    console.log('Fluxus Landing Page cargada correctamente');
});

window.handleCTAClick = handleCTAClick;