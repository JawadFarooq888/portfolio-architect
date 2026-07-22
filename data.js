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
            title: "Daily Planner App",
            category: "Android / Kotlin / Room DB",
            description: "A smart productivity tool to organize daily tasks with local database persistence and push notifications.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
            tags: ["KOTLIN", "ROOM", "MVVM"]
        },
        {
            id: 2,
            title: "My Diary - Secure Journal",
            category: "Android / Jetpack Compose",
            description: "Personal encrypted diary app with biometric lock and cloud backup features.",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
            tags: ["COMPOSE", "BIOMETRICS", "FIREBASE"]
        },
        {
            id: 3,
            title: "WiFi Printing Solution",
            category: "Android / Native SDK",
            description: "Innovative app to discover and print documents directly to network printers via WiFi.",
            image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800",
            tags: ["NETWORK", "PRINTING", "SDK"]
        },
        {
            id: 4,
            title: "Smart Translator App",
            category: "Android / ML Kit / API",
            description: "Real-time voice and text translator supporting 50+ languages using Google ML Kit.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            tags: ["ML KIT", "API", "KOTLIN"]
        },
        {
            id: 5,
            title: "Kashmir Travel Guidance",
            category: "Flutter / Maps API",
            description: "Comprehensive travel guide for Kashmir with offline maps, local spots, and hotel booking.",
            image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
            tags: ["FLUTTER", "MAPS", "UX"]
        },
        {
            id: 6,
            title: "Funny Voice Changer",
            category: "Android / Audio Engineering",
            description: "Real-time audio processing app to apply funny effects and filters to voice recordings.",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
            tags: ["AUDIO", "EFFECTS", "KOTLIN"]
        },
        {
            id: 7,
            title: "Precision BI & Data Warehouse",
            category: "Data Engineering / ETL",
            description: "Architecting a high-precision Business Intelligence system using automated ETL pipelines and data warehousing for enterprise analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["ETL", "WAREHOUSE", "BI"]
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
