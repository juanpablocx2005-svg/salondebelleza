// =====================================================
// LUMIÉ BEAUTY STUDIO
// JAVASCRIPT
// =====================================================


// =====================================================
// HEADER AL HACER SCROLL
// =====================================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =====================================================
// MENÚ MÓVIL
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// Cerrar menú cuando se selecciona una opción

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// =====================================================
// AÑO AUTOMÁTICO
// =====================================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// =====================================================
// FECHA MÍNIMA PARA RESERVA
// =====================================================

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const yearToday = today.getFullYear();

    const monthToday =
        String(today.getMonth() + 1).padStart(2, "0");

    const dayToday =
        String(today.getDate()).padStart(2, "0");

    const todayFormatted =
        `${yearToday}-${monthToday}-${dayToday}`;

    dateInput.min = todayFormatted;

}


// =====================================================
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


// =====================================================
// FORMULARIO DE RESERVA
// =====================================================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // DATOS

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    // VALIDACIÓN

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


    // FORMATO DE FECHA

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


    // NÚMERO DE WHATSAPP
    // CAMBIA ESTE NÚMERO POR EL DEL NEGOCIO

    const whatsappNumber =
        "573000000000";


    // MENSAJE

    const message =
        `Hola Lumié Beauty Studio 👋

Mi nombre es ${name}.

Quisiera solicitar una cita:

💅 Servicio: ${service}
📅 Fecha: ${formattedDate}
⏰ Hora: ${time}
📱 Mi WhatsApp: ${phone}

Quedo pendiente de la confirmación. ¡Gracias! ✨`;


    // URL WHATSAPP

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    // ABRIR WHATSAPP

    window.open(
        whatsappURL,
        "_blank"
    );

});


// =====================================================
// ANIMACIÓN AL APARECER
// =====================================================

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".service-card, .price-card, .testimonial, .gallery-item"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


// =====================================================
// ESTILOS PARA ELEMENTOS VISIBLES
// =====================================================

const animationStyle =
    document.createElement("style");

animationStyle.textContent = `

    .service-card.visible,
    .price-card.visible,
    .testimonial.visible,
    .gallery-item.visible {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;

document.head.appendChild(animationStyle);