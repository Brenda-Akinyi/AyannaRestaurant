document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
            const navLinks = document.getElementById("navLinks");

                hamburger.addEventListener("click", () => {
                        const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
                                hamburger.setAttribute("aria-expanded", !expanded);

                                        navLinks.classList.toggle("open");
                                            });
                                            });
})