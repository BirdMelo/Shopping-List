const listWarning = document.getElementById('emptyList_warning');

export function checkEmptyList(list){
    if (list.childElementCount === 0){
        listWarning.style.display = 'block';
    }else{
        listWarning.style.display = 'none';
    }
}

export function checkEmptyPurchased(list){
    console.log(list);
    if(list.getElementsByTagName('li').length === 0){
        list.style.display = 'none';
    }else{
        list.style.display = 'block';
    }
}