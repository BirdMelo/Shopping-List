import { deleteItem, editItem } from "./actionButtons.js";
import {checkEmptyList} from "./checkEmpty.js";
import { dateTime } from "./dateTime.js";

const purchasedList = document.getElementById('purchasedList')
const purchaseList = document.getElementById('purchaseList')
let counter = 0;

export function createItemList(item){
    const itemList = document.createElement('li');
        const purchase = document.createElement('div');
        purchase.classList.add('purchase');

            const containerName = document.createElement('div');
                const checkboxContainer = document.createElement('div');
                checkboxContainer.classList.add('checkbox-container');

                    const checkboxInput = document.createElement('input');
                    checkboxInput.type = 'checkbox';
                    checkboxInput.classList.add('checkbox-input');
                    checkboxInput.id = 'checkbox-' + counter++;

                    const label = document.createElement('label');
                    label.setAttribute('for', checkboxInput.id);

                    label.addEventListener('click', function(event){
                        const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
                        const customizedCheckbox = event.currentTarget.querySelector('.checkbox-customizado');
                        const itemName = event.currentTarget.closest('li').querySelector('#itemName');

                        if (checkboxInput.checked){
                            customizedCheckbox.classList.add('checked');
                            itemName.style.textDecoration = 'line-through'
                            purchasedList.appendChild(itemList);
                            checkEmptyList();

                        } else{
                            customizedCheckbox.classList.remove('checked');
                            itemName.style.textDecoration = 'none';
                            purchaseList.appendChild(itemList);
                            checkEmptyList();
                        }
                    })

                    const customizedCheckbox = document.createElement('div');
                    customizedCheckbox.classList.add('checkbox-customizado');

                    label.appendChild(checkboxInput);
                    label.appendChild(customizedCheckbox);
                    checkboxContainer.appendChild(label);

                containerName.appendChild(checkboxContainer);

                const purchaseName = document.createElement('p');
                purchaseName.id = 'itemName';
                purchaseName.innerText = item;
                containerName.appendChild(purchaseName);
            purchase.appendChild(containerName);

            const containerButtons = document.createElement('div');
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('action-button');
                    const imgDelete = document.createElement('img');
                        imgDelete.src = "./img/delete.svg";
                        imgDelete.alt = "deletar";
                    deleteButton.appendChild(imgDelete);
                    deleteButton.addEventListener('click', function () { deleteItem(itemList); });
                containerButtons.appendChild(deleteButton);

                const editButton = document.createElement('button');
                editButton.classList.add('action-button');
                    const imgEdit = document.createElement('img');
                        imgEdit.src = "./img/edit.svg";
                        imgEdit.alt = "editar";
                    editButton.appendChild(imgEdit);
                    editButton.addEventListener('click', function() { editItem(itemList); })
                containerButtons.appendChild(editButton);
            purchase.appendChild(containerButtons);

        itemList.appendChild(purchase);
        itemList.appendChild(dateTime());
        return itemList;
}