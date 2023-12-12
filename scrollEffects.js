
ScrollReveal({
    reset: true,
    distance:'60px',
    duration:'2000',
    delay:'400'
});

ScrollReveal().reveal('.home-content, .contact-item, .icons', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.side-container, .row1, .row4, .footer-content', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.home-image',{ delay: 100});
ScrollReveal().reveal('.aboubt-section-title, .skill-section-title, .mywork-section-title, .contact-section-title, .row2',{ delay: 100, origin:'top'});
ScrollReveal().reveal('.about-row',{ delay: 100, origin:'bottom'});
ScrollReveal().reveal('.about-image, .part1, .progress-bar, .mid-content',{ delay: 100, origin:'left'});
ScrollReveal().reveal('.about-content, .part2',{ delay: 100, origin:'right'});
ScrollReveal().reveal('.mid-container, .carousel, .row3',{ delay: 100, origin:'bottom'});

