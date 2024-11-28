// Set up Three.js scene for background animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('bg-animation').appendChild(renderer.domElement);

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 500;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0x00ff00 });
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    renderer.render(scene, camera);
};
animate();

// Dynamic data loading for features section
const features = [
    { title: "AI Therapist", desc: "Engage in meaningful conversations with our advanced AI chatbot...", img: "aither.webp" },
    { title: "Sleep Music", desc: "Drift into peaceful sleep with our collection of soothing binaural beats...", img: "sleep.jpeg" },
    { title: "Guided Meditation", desc: "Find inner peace with our expertly crafted guided meditation sessions...", img: "guided.jpeg" },
    { title: "Journaling", desc: "Reflect on your thoughts and experiences with our private journaling tool...", img: "journal.jpeg" },
    { title: "Mood Logging", desc: "Track your emotions over time to identify patterns and gain insight...", img: "moodlog.jpeg" }
];

const featureContainer = document.getElementById('feature-container');
features.forEach(feature => {
    const featureCard = `
        <div class="feature-card" data-aos="fade-up">
            <img src="${feature.img}" alt="${feature.title}">
            <div class="feature-card-content">
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            </div>
        </div>`;
    featureContainer.innerHTML += featureCard;
});

// Dynamic data loading for testimonials
const testimonials = [
    { name: "Shreyas Mohan", text: "Tranquil AI changed my life. I can't imagine managing my mental health without it!" },
    { name: "Aryan Gupta", text: "The AI therapist is incredible. It's like having a real conversation..." },
    { name: "Gautam Vats", text: "The mood tracking and journaling features helped me see patterns in my behavior." },
    { name: "Aakansh Thakur", text: "I love the sleep music. It's the perfect way to relax and unwind at night." }
];

const testimonialSlider = document.getElementById('testimonial-slider');
testimonials.forEach(testimonial => {
    const testimonialCard = `
        <div class="testimonial-card" data-aos="fade-up">
            <p>"${testimonial.text}"</p>
            <h4>${testimonial.name}</h4>
        </div>`;
    testimonialSlider.innerHTML += testimonialCard;
});

// Dynamic data loading for founders section
const founders = [
    { name: "Arihant Bharadwaj", role: "CEO", img: "arihant.jpeg" },
    { name: "Shreyas Tiwary", role: "CFO", img: "Shreyas.jpeg" },
    { name: "Ritwik Tripathi", role: "CTO", img: "ritwik.jpeg" },
    { name: "Ashutosh Kala", role: "COO", img: "ashu.jpeg" }
];

const founderContainer = document.getElementById('founder-container');
founders.forEach(founder => {
    const founderCard = `
        <div class="founder-card" data-aos="fade-up">
            <img src="${founder.img}" alt="${founder.name}">
            <h3>${founder.name}</h3>
            <p>${founder.role}</p>
        </div>`;
    founderContainer.innerHTML += founderCard;
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    if (name && email && message) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Mobile navigation toggle
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Intersection Observer for navbar background
const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}, { threshold: 0.1 });

heroObserver.observe(heroSection);

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});