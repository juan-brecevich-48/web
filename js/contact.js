document.getElementById('mailto-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que recargue la página

    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre) {
        alert('Por favor completa todos los campos.');
        return;
    }
    if (!mensaje) {
        mensaje =  `Hola, mi nombre es ${nombre}.\n\nQuisiera contactarte para hablar sobre una posible proyecto. Cuando tengas un momento, por favor revisa mi mensaje. ¡Gracias!`;
    }
    
    // Tu dirección de correo (cámbiala por la tuya)
    const destinatario = 'juan.brecevich.48@gmail.com';
    const asunto = `Contacto desde mi portfolio - ${nombre}`;

    // Crear el enlace mailto:
    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
});