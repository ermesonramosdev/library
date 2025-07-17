var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Função assicróna
export default function searchBook(titleBook) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Resposta da API
            const response = yield fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleBook}`);
            //Dados tranformados em JSON
            const data = yield response.json();
            //Retorno nas informações que eu quero.
            return data.items;
        }
        catch (error) {
            //Tratamento de erro se caso a requisição não der certo.
            console.log("Os livros não estão sendo encontrados porque esta dando erro aqui: ", error);
            //Retorno com arrray vazio.s
            return [];
        }
    });
}
