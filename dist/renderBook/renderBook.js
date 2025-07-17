//Vai pegar a variavel de controle
import { decrementIndex, getCurrentIndex, incrementIndex } from "../carouselState/carouselState.js";
//Divs que seram adicionado elementos criados
const showBook = document.querySelector(".show-book");
const description = document.querySelector(".description");
export default function renderBook(book, library) {
    showBook.innerHTML = "";
    description.innerHTML = "";
    //Divs
    const cardBook = document.createElement("div");
    const imgBook = document.createElement("div");
    const titleBook = document.createElement("div");
    //Elementos que seram inseridos
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    //Botões para da efeito carrosel
    const btnBack = document.createElement("button");
    const btnNext = document.createElement("button");
    //Inserir estilos
    cardBook.classList.add("card-book");
    imgBook.classList.add("img-book");
    titleBook.classList.add("title-book");
    btnBack.classList.add("return");
    btnNext.classList.add("next");
    //Inserir conteúdo
    img.src = book.urlImage;
    img.alt = book.title;
    h3.textContent = book.title;
    p.textContent = book.description;
    btnBack.innerHTML = '<i class="fas fa-arrow-left next"></i>';
    btnNext.innerHTML = '<i class="fas fa-arrow-right return"></i>';
    btnBack.addEventListener("click", () => {
        decrementIndex(library.length);
        renderBook(library[getCurrentIndex()], library);
    });
    btnNext.addEventListener("click", () => {
        incrementIndex(library.length);
        renderBook(library[getCurrentIndex()], library);
    });
    //Inserir elementos dentro do HTMl
    imgBook.appendChild(img);
    // Criar a camada de texto que aparecerá no hover
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.textContent = book.description;
    imgBook.appendChild(overlay);
    titleBook.appendChild(h3);
    cardBook.appendChild(imgBook);
    cardBook.appendChild(titleBook);
    showBook.appendChild(btnBack);
    showBook.appendChild(cardBook);
    showBook.appendChild(btnNext);
}
