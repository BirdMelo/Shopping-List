const writtenName = document.getElementById('input-text');
const saveButton = document.getElementById('saveButton');
const purchaseList = document.getElementById('purchaseList')
let contador = 0;

saveButton.addEventListener('click', addPurchese);

function addPurchese(event){
    event.preventDefault()
    console.log('funcionando')

    const itemList = document.createElement('li');
        const purchase = document.createElement('div');
        purchase.classList.add('purchase');

            const containerName = document.createElement('div');
                const checkboxContainer = document.createElement('div');
                checkboxContainer.classList.add('checkbox-container')
                    const label = document.createElement('label');
                    label.setAttribute("for", checkboxInput.id);
                        const checkboxInput = document.createElement('input');
                        checkboxInput.type = 'checkbox';
                        checkboxInput.classList.add('checkbox-input');
                        checkboxInput.id = 'checkbox-' + counter++;
                        label.appendChild(checkboxInput);

                        const checkboxCustomizado = document.createElement(div)
                        checkboxCustomizado.classList.add('checkbox-customizado')
                        label.appendChild(checkboxCustomizado);
                    checkboxContainer.appendChild(label)
                containerName.appendChild(checkboxContainer);

                const purchaseName = document.createElement('p');
                purchaseName.innerText = writtenName.value;
                containerName.appendChild(purchaseName);
            purchase.appendChild(containerName);

            const containerButtons = document.createElement('div');
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('action-button');
                    const imgDelete = document.createElement('img');
                    imgDelete.src = "./img/delete.svg";
                    imgDelete.alt = "deletar";
                    deleteButton.appendChild(imgDelete);
                containerButtons.appendChild(deleteButton);

                const editButton = document.createElement('button');
                editButton.classList.add('action-button');
                    const imgEdit = document.createElement('img');
                    imgEdit.src = "./img/edit.svg";
                    imgEdit.alt = "editar";
                    editButton.appendChild(imgEdit);
                containerButtons.appendChild(editButton);
            purchase.appendChild(containerButtons);

        itemList.appendChild(purchase);
    purchaseList.appendChild(itemList);
}