# Lo del Pela · Sitio web

Página web del restaurante **Lo del Pela**: carta, galería de platos, reservas por WhatsApp y contacto.
Sitio estático (HTML + CSS + JS), sin dependencias ni paso de build.

## Estructura

```
lo-del-pela/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Estilos (colores y tipografías en :root)
├── js/
│   ├── config.js       # WhatsApp, dirección y nombre
│   ├── carta.js        # Platos de la carta por categoría
│   └── main.js         # Pestañas de la carta, reservas y links de contacto
├── assets/
│   └── img/            # Logo (logo.webp) y fotos de platos (plato-01..06.jpg)
└── README.md
```

## Cómo verlo

Abrí `index.html` en el navegador. No necesita servidor.

## Qué editar

| Quiero cambiar...            | Archivo                                   |
| ---------------------------- | ----------------------------------------- |
| Número de WhatsApp, dirección | `js/config.js`                            |
| Platos de la carta           | `js/carta.js`                             |
| Horarios y textos            | `index.html`                              |
| Colores y tipografías        | `css/styles.css` (variables en `:root`)   |
| Logo y fotos                 | `assets/img/` (mantené los nombres o actualizá el `index.html`) |

## Reservas

El formulario arma un mensaje con los datos y abre WhatsApp hacia el número configurado.
No usa backend: la reserva queda confirmada cuando el restaurante responde por WhatsApp.

## Publicarlo

Se puede subir tal cual a GitHub Pages, Netlify, Vercel o cualquier hosting estático.

---
© Gianni Mozzi · [GitHub](https://github.com/GianMozzi)
