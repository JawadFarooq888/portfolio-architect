const portfolioData = {
    profile: {
        name: "Jawad Farooq",
        roles: ["Android Developer", "Flutter Developer", "Data Engineer", "Database Specialist"],
        tagline: "Building high-performance apps & scalable data systems."
    },
    // Easily add new projects here
    projects: [
        {
            id: 1,
            title: "Daily Planner App",
            category: "Android / Kotlin / Room DB",
            description: "A comprehensive productivity app with task scheduling, priority management, and local data persistence using Room database.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
            tags: ["KOTLIN", "ROOM", "MVVM"]
        },
        {
            id: 2,
            title: "My Diary - Secure Journal",
            category: "Android / Jetpack Compose",
            description: "Private encrypted diary with biometric authentication, rich text editing, and automatic cloud synchronization.",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
            tags: ["COMPOSE", "BIOMETRICS", "FIREBASE"]
        },
        {
            id: 3,
            title: "WiFi Printing Solution",
            category: "Android / Network SDK",
            description: "High-performance utility to discover network printers and print documents or images directly from Android devices.",
            image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800",
            tags: ["NETWORK", "PRINTING", "SDK"]
        },
        {
            id: 4,
            title: "Smart Translator App",
            category: "Android / ML Kit / API",
            description: "Advanced translator featuring real-time OCR, voice recognition, and support for over 100 languages via Google ML Kit.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
            tags: ["ML KIT", "API", "KOTLIN"]
        },
        {
            id: 5,
            title: "Kashmir Travel Guidance",
            category: "Flutter / Maps API",
            description: "A beautiful travel companion app with curated local spots, interactive maps, and cultural guides for Kashmir.",
            image: "https://images.unsplash.com/photo-1621245052981-64d4b1a134a4?auto=format&fit=crop&q=80&w=800",
            tags: ["FLUTTER", "MAPS", "UX"]
        },
        {
            id: 6,
            title: "Funny Voice Changer",
            category: "Android / Audio Engineering",
            description: "Real-time voice modulation app with high-fidelity audio filters and social media sharing capabilities.",
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
            tags: ["AUDIO", "EFFECTS", "KOTLIN"]
        },
        {
            id: 7,
            title: "Enterprise ETL & BI Architect",
            category: "Data Engineering / SQL Server",
            description: "Architecting complex extraction systems using SQL Server Linked Servers and OpenQueries. Processing massive CSV/flat-file datasets into structured warehouses.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["SQL SERVER", "LINKED SERVER", "ETL"]
        }
    ],
    experience: [
        {
            company: "Tech Solutions Inc.",
            role: "Senior Android Developer",
            period: "2022 - Present",
            description: "Leading mobile development for core banking products."
        },
        {
            company: "DataFlow Systems",
            role: "Data Engineer",
            period: "2020 - 2022",
            description: "Designed and maintained scalable ETL pipelines."
        }
    ]
};

// Function to dynamically load projects
function loadProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = ''; // Clear existing

    portfolioData.projects.forEach(project => {
        const card = `
            <div class="group relative overflow-hidden rounded-[2rem] bg-slate-800 border border-slate-700 card-hover transition-all duration-500">
                <img src="${project.image}" alt="${project.title}" loading="lazy" class="w-full h-64 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition duration-700">
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
