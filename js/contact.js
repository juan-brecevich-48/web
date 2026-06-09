document.getElementById('mailto-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que recargue la página

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor completa todos los campos.');
        return;
    }

    // Construir el cuerpo del correo (puedes personalizarlo)
    const cuerpo = `Nombre: ${nombre}%0A` +
                   `Correo del remitente: ${email}%0A%0A` +
                   `Mensaje:%0A${mensaje}`;

    // Tu dirección de correo (cámbiala por la tuya)
    const destinatario = 'juan.brecevich.48@gmail.com';
    const asunto = `Contacto desde mi portfolio - ${nombre}`;

    // Crear el enlace mailto:
    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${cuerpo}`;
});