const portfolioData = {
    profile: {
        name: "Developer Architect",
        roles: ["Android Developer", "Flutter Developer", "Data Engineer", "Database Specialist"],
        tagline: "Building high-performance apps & scalable data systems."
    },
    skills: [
        { name: "Kotlin", category: "Mobile", icon: "smartphone" },
        { name: "Flutter", category: "Mobile", icon: "layout" },
        { name: "Python", category: "Data", icon: "code" },
        { name: "PostgreSQL", category: "Database", icon: "database" },
        { name: "Airflow", category: "ETL", icon: "layers" }
    ],
    projects: [
        {
            title: "SafeGuard Banking (Android)",
            category: "Android / Kotlin / Jetpack Compose",
            description: "High-security banking app featuring biometrics, real-time fraud detection alerts, and MVVM architecture with Flow & Coroutines.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Multi-Source Data Pipeline",
            category: "ETL / Python / Apache Airflow",
            description: "Built a robust ETL system extracting 5M+ records daily from 12+ sources (JSON, SQL, CSV), transforming via Spark, and loading into Redshift.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "FleetX Delivery Solution",
            category: "Flutter / Firebase",
            description: "Cross-platform logistics app for real-time driver tracking, route optimization, and delivery proof using Google Maps API.",
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "E-Commerce DB Architect",
            category: "Database Design / PostgreSQL",
            description: "Optimized a legacy database for 500k active users, reducing query latency by 60% through advanced indexing and sharding strategies.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
    ]
};

function loadProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    portfolioData.projects.forEach(project => {
        const card = `
            <div class="group relative overflow-hidden rounded-[2rem] bg-slate-800 border border-slate-700 card-hover transition-all duration-500">
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                    <span class="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-2">${project.category}</span>
                    <h3 class="text-2xl font-bold text-white mb-2">${project.title}</h3>
                    <p class="text-slate-400 text-sm line-clamp-2">${project.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Contact Form Simulation (Database Logic)
function initContactForm() {
    const form = document.getElementById('portfolio-contact');
    const feedback = document.getElementById('form-feedback');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulating an ETL or DB Write process
        const formData = {
            id: Date.now(),
            name: form.querySelector('input[type="text"]').value,
            email: form.querySelector('input[type="email"]').value,
            message: form.querySelector('textarea').value,
            timestamp: new Date().toISOString()
        };

        // Save to "Local Database"
        let messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        messages.push(formData);
        localStorage.setItem('portfolio_messages', JSON.stringify(messages));

        console.log("Data Written to Local Storage:", formData);

        feedback.classList.remove('hidden');
        form.reset();

        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 3000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initContactForm();
});
