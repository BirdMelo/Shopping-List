import { checkEmptyList} from "./checkEmpty.js";
import { createItemList } from "./createItemList.js";

const writtenName = document.getElementById('input-text');
const purchaseList = document.getElementById('purchaseList');



export function addPurchese(event){
    event.preventDefault();

        if(writtenName.value.trim() === ''){
            alert("Por favor, insira um item!")
            return;
        }

        const itemList = createItemList(writtenName.value);
        purchaseList.appendChild(itemList);
        checkEmptyList();
        writtenName.value = "";
}