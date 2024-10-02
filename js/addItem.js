import { checkEmptyList, checkEmptyPurchased} from "./checkEmpty.js";
import { createItemList } from "./createItemList.js";

const writtenName = document.getElementById('input-text');
const purchaseList = document.getElementById('purchaseList');
const purchasedList = document.getElementById('purchasedList');



export function addPurchese(event){
    event.preventDefault();
        const itemList = createItemList(writtenName.value);
        purchaseList.appendChild(itemList);
        checkEmptyList(purchaseList);
}