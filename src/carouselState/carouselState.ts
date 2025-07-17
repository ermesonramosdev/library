//Variavel de controle
let currentIndex = 0;
//Função para pegar o valor da variavel atual
export function getCurrentIndex(): number {
    return currentIndex;
}
//Vai colocar o atual para a variavel de controle
export function setCurrentIndex(index: number): void {
    currentIndex = index;
}
//Vai adicionar valor a variavel de controle
export function incrementIndex(length: number): void {
    currentIndex = (currentIndex + 1) % length;
}
//Vai tirar valor a variavel de controle
export function decrementIndex(length: number): void {
    currentIndex = (currentIndex - 1 + length) % length;
}