/* ==========================================================
   Lo del Pela · Lógica del sitio
   Depende de: js/config.js (CONFIG) y js/carta.js (CARTA)
   ========================================================== */
(function () {
  "use strict";

  const waBase = "https://wa.me/" + CONFIG.whatsapp;

  /* ---------- Links de contacto ---------- */
  function initContacto() {
    const saludo = encodeURIComponent("Hola! Quería consultar por " + CONFIG.nombre + ".");
    document.getElementById("wa-float").href = waBase + "?text=" + saludo;
    document.getElementById("wa-text").href = waBase + "?text=" + saludo;
    document.getElementById("maps-link").href =
      "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.direccion);
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ---------- Carta con pestañas ---------- */
  function initCarta() {
    const tabs = document.getElementById("tabs");
    const menu = document.getElementById("menu");

    function mostrarCategoria(cat) {
      tabs.querySelectorAll(".tab").forEach(function (btn) {
        btn.setAttribute("aria-selected", btn.textContent === cat ? "true" : "false");
      });

      menu.innerHTML = "";

      if (cat === "Menú ejecutivo") {
        const nota = document.createElement("p");
        nota.className = "info";
        nota.textContent = "De lunes a viernes al mediodía.";
        menu.appendChild(nota);
      }

      CARTA[cat].forEach(function (plato) {
        const item = document.createElement("div");
        item.className = "dish";

        const titulo = document.createElement("h3");
        titulo.textContent = plato[0];
        item.appendChild(titulo);

        if (plato[1]) {
          const detalle = document.createElement("small");
          detalle.textContent = plato[1];
          item.appendChild(detalle);
        }

        menu.appendChild(item);
      });
    }

    Object.keys(CARTA).forEach(function (cat) {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.textContent = cat;
      btn.addEventListener("click", function () {
        mostrarCategoria(cat);
      });
      tabs.appendChild(btn);
    });

    mostrarCategoria(Object.keys(CARTA)[0]);
  }

  /* ---------- Reservas por WhatsApp ---------- */
  function initReservas() {
    const fecha = document.getElementById("fecha");
    fecha.min = new Date().toISOString().split("T")[0];

    document.getElementById("reserva-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const d = new FormData(e.target);

      const partes = d.get("fecha").split("-");
      const fechaTxt = partes[2] + "/" + partes[1] + "/" + partes[0];

      let mensaje =
        "Hola! Quiero reservar una mesa en " + CONFIG.nombre + ".\n" +
        "Nombre: " + d.get("nombre") + "\n" +
        "Teléfono: " + d.get("tel") + "\n" +
        "Fecha: " + fechaTxt + "\n" +
        "Horario: " + d.get("hora") + "\n" +
        "Personas: " + d.get("personas");

      if (d.get("coment")) {
        mensaje += "\nComentarios: " + d.get("coment");
      }

      window.open(waBase + "?text=" + encodeURIComponent(mensaje), "_blank", "noopener");
    });
  }

  initContacto();
  initCarta();
  initReservas();
})();
