export default async function searchBook(titleBook: string) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleBook}`);
        const data = await response.json();
        console.log(data.items[0].volumeInfo);
    } catch(error) {
        console.log("Os livros não estão sendo encontrados porque esta dando erro aqui: ",error);
    }
    
} 