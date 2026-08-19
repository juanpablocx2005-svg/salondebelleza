// =====================================================
// LUMIÉ BEAUTY STUDIO
// =====================================================


// HEADER
// =====================================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// MENÚ MÓVIL
// =====================================================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});



// AÑO
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// FECHA MÍNIMA
// =====================================================

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1)
        .padStart(2, "0");

    const day =
        String(today.getDate())
        .padStart(2, "0");

    dateInput.min =
        `${year}-${month}-${day}`;

}



// BOTONES DE PRECIOS
// =====================================================

const priceButtons =
    document.querySelectorAll(".price-btn");

const serviceSelect =
    document.getElementById("service");


priceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const service =
            button.dataset.service;

        serviceSelect.value = service;

        document
            .getElementById("reserva")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});



// RESERVA
// =====================================================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value
        .trim();


    const phone =
        document.getElementById("phone")
        .value
        .trim();


    const service =
        document.getElementById("service")
        .value;


    const date =
        document.getElementById("date")
        .value;


    const time =
        document.getElementById("time")
        .value;


    if (
        !name ||
        !phone ||
        !service ||
        !date ||
        !time
    ) {

        alert(
            "Por favor completa todos los campos."
        );

        return;

    }


    const dateObject =
        new Date(`${date}T00:00:00`);


    const formattedDate =
        dateObject.toLocaleDateString(
            "es-CO",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    // ==========================================
    // CAMBIAR POR EL WHATSAPP REAL DEL NEGOCIO
    // ==========================================

    const whatsappNumber =
        "573000000000";


    const message =

`Hola Lumié Beauty Studio ✨

Mi nombre es ${name}.

Quisiera solicitar una cita:

💅 Servicio: ${service}
📅 Fecha: ${formattedDate}
⏰ Hora: ${time}
📱 Mi WhatsApp: ${phone}

Quedo pendiente de la confirmación. ¡Muchas gracias! 💕`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});



// ANIMACIONES
// =====================================================

const animatedElements =
    document.querySelectorAll(
        ".service-card, .gallery-item, .price-card, .testimonial"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});



// ESTILOS DE ANIMACIÓN
// =====================================================

const animationCSS =
    document.createElement("style");


animationCSS.innerHTML = `

.hidden {

    opacity: 0;

    transform: translateY(35px);

    transition:
        opacity .8s ease,
        transform .8s ease;

}

.show {

    opacity: 1;

    transform: translateY(0);

}

`;


document.head.appendChild(animationCSS);