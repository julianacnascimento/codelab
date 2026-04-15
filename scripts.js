const data = [
  {
    id: 1,
    title: "O que é linguagem de programação? Conheça as principais",
    content:
      "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
    date: "2024-08-17",
  },
  {
    id: 2,
    title: "GitHub agora permite fazer login sem precisar de senha",
    content:
      "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
    date: "2024-07-12",
  },
  {
    id: 3,
    title: "Por que os hiperlinks são azuis em sua maioria?",
    content:
      "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
    date: "2024-06-21",
  },
];

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const year = date.getFullYear();

  const month = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
  })
    .format(date)
    .replace(".", "");

  return `${day} de ${month}, ${year}`;
}

const container = document.getElementById("cards");

function renderCards(list) {
  container.innerHTML = list.map(
    (item) => `
    <div class="card">
      <header class="card-header">
        <span>${formatDate(item.date)}</span>

        <svg id="icon" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M19.6656 98.2928L19.666 98.2931L97.3142 175.941L99.7891 178.416L102.264 175.941L179.912 98.2931C188.54 89.6655 193.297 78.1784 193.297 65.9795C193.297 53.7806 188.54 42.2936 179.912 33.666L179.912 33.6656C171.285 25.0409 159.8 20.2813 147.599 20.2813C135.399 20.2813 123.913 25.0408 115.285 33.6656L115.285 33.6661L99.7889 49.164L84.2909 33.666C75.6657 25.0408 64.1788 20.2813 51.9795 20.2813C39.7802 20.2813 28.2935 25.0408 19.6663 33.6656C11.0382 42.2914 6.28125 53.7809 6.28125 65.9795C6.28125 78.1789 11.0408 89.6656 19.6656 98.2928Z" />
        </svg>
      </header>

      <h1>${item.title}</h1>
      <p>${item.content}</p>
    </div>
  `,
  );

  const icons = document.querySelectorAll("#icon");

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("filled");
    });
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      cards.forEach((ca) => ca.classList.remove("active"));
      card.classList.toggle("active");
    });
  });
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();

  const filtered = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(val) ||
      item.content.toLocaleLowerCase().includes(val)
    );
  });
  renderCards(filtered);
});

// renderiza os cards
container.innerHTML = data
  .map(
    (item) => `
  <div class="card">
    <header class="card-header">
      <span>${formatDate(item.date)}</span>

      <svg id="icon" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <path d="M19.6656 98.2928L19.666 98.2931L97.3142 175.941L99.7891 178.416L102.264 175.941L179.912 98.2931C188.54 89.6655 193.297 78.1784 193.297 65.9795C193.297 53.7806 188.54 42.2936 179.912 33.666L179.912 33.6656C171.285 25.0409 159.8 20.2813 147.599 20.2813C135.399 20.2813 123.913 25.0408 115.285 33.6656L115.285 33.6661L99.7889 49.164L84.2909 33.666C75.6657 25.0408 64.1788 20.2813 51.9795 20.2813C39.7802 20.2813 28.2935 25.0408 19.6663 33.6656C11.0382 42.2914 6.28125 53.7809 6.28125 65.9795C6.28125 78.1789 11.0408 89.6656 19.6656 98.2928Z" />
      </svg>
    </header>

    <h1>${item.title}</h1>
    <p>${item.content}</p>
  </div>
`,
  )
  .join("");

// adiciona clique nos ícones (mantendo id como você já tem)
const icons = document.querySelectorAll("#icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("filled");
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    cards.forEach((ca) => ca.classList.remove("active"));
    card.classList.toggle("active");
  });
});

const main = document.querySelector("main");

main.addEventListener("click", () => {
  cards.forEach((ca) => ca.classList.remove("active"));
});
