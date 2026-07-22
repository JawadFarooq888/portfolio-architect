const portfolioData = {
    profile: {
        name: "Jawad Farooq",
        roles: ["Android Developer", "Flutter Developer", "Data Engineer", "Database Specialist"],
        tagline: "Building high-performance apps & scalable data systems."
    },
    // Aap yahan naye projects easily add kar sakte hain
    projects: [
        {
            id: 1,
            title: "SafeGuard Banking (Android)",
            category: "Android / Kotlin / Jetpack Compose",
            description: "High-security banking app featuring biometrics and real-time fraud detection.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            tags: ["KOTLIN", "COMPOSE", "MVVM"]
        },
        {
            id: 2,
            title: "Multi-Source Data Pipeline",
            category: "ETL / Python / Apache Airflow",
            description: "Built a robust ETL system extracting 5M+ records daily from 12+ sources.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["PYTHON", "ETL", "AIRFLOW"]
        },
        {
            id: 3,
            title: "FleetX Delivery Solution",
            category: "Flutter / Firebase",
            description: "Cross-platform logistics app for real-time driver tracking and route optimization.",
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
            tags: ["FLUTTER", "FIREBASE", "MAPS"]
        }
    ]
};

// Projects ko dynamically load karne ka function
function loadProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = ''; // Clear existing

    portfolioData.projects.forEach(project => {
        const card = `
            <div class="group relative overflow-hidden rounded-[2rem] bg-slate-800 border border-slate-700 card-hover transition-all duration-500">
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                    <span class="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-2">${project.category}</span>
                    <h3 class="text-2xl font-bold text-white mb-2">${project.title}</h3>
                    <p class="text-slate-400 text-sm line-clamp-2 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `<span class="text-[8px] border border-slate-700 px-2 py-0.5 rounded-full text-slate-500 font-bold">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// --- EMAIL & CONTACT FORM LOGIC ---
(function() {
    emailjs.init("KHVTM75-xlyXQr_M5"); // Jawad's Public Key
})();

function initContactForm() {
    const form = document.getElementById('portfolio-contact');
    const feedback = document.getElementById('form-feedback');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalBtnText = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> SENDING...';
        lucide.createIcons();

        const templateParams = {
            name: form.querySelector('input[type="text"]').value,
            email: form.querySelector('input[type="email"]').value,
            message: form.querySelector('textarea').value
        };

        // 1. Send Email via EmailJS
        emailjs.send('service_4dokw7z', 'template_a1redj8', templateParams)
            .then(() => {
                feedback.innerHTML = "Message Sent Successfully! ✅";
                feedback.classList.remove('hidden', 'text-red-400');
                feedback.classList.add('text-emerald-400');
                form.reset();
                btn.innerHTML = originalBtnText;
                lucide.createIcons();
            }, (error) => {
                console.log('FAILED...', error);
                feedback.innerHTML = "Error sending message. Please try again.";
                feedback.classList.remove('hidden', 'text-emerald-400');
                feedback.classList.add('text-red-400');
                btn.innerHTML = originalBtnText;
                lucide.createIcons();
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initContactForm();
});
