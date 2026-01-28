/**
 * Main Script para Charlie Harper Sucks
 * Inicialización de componentes Bootstrap y lógica personalizada
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar Tooltips de Bootstrap (Buenas prácticas)
  // Bootstrap 5 requiere inicialización explícita para tooltips y popovers
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
  );

  console.log("Sistema cargado: Estilo Retro v1.0 activo.");

  // 2. (Opcional) Efecto simple al hacer click en los botones para debug
  const buttons = document.querySelectorAll(".btn-retro");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Prevenimos navegación real si son enlaces vacíos '#'
      if (btn.getAttribute("href") === "#") {
        e.preventDefault();
        console.log(`Click detectado en: ${btn.innerText}`);
      }
    });
  });
});
