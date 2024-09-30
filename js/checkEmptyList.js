const listWarning = document.getElementById('emptyList_warning');

export function checkEmptyList(list){
    if (list.childElementCount === 0){
        listWarning.style.display = 'block';
    }else{
        listWarning.style.display = 'none';
    }
}