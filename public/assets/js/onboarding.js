
if(process.browser){
    document.addEventListener("DOMContentLoaded", function () {
        // Define los pasos del recorrido
        const pasos = [
            { elemento: "acerca", mensaje: "Bienvenido a la página 'Acerca de Nosotros'. Aquí puedes obtener información sobre nuestra organización." },
            { elemento: "contacto", mensaje: "Visita la página 'Contáctanos' para obtener detalles de contacto y enviarnos un mensaje." },
            { elemento: "oferta", mensaje: "Explora nuestra 'Oferta Educativa' para conocer nuestros programas de estudio." },
            { elemento: "plan", mensaje: "Consulta el 'Plan de Estudio' para obtener información detallada sobre nuestros cursos y currículo." }
        ];
    
        // Función para mostrar un paso del recorrido
        function mostrarPaso(paso) {
            const elemento = document.querySelector(`[href="#${paso.elemento}"]`);
            const recorrido = document.getElementById("recorrido");
    
            // Posiciona el recorrido junto al enlace
            const rect = elemento.getBoundingClientRect();
            recorrido.style.left = rect.left + "px";
            recorrido.style.top = rect.bottom + "px";
    
            // Muestra el mensaje del paso
            recorrido.innerHTML = paso.mensaje;
            recorrido.style.display = "block";
        }
    
        // Función para ocultar el recorrido
        function ocultarPaso() {
            const recorrido = document.getElementById("recorrido");
            recorrido.style.display = "none";
        }
    
        // Iniciar el recorrido con el primer paso
        let indicePaso = 0;
        mostrarPaso(pasos[indicePaso]);
    
        // Manejar clic en cualquier parte de la página para avanzar al siguiente paso
        document.addEventListener("click", function () {
            indicePaso++;
            if (indicePaso < pasos.length) {
                mostrarPaso(pasos[indicePaso]);
            } else {
                // Cuando se completan todos los pasos, oculta el recorrido
                ocultarPaso();
            }
        });
    });
}
