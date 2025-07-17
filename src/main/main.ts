//Importação da classe book que ira moldar os dados que iram para o HTML.
import Book from "../Book/Book.js";
//Vai pegar o valor atual do indice para fazer o efeito do carrosel e vai tambem adicionar valor para começar a variavel de estado
import { setCurrentIndex, getCurrentIndex } from "../carouselState/carouselState.js";
//Redenrização dos livros com efeito carrousel
import renderBook from "../renderBook/renderBook.js";
//Importação da função que ira trazer a resposta da API
import searchBook from "../search-book/search-book.js";

//Variavel do botão
const button = document.querySelector<HTMLButtonElement>('.btn');


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
                            book.volumeInfo.imageLinks?.thumbnail ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_u3kpNcVJhMtk_FFElTxQK6DmgwhAs7L0w&s",
                            book.volumeInfo.title ?? "Título não esta disponível", 
                            book.volumeInfo.description ?? "Descrição não esta disponível"
                        );
                        library.push(libraryBook);
                        input.value = "";
                    });
                   setCurrentIndex(0);
                   renderBook(library[getCurrentIndex()], library);
                } catch(error) {
                    console.log("Erro no retorno dos livros", error);
                }
            }  
        }
    });
};