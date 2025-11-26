// ============ Smooth Scroll =============
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// ============ Navigation Toggle (Mobile) ============
document.getElementById("navToggle").onclick = () => {
    document.getElementById("navLinks").classList.toggle("open");
};

// ============ Dynamic Projects Hub (Editable) ============
const projects = [
    {
        title: "Cyclistic Bike-Share Analysis",
        short: "Behavioral segmentation analysis of bike-share riders.",
        img: "assets/project-cyclistic.png",
        pdf: "",
        github: "https://github.com/",
        demo: "https://haouzdatahub.github.io/Cyclistic_bik_presentation_analysis_case_study.html",
        tags: ["R", "Excel", "EDA", "Visualization"],
        details: "Full EDA on Cyclistic bike-share dataset with dashboards and insights for membership strategy."
    },
    {
        title: "MINT Classics Warehouse Dashboard",
        short: "Inventory performance dashboard with SQL and Excel.",
        img: "assets/project-mint.png",
        pdf: "",
        github: "https://github.com/",
        demo: "https://haouzdatahub.github.io",
        tags: ["Excel", "SQL", "Dashboards"],
        details: "Cleaned and analyzed warehouse data, built KPI dashboard for inventory turnover and product insights."
    }
];

// Render Projects
const projectsGrid = document.getElementById("projectsGrid");
projects.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.onclick = () => openModal(i);

    card.innerHTML = `
      <img class="project-thumb" src="${p.img}" alt="">
      <h4 class="project-title">${p.title}</h4>
      <p class="project-desc">${p.short}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project-actions">
        <a href="${p.github}" class="action primary" target="_blank">GitHub</a>
        <a href="${p.demo}" class="action secondary" target="_blank">Open</a>
      </div>
    `;
    projectsGrid.appendChild(card);
});

// Modal
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
modalClose.onclick = () => modal.classList.remove("open");

function openModal(i) {
    const p = projects[i];
    document.getElementById("modalBody").innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.details}</p>
      ${p.pdf ? `<a class="action primary" href="${p.pdf}" target="_blank">Open PDF</a>` : ""}
    `;
    modal.classList.add("open");
}

// ============ Certificates Gallery ============
const certificates = [
    {
        title: "Google Data Analytics Certificate",
        img: "assets/cert-google.png",
        link: "#"
    },
    {
        title: "Construction Contracting Certificate",
        img: "assets/cert-construction.png",
        link: "#"
    }
];

const certsGrid = document.getElementById("certsGrid");
certificates.forEach(c => {
    const div = document.createElement("div");
    div.className = "cert-card";
    div.innerHTML = `
      <img class="cert-thumb" src="${c.img}" alt="">
      <p class="cert-title">${c.title}</p>
      <a class="action secondary" href="${c.link}" target="_blank">View</a>
    `;
    certsGrid.appendChild(div);
});

// ============ Simple Contact Form ============
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
});
// JS placeholder; full content omitted
