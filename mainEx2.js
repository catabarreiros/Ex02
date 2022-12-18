// Catarina Barreiros 


//queria fazer o texto mudar com a posição do rato -quanto mais para a direita, maior o texto- mas não estava a conseguir

document.querySelector("#spoiler-button").addEventListener("click", (e) => {
    const spoilerContent = document.querySelector("#spoiler-content");
    spoilerContent.classList.contains("hidden")
      ? spoilerContent.classList.replace("hidden", "fadein")
      : spoilerContent.classList.replace("fadein", "hidden");
  });
