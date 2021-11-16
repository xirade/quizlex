export const modalClass = function (){
// потом заменить на нажатый вариант ответа:
const buttonModal = document.createElement('button');
buttonModal.id = 'idBtn';
buttonModal.innerHTML = 'Ответ на вопрос';
//-----
const divModalWindow = document.createElement('div'),
divModalContent = document.createElement('div'),
spanModalClose = document.createElement('sapn'),
buttonOne = document.createElement('button'),
buttonTwo = document.createElement('button'),
pModal = document.createElement('p');
divModalWindow.className = 'modal';
divModalWindow.id = 'modalId';
divModalWindow.style.display = 'none';
divModalContent.className = 'modal-content';
spanModalClose.className = 'close';
spanModalClose.innerHTML = 'X';
pModal.innerHTML = 'Вы уверены в Вашем выборе?';
buttonOne.innerHTML = 'Да';
buttonTwo.innerHTML = 'Heт';
buttonOne.className = 'button-one';
buttonTwo.className = 'button-two';
divModalContent.append(spanModalClose, pModal, buttonOne, buttonTwo);
divModalWindow.append(divModalContent);
document.body.append(divModalWindow)
// потом нужно поменять
document.body.append(buttonModal)
//
buttonModal.onclick = () => {
    divModalWindow.style.display = 'block';
    spanModalClose.onclick = () => divModalWindow.style.display = "none"; 
    buttonTwo.onclick = () => divModalWindow.style.display = "none";
    buttonOne.onclick = () => {
        divModalWindow.style.display = "none";
        alert('Правильный ответ');  
        
    }
  }
}




// console.log (span)
// 
