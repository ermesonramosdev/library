import searchBook from "../search-book/search-book.js";
//Variavel do botão
const button = document.querySelector('.btn');
//Validação do botão
if (button) {
    //Evento principal (Buscar livros.)
    button.addEventListener("click", () => {
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
                searchBook(input.value);
                console.log("Input enviado para a função buscar livros");
            }
        }
    });
}
;
