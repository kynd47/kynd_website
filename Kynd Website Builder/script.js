// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");


    if (navLinks.classList.contains("active")) {

        menuButton.textContent = "✕";

    } else {

        menuButton.textContent = "☰";

    }

});



// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.textContent = "☰";

    });

});



// =========================
// GALLERY FILTER
// =========================

const filterButtons =
    document.querySelectorAll(".filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        galleryItems.forEach(function (item) {


            if (filter === "all") {

                item.style.display = "block";

            }


            else if (item.classList.contains(filter)) {

                item.style.display = "block";

            }


            else {

                item.style.display = "none";

            }

        });

    });

});



// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();