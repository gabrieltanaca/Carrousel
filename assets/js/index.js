var slidesObject = {};

function loadSlide() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    //Declarando container
    const container_items = slide.querySelector("#container-items");

    //Gerando id do slide
    const id = `slide_${index}`;
    slide.id = id;

    //Quantidade de items no slide
    const items = container_items.querySelectorAll(".item").length;

    //Gerando e definindo o tamanho do container de items
    const width = `${items * 100}%`;
    container_items.style.width = width;

    //Definindo objeto do slide
    slidesObject[id] = {
      slide: slide,
      container: container_items,
      itemActive: 0,
      totalItems: items - 1,
      handleNext() {
        this.itemActive >= this.totalItems
          ? (this.itemActive = 0)
          : this.itemActive++;
        this.container.style.left = `-${this.itemActive * 100}%`;
        return "Proximo";
      },
      handlePrevious() {
        this.itemActive <= 0
          ? (this.itemActive = this.totalItems)
          : this.itemActive--;
        this.container.style.left = `-${this.itemActive * 100}%`;
        return "Anterior";
      },
    };

    ["Next", "Previous"].forEach((clickFunction) => {
      let div = document.createElement("div");
      div.innerHTML = `<button onclick="slidesObject.${id}.handle${clickFunction}()" class="button${clickFunction}">&#10094;</button>`;
      slide.appendChild(div);
    });
  });
}

window.addEventListener("load", loadSlide());
