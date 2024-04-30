const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

const addTask = () => {
    if (inputBox.value === '') {
        alert('Debes escribir algo!...');
    } else {
        let li = document.createElement('li'); //crea un elemento de lista 
        li.innerHTML = inputBox.value.trim(); //agrega el texto del input
        listContainer.appendChild(li); //agrega la tarea al elemento
        let span = document.createElement('span'); // crea un elemento span
        span.innerHTML = '\u00d7'; //agrega el icono de eliminar en el spam
        li.appendChild(span); // agrega el elemento a la lista
    }
    inputBox.value = ''; //limpia la caja de texto
    saveData(); // guarda los datos al localStorage
}

//elimina el spam X, muestra la lista y aplica el subrayado cuando la task esta cheked
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData(); //guarda los cambios en el local storage
    }
}, false);

//guarda los datos de lista en el localStorage
const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML)
}

//muestra las listas en la vista
const showList = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}

showList(); // llama la function de mostrar la lista 