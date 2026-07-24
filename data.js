const portfolioData = {
    profile: {
        name: "Jawad Farooq",
        roles: ["Android Developer", "Flutter Developer", "Data Engineer", "Database Specialist"],
        tagline: "Building high-performance apps & scalable data systems."
    },
    projects: [
        {
            id: 1,
            title: "Daily Planner App",
            category: "Android / Kotlin / Room DB",
            description: "A comprehensive productivity app with task scheduling, priority management, and local data persistence using Room database.",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800",
            tags: ["KOTLIN", "ROOM", "MVVM"]
        },
        {
            id: 2,
            title: "My Diary - Secure Journal",
            category: "Android / Jetpack Compose",
            description: "Private encrypted diary with biometric authentication, rich text editing, and automatic cloud synchronization.",
            image: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=800",
            tags: ["COMPOSE", "BIOMETRICS", "FIREBASE"]
        },
        {
            id: 3,
            title: "WiFi Printing Solution",
            category: "Android / Network SDK",
            description: "High-performance utility to discover network printers and print documents or images directly from Android devices.",
            image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=800",
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
            image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
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
            company: "CareCloud",
            role: "Data Engineer",
            period: "June 2025 - Present",
            description: "Architecting high-scale ETL pipelines and data warehousing solutions. Expert in SQL Server, Linked Servers, and complex data extractions."
        },
        {
            company: "Global Market",
            role: "Freelance Software Architect",
            period: "April 2025 - Present",
            description: "Delivering high-quality Android and Flutter solutions for international clients. Focusing on scalability and performance optimization."
        },
        {
            company: "Janbark Technology",
            role: "Android Developer",
            period: "March 2023 - April 2025",
            description: "Developed native Android applications using Kotlin and Jetpack Compose. Managed full app lifecycle from design to Play Store deployment."
        }
    ],
    stats: [
        { label: "Apps Developed", value: "15+", icon: "smartphone" },
        { label: "Data Processed", value: "100M+", icon: "database" },
        { label: "Happy Clients", value: "25+", icon: "users" },
        { label: "Code Commits", value: "1.2k+", icon: "git-commit" }
    ],
    testimonials: [
        {
            name: "Alex Johnson",
            role: "CTO, Global Tech",
            text: "Jawad's ability to bridge mobile development with complex data engineering is rare. He delivered our fintech app with a robust data pipeline ahead of schedule.",
            avatar: "https://i.pravatar.cc/150?u=alex"
        },
        {
            name: "Sarah Miller",
            role: "Product Manager",
            text: "The Kashmir Travel app Jawad built is stunning. The attention to UI detail and the smooth map integration is exactly what we needed.",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Michael Chen",
            role: "Data Solutions Lead",
            text: "Working with Jawad on our SQL Server optimization was a game changer. Our query performance improved by 70% within two weeks.",
            avatar: "https://i.pravatar.cc/150?u=mike"
        }
    ]
};

function loadProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = '';
    portfolioData.projects.forEach(project => {
        const card = `
            <div onclick="openProject(${project.id})" class="group relative overflow-hidden rounded-[2rem] bg-slate-800 border border-slate-700 card-hover transition-all duration-500 min-h-[400px] cursor-pointer">
                <div class="absolute inset-0 bg-slate-700 animate-pulse"></div>
                <img src="${project.image}"
                     alt="${project.title}"
                     loading="lazy"
                     onload="this.previousElementSibling.remove()"
                     onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'"
                     class="w-full h-64 object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition duration-700 relative z-10">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-8 flex flex-col justify-end z-20">
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

function openProject(id) {
    const project = portfolioData.projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <span class="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 block">${project.category}</span>
        <h2 class="text-3xl md:text-4xl font-black text-white mb-6">${project.title}</h2>
        <img src="${project.image}" class="w-full h-64 object-cover rounded-3xl mb-8 border border-slate-700 shadow-xl">
        <p class="text-slate-400 text-lg leading-relaxed mb-8">${project.description}</p>
        <div class="space-y-6">
            <h4 class="text-white font-bold text-lg border-b border-slate-800 pb-2">Technical Overview</h4>
            <div class="flex flex-wrap gap-3">
                ${project.tags.map(tag => `<span class="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-xl text-xs font-mono font-bold border border-slate-700">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="mt-12 flex gap-4">
            <a href="https://wa.me/923354427428" target="_blank" class="bg-cyan-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-cyan-500 transition">Discuss Project</a>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    const overlay = document.getElementById('modal-overlay');

    if (!modal) return;

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

function loadStats() {
    const container = document.getElementById('stats-grid');
    if (!container) return;
    container.innerHTML = '';
    portfolioData.stats.forEach(stat => {
        const item = `
            <div class="text-center p-6 bg-slate-800/20 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                <div class="flex justify-center text-cyan-400 mb-4">
                    <i data-lucide="${stat.icon}" class="w-8 h-8"></i>
                </div>
                <div class="text-4xl font-black text-white mb-2 tracking-tighter">${stat.value}</div>
                <div class="text-slate-500 text-xs font-bold uppercase tracking-widest">${stat.label}</div>
            </div>
        `;
        container.innerHTML += item;
    });
}

function loadTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    container.innerHTML = '';
    portfolioData.testimonials.forEach(testi => {
        const card = `
            <div class="p-8 rounded-[2.5rem] bg-slate-800/30 border border-slate-800 relative group transition-all duration-500 hover:bg-slate-800/50">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${testi.avatar}" alt="${testi.name}" class="w-12 h-12 rounded-full border-2 border-cyan-500/20">
                    <div>
                        <h4 class="text-white font-bold">${testi.name}</h4>
                        <p class="text-slate-500 text-xs">${testi.role}</p>
                    </div>
                </div>
                <p class="text-slate-400 italic text-sm leading-relaxed">"${testi.text}"</p>
                <div class="absolute top-8 right-8 text-slate-700 opacity-20 group-hover:opacity-40 transition-opacity">
                    <i data-lucide="quote" class="w-10 h-10"></i>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

(function() {
    emailjs.init("KHVTM75-xlyXQr_M5");
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
    loadStats();
    loadTestimonials();
    initContactForm();
    initModal();
    lucide.createIcons();
});
