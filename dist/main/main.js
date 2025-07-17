var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Importação da classe book que ira moldar os dados que iram para o HTML.
import Book from "../Book/Book.js";
//Vai pegar o valor atual do indice para fazer o efeito do carrosel e vai tambem adicionar valor para começar a variavel de estado
import { setCurrentIndex, getCurrentIndex } from "../carouselState/carouselState.js";
//Redenrização dos livros com efeito carrousel
import renderBook from "../renderBook/renderBook.js";
//Importação da função que ira trazer a resposta da API
import searchBook from "../search-book/search-book.js";
//Variavel do botão
const button = document.querySelector('.btn');
//Validação do botão
if (button) {
    //Evento principal (Buscar livros.)
    button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        //Variável do input
        const input = document.querySelector("#search-book");
        //Validação do input
        if (input) {
            //Valida a quantidade de caracteres que o input recebe.
            if (input.value.length <= 3) {
                alert("Não a quantidade de letras suficientes para buscar um livro!");
                return;
            }
            else {
                try {
                    //Array com os valores que foram retornados da API
                    const books = yield searchBook(input.value);
                    //Array para receber apenas os valores necessario da API.
                    let library = [];
                    books.forEach((book) => {
                        var _a, _b, _c, _d;
                        const libraryBook = new Book((_b = (_a = book.volumeInfo.imageLinks) === null || _a === void 0 ? void 0 : _a.thumbnail) !== null && _b !== void 0 ? _b : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_u3kpNcVJhMtk_FFElTxQK6DmgwhAs7L0w&s", (_c = book.volumeInfo.title) !== null && _c !== void 0 ? _c : "Título não esta disponível", (_d = book.volumeInfo.description) !== null && _d !== void 0 ? _d : "Descrição não esta disponível");
                        library.push(libraryBook);
                        input.value = "";
                    });
                    setCurrentIndex(0);
                    renderBook(library[getCurrentIndex()], library);
                }
                catch (error) {
                    console.log("Erro no retorno dos livros", error);
                }
            }
        }
    }));
}
;
