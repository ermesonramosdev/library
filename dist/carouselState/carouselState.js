//Variavel de controle
let currentIndex = 0;
//Função para pegar o valor da variavel atual
export function getCurrentIndex() {
    return currentIndex;
}
//Vai colocar o atual para a variavel de controle
export function setCurrentIndex(index) {
    currentIndex = index;
}
//Vai adicionar valor a variavel de controle
export function incrementIndex(length) {
    currentIndex = (currentIndex + 1) % length;
}
//Vai tirar valor a variavel de controle
export function decrementIndex(length) {
    currentIndex = (currentIndex - 1 + length) % length;
}
