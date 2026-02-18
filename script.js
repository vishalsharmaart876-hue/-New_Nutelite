// WhatsApp number
const WHATSAPP_NUMBER = '919911626592';

// Dynamic WhatsApp order buttons
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the price element (sibling of the button)
        const priceElement = this.parentElement.querySelector('.price');
        const productName = priceElement.getAttribute('data-product');
        const price = priceElement.textContent;
        
        // Create WhatsApp message with current price
        const message = `Hi! I would like to order ${productName} (${price}). Please provide more details.`;
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                // Use smooth scrolling
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fallback for better compatibility
                setTimeout(() => {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 10);
            }
        }
    });
});

// Add scroll animation for feature cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.feature-card, .product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
