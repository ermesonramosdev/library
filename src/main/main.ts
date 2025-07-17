//Importação da classe book que ira moldar os dados que iram para o HTML.
import Book from "../Book/Book.js";
//Importação da função que ira trazer a resposta da API
import searchBook from "../search-book/search-book.js";

//Variavel do botão
const button = document.querySelector<HTMLButtonElement>('.btn');

//Divs que seram adicionado elementos criados
const showBook = document.querySelector(".show-book") as HTMLDivElement;
const description = document.querySelector(".description") as HTMLDivElement;

//Validação do botão
if(button) {
    //Evento principal (Buscar livros.)
    button.addEventListener("click", async () => {
        //Variável do input
        const input = document.querySelector<HTMLInputElement>("#search-book");
        //Validação do input
        if(input) {
            //Valida a quantidade de caracteres que o input recebe.
            if(input.value.length <= 3) {
                alert("Não a quantidade de letras suficientes para buscar um livro!");
                return;
            } else {
                try {
                    //Array com os valores que foram retornados da API
                    const books = await searchBook(input.value);
                    //Array para receber apenas os valores necessario da API.
                    let library: Book[] = [];
                    books.forEach((book: any) => {
                        const libraryBook = new Book(
                            book.volumeInfo.imageLinks?.thumbnail ?? "http://books.google.com/books/content?id=tdOiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                            book.volumeInfo.title ?? "Título não esta disponível", 
                            book.volumeInfo.description ?? "Descrição não esta disponível"
                        );
                        library.push(libraryBook);
                    });
                    //Pecorre o Array de objetos com apenas os valores que eu quero para serem inseridos no HTML
                    library.map((book) => {
                        //Criar elementos para inserir os valores no HTML

                        //Divs
                        const cardBook: HTMLDivElement = document.createElement("div");
                        const imgBook: HTMLDivElement = document.createElement("div");
                        const titleBook: HTMLDivElement = document.createElement("div");

                        //Elementos que seram inseridos
                        const img: HTMLImageElement = document.createElement("img");
                        const h3: HTMLHeadingElement = document.createElement("h3");
                        const p: HTMLParagraphElement = document.createElement("p");

                        //Inserir estilos
                        cardBook.classList.add("card-book");
                        imgBook.classList.add("img-book");
                        titleBook.classList.add("title-book");

                        //Inserir conteúdo
                        img.src = book.urlImage;
                        img.alt = book.title;
                        h3.textContent = book.title;
                        p.textContent = book.description;

                        //Inserir elementos dentro do HTMl
                        imgBook.appendChild(img);
                        titleBook.appendChild(h3);
                        cardBook.appendChild(imgBook);
                        cardBook.appendChild(titleBook);
                        description.appendChild(p);
                        showBook.appendChild(cardBook);

                    });
                } catch(error) {
                    console.log("Erro no retorno dos livros", error);
                }
            }  
        }
    });
};