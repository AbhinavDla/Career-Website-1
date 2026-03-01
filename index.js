// =============================================
// Navigation
// =============================================

// Sticky nav - add scrolled class
const nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 80);
    });
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('mobile-menu--open');

        hamburger.classList.toggle('hamburger--active');
        mobileMenu.classList.toggle('mobile-menu--open');
        document.body.classList.toggle('no-scroll');

        hamburger.setAttribute('aria-expanded', !isOpen);
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('hamburger--active');
            mobileMenu.classList.remove('mobile-menu--open');
            document.body.classList.remove('no-scroll');
        });
    });
}

// =============================================
// Scroll Reveal Animation
// =============================================

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});

// =============================================
// Job Listing Accordion (joinus.html)
// =============================================

const jobHeaders = document.querySelectorAll('.job-listing__header');

if (jobHeaders.length > 0) {
    jobHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const listing = header.closest('.job-listing');
            const isExpanded = listing.classList.contains('job-listing--expanded');

            // Close all other listings
            document.querySelectorAll('.job-listing--expanded').forEach((open) => {
                if (open !== listing) {
                    open.classList.remove('job-listing--expanded');
                    const body = open.querySelector('.job-listing__body');
                    body.style.maxHeight = null;
                }
            });

            // Toggle current listing
            listing.classList.toggle('job-listing--expanded');
            const body = listing.querySelector('.job-listing__body');

            if (!isExpanded) {
                body.style.maxHeight = body.scrollHeight + 'px';
            } else {
                body.style.maxHeight = null;
            }
        });
    });
}
