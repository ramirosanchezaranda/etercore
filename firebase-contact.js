// Script para manejar el formulario con FormSubmit.co usando AJAX
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    
    // Elementos UI para mensajes - obtenidos correctamente desde el DOM
    const successMessage = document.querySelector('.w-form-done');
    const errorMessage = document.querySelector('.w-form-fail');
    const formGroup = document.querySelector('.form__group');
    
    // Asegurarnos de que los elementos existen antes de intentar modificarlos
    console.log('Elementos encontrados:', { 
      form: form, 
      successMessage: successMessage, 
      errorMessage: errorMessage, 
      formGroup: formGroup 
    });
    
    // Ocultar mensajes al inicio
    if (successMessage) successMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
    
    // Añadir comportamiento al botón de volver al formulario
    const backButton = document.querySelector('.form__success a.button');
    if (backButton) {
      backButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (successMessage) successMessage.style.display = 'none';
        if (formGroup) formGroup.style.display = 'block';
      });
    }
    
    // Manejar envío del formulario
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Ocultar mensajes previos
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
        
        // Mostrar indicador de carga
        const submitButton = form.querySelector('input[type="submit"]');
        const originalButtonText = submitButton ? submitButton.value : 'Enviar';
        if (submitButton) {
          submitButton.value = 'Enviando...';
          submitButton.disabled = true;
        }
        
        // Preparar datos para enviar con FormSubmit
        const formData = new FormData(form);
        
        // Agregar campos adicionales para FormSubmit
        formData.append('_subject', 'Nuevo contacto desde eterCore');
        formData.append('_captcha', 'false');
        
        console.log('Enviando formulario a FormSubmit...');
        
        // Usar fetch para enviar el formulario con AJAX
        fetch('https://formsubmit.co/ajax/etercoredesignweb@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la respuesta del servidor: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          console.log('Respuesta de FormSubmit:', data);
          
          // Mostrar mensaje de éxito
          form.reset();
          if (formGroup) formGroup.style.display = 'none';
          if (successMessage) {
            successMessage.style.display = 'block';
            console.log('Mensaje de éxito mostrado');
          } else {
            console.error('No se encontró el elemento successMessage');
          }
        })
        .catch(error => {
          console.error('Error al enviar el formulario:', error);
          
          // Mostrar mensaje de error
          if (errorMessage) {
            errorMessage.style.display = 'block';
            console.log('Mensaje de error mostrado');
          } else {
            console.error('No se encontró el elemento errorMessage');
          }
        })
        .finally(() => {
          // Restaurar botón
          if (submitButton) {
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
          }
        });
      });
    }
  });