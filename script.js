document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('whatsapp-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Capturar valores
            const service = document.getElementById('service').value;
            const neighborhood = document.getElementById('neighborhood').value;
            const details = document.getElementById('details').value;
            const obs = document.getElementById('obs').value;

            // Validar (o HTML já tem required, mas garantia extra)
            if (!service || !neighborhood) {
                alert('Por favor, preencha o serviço e o bairro.');
                return;
            }

            // Construir mensagem
            let message = `Olá! Gostaria de um orçamento para:\n`;
            message += `*Serviço:* ${service}\n`;
            message += `*Bairro:* ${neighborhood}\n`;
            
            if (details) {
                message += `*Modelo/BTUs:* ${details}\n`;
            }
            
            if (obs) {
                message += `*Obs:* ${obs}`;
            }

            // Encoder para URL
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '5562993666203'; // Número do usuário

            // Redirecionar
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Scroll suave para links internos (opcional, moderno CSS já faz scroll-behavior: smooth, mas bom garantir)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
