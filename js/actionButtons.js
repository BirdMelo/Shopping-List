import { checkEmptyList } from "./checkEmpty.js";
import { dateTime } from "./dateTime.js";

const deleteItem = (element) => {
    let confirmation = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmation) {
        element.remove();
        checkEmptyList();
    }
}
const editItem = (element) => {
    let newItem = prompt('Digite o novo nome do item:');
    if (newItem !== null && newItem.trim() !== ""){
        const purchaseName = element.querySelector('#itemName');
        purchaseName.textContent = newItem;

        const oldDate = element.querySelector('#dateTime');
        const newDate = dateTime().innerText;
        oldDate.textContent = newDate;

        const ItWasPuchase = element.querySelector('.checkbox-input').checked;

        if(ItWasPuchase){
            element.querySelector('.checkbox-input').checked = true;
            element.querySelector('checkbox-customizado').classList.add('checked');
            purchaseName.style.textDecoration = 'line-through';
        }
        
    }
}
export {deleteItem, editItem};