interface BookProps {
    urlImage: string;
    title: string;
    description: string;
}

export default class Book {
    urlImage: string;
    title: string;
    description: string;

    constructor({ urlImage, title, description }: BookProps) 
    {
        this.urlImage = urlImage;
        this.title = title;
        this.description = description;
    }
}