//Classe que molda os valores que serão pegos pela API
import Book from "../Book/Book";
//Vai pegar a variavel de controle
import { decrementIndex, getCurrentIndex, incrementIndex } from "../carouselState/carouselState.js";
//Divs que seram adicionado elementos criados
const showBook = document.querySelector(".show-book") as HTMLDivElement;
const description = document.querySelector(".description") as HTMLDivElement;

export default function renderBook(book: Book, library: Book[]) {
    
    showBook.innerHTML = "";
    description.innerHTML = "";

    //Divs
    const cardBook: HTMLDivElement = document.createElement("div");
    const imgBook: HTMLDivElement = document.createElement("div");
    const titleBook: HTMLDivElement = document.createElement("div");

    //Elementos que seram inseridos
    const img: HTMLImageElement = document.createElement("img");
    const h3: HTMLHeadingElement = document.createElement("h3");
    const p: HTMLParagraphElement = document.createElement("p");

    //Botões para da efeito carrosel
    const btnBack: HTMLButtonElement = document.createElement("button");
    const btnNext: HTMLButtonElement = document.createElement("button");

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
    const overlay: HTMLDivElement = document.createElement("div");
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