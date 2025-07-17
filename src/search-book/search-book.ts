//Função assicróna
export default async function searchBook(titleBook: string) {
    try {
        //Resposta da API
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleBook}`);
        //Dados tranformados em JSON
        const data = await response.json();
        //Retorno nas informações que eu quero.
        return data.items;
    } catch(error) {
        //Tratamento de erro se caso a requisição não der certo.
        console.log("Os livros não estão sendo encontrados porque esta dando erro aqui: ",error);
        //Retorno com arrray vazio.s
        return [];
    }
    
} 