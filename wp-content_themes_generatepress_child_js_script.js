
const element = document.getElementById('heroButton');

// Add the hover (grow)
element.addEventListener('mouseenter', () => {
  element.style.transform = "scale(1.2)";
  element.style.transition = "transform 0.2s"; 
});

// shrink back
element.addEventListener('mouseleave', () => {
  element.style.transform = "scale(1)";
});