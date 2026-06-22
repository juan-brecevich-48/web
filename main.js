emailjs.init({
    publicKey: '65VL7490KAhpkzypw'
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) {
        console.error('Form element not found!');
        return;
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        let messageForm = document.getElementById('mensaje').value.trim();
        if (!nombre || !correo) {
            showToast('Por favor, completa tu nombre y correo electrónico.', 'danger');
            return;
        }

        if (!messageForm) {
            messageForm = `Hola, soy ${nombre}.\n\nQuisiera contactarte para hablar sobre una posible proyecto. Cuando tengas un momento, por favor revisa mi mensaje. ¡Gracias!`;
        }

        // Dirección de correo
        const destinatario = 'juan.brecevich.48@gmail.com';
        const asunto = `Contacto desde mi portfolio`;

        const templateParams = {
            name: nombre,
            email: correo,
            message: messageForm
        };

        // Enviar el formulario
        emailjs.send('contact_service', 'contact_template', templateParams)
            .then(() => {
                showToast('Correo enviado correctamente');
                // Resetear el formulario
                this.reset();
            }, (err) => {
                // Error
                console.error('Error al enviar:', err);
                showToast('Hubo un error al enviar el mensaje. Intenta de nuevo.', 'danger');
            });
    })
});

async function copyToClipboard(text, type) {
    await navigator.clipboard.writeText(text);
    let textToShow = '';
    if (type === 'email') {
        textToShow = 'Correo copiado correctamente.';
    } else if (type === 'phone') {
        textToShow = 'Teléfono copiado correctamente.';
    }
    this.showToast(textToShow);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const mensaje = document.getElementById('toastText');
    toast.classList.add(`bg-${type}`);
    mensaje.textContent = message;
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}