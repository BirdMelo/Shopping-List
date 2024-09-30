const listWarning = document.getElementById('emptyList_warning');
const purchasedList = document.getElementById('purchasedList');

export function checkEmptyList(list){
    if (list.childElementCount === 0){
        listWarning.style.display = 'block';
    }else{
        listWarning.style.display = 'none';
    }
}

export function checkEmptyPurchased(){
    if(purchasedList.childElementCount === 0){
        purchasedList.style.display = 'block';
    }else{
        purchasedList.style.display = 'block';
    }
}