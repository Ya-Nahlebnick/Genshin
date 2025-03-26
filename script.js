

document.addEventListener("DOMContentLoaded", function() {
    const initialSection = document.querySelector(".initial");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initialSection.classList.add("visible"); // Добавляем класс visible к секции
          observer.unobserve(initialSection); // Прекращаем наблюдение
        }
      });
    }, {
      threshold: 0.2 // Порог видимости
    });
  
    observer.observe(initialSection);
  });
  
  
