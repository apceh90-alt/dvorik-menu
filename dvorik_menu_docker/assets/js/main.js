document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".category-btn");
    const sections = document.querySelectorAll(".menu-section");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");

            sections.forEach(sec => sec.classList.remove("active"));
            buttons.forEach(b => b.classList.remove("active"));

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
            btn.classList.add("active");

            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});
