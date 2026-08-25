document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    function setMenu(open) {
        if (!menuToggle || !navMenu) return;
        navMenu.classList.toggle('active', open);
        menuToggle.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            setMenu(!navMenu.classList.contains('active'));
        });

        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                setMenu(false);
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') setMenu(false);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.navbar');
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }
    });
});
