interface BookProps {
    urlImage: string;
    title: string;
    description: string;
}

export default class Book implements BookProps {
    

    constructor(
        public urlImage: string,
        public title: string,
        public description: string
    ) 
    {
        
    }
}