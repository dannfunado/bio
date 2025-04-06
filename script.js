document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    const mensaje = document.getElementById('mensaje-exito');
    mensaje.textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
    mensaje.style.opacity = '0';
    mensaje.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    mensaje.style.transform = 'translateY(20px)';
  
    setTimeout(() => {
      mensaje.style.opacity = '1';
      mensaje.style.transform = 'translateY(0)';
    }, 100);
  
    this.reset();
  });
  