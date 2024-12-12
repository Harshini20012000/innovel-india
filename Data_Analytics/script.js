document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
      step.addEventListener('mouseover', () => {
        step.style.transform = "scale(1.1)";
        step.style.transition = "all 0.3s ease";
      });
      step.addEventListener('mouseout', () => {
        step.style.transform = "scale(1)";
      });
    });
  });
  