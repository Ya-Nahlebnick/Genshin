document.addEventListener('DOMContentLoaded', function () {
    const characters = [
        {
            name: "Мавуика",
            image: "assets/images/mavuika.webp",
            role: "DPS",
            tier: "S+",
            rare: "5",
            bgColor: "#d08b50", // Цвет фона
            link: "mavuika.html" // Ссылка на страницу персонажа
        },
        {
            name: "Арлекино",
            image: "assets/images/Arlecchino.webp",
            role: "DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "arlekin.html" // Ссылка на страницу персонажа
        },
        {
            name: "Нёвиллет",
            image: "assets/images/neuvillette.webp",
            role: "DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "neuvillette.html" // Ссылка на страницу персонажа
        },
        {
            name: "Мавуика",
            image: "assets/images/mavuika.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "mavuika.html" // Ссылка на страницу персонажа
        },
        {
            name: "Фурина",
            image: "assets/images/furina.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "furina.html" // Ссылка на страницу персонажа
        },
        {
            name: "Нахида",
            image: "assets/images/nahida.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "nahida.html" // Ссылка на страницу персонажа
        },
        {
            name: "Е Лань",
            image: "assets/images/yelan.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "yelan.html" // Ссылка на страницу персонажа
        },
        {
            name: "Райдэн",
            image: "assets/images/shougun.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#d08b50", // Цвет фона
            link: "raiden.html" // Ссылка на страницу персонажа
        },
        {
            name: "Сян Лин",
            image: "assets/images/xiangling.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#9272bd", // Цвет фона
            link: "xiangling.html" // Ссылка на страницу персонажа
        },
        {
            name: "Син Цю",
            image: "assets/images/xingqiu.webp",
            role: "Sub-DPS",
            tier: "S+",
            bgColor: "#9272bd", // Цвет фона
            link: "xingqiu.html" // Ссылка на страницу персонажа
        },
        {
            name: "Арлекино",
            image: "assets/images/kaeya.webp",
            role: "Sub-DPS",
            tier: "A",
            bgColor: "#D8BFD8", // Цвет фона
            link: "kaeya.html" // Ссылка на страницу персонажа
        },
        {
            name: "Венти",
            image: "assets/images/venti.webp",
            role: "Support",
            tier: "S",
            bgColor: "#FFDAB9", // Цвет фона
            link: "venti.html" // Ссылка на страницу персонажа
        }
    ];

    const tiers = {
        "S+": {
            "DPS": document.getElementById('s-plus-dps'),
            "Sub-DPS": document.getElementById('s-plus-sub-dps'),
            "Support": document.getElementById('s-plus-support')
        },
        "S": {
            "DPS": document.getElementById('s-dps'),
            "Sub-DPS": document.getElementById('s-sub-dps'),
            "Support": document.getElementById('s-support')
        },
        "A": {
            "DPS": document.getElementById('a-dps'),
            "Sub-DPS": document.getElementById('a-sub-dps'),
            "Support": document.getElementById('a-support')
        },
        "B": {
            "DPS": document.getElementById('b-dps'),
            "Sub-DPS": document.getElementById('b-sub-dps'),
            "Support": document.getElementById('b-support')
        },
        "C": {
            "DPS": document.getElementById('c-dps'),
            "Sub-DPS": document.getElementById('c-sub-dps'),
            "Support": document.getElementById('c-support')
        }
    };

    characters.forEach(character => {
        const characterCard = document.createElement('a'); // Используем элемент <a> для создания ссылки
        characterCard.classList.add('character-card');
        characterCard.style.backgroundColor = character.bgColor; // Задаем цвет фона
        characterCard.href = character.link; // Устанавливаем ссылку

        const characterImage = document.createElement('img');
        characterImage.src = character.image;
        characterImage.alt = character.name;

        const characterName = document.createElement('h2');
        characterName.textContent = character.name;

        characterCard.appendChild(characterImage);
        characterCard.appendChild(characterName);

        tiers[character.tier][character.role].appendChild(characterCard);
    });
});

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
  
  