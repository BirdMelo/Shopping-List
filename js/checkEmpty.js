const listWarning = document.getElementById('emptyList_warning');
const purchaseList = document.getElementById('purchaseList');
const purchasedList = document.getElementById('purchasedList');

export function checkEmptyList(){
    if (purchaseList.querySelectorAll('li').length === 0 && purchasedList.querySelectorAll('li').length === 0){
        listWarning.style.display = 'block';
    }else{
        listWarning.style.display = 'none';
    }

    if(purchasedList.querySelectorAll('li').length === 0){
        purchasedList.style.display = 'none';
    }else{
        purchasedList.style.display = 'block';
    }
}