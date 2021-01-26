const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')
const listaElement = document.querySelector('ul')
const limparElement = document.querySelector('.limpar')

var tarefas = []

function mostrarTarefas () {
    
    listaElement.innerHTML = ""
    for(tarefa of tarefas) {
        const li = document.createElement('li')
        const link = document.createElement('a')
        const posicaoItem = tarefas.indexOf(tarefa)
        const span = document.createElement('span')

        span.innerHTML = tarefa
        span.setAttribute('class','mdl-list__item-primary-content')
        
        listaElement.setAttribute('class', 'demo-list-item mdl-list')

        li.setAttribute('class','mdl-list__item')

        listaElement.appendChild(li)

        li.appendChild(span)
        li.appendChild(link)

        link.setAttribute('class', 'material-icons')
        link.innerText = 'delete'
        link.setAttribute('href', '#')
        link.setAttribute('onclick', `removeTarefas(${posicaoItem})`)
    }
}

function addTarefas () {
    tarefas.push(inputElement.value)
    inputElement.value = ""
    mostrarTarefas()
    inputElement.focus()
}

function removeTarefas (posicaoItem) {
    tarefas.splice(posicaoItem,1 )
    mostrarTarefas()
}

function limparLista() {
    tarefas = []
    mostrarTarefas()

}

buttonElement.setAttribute('onclick','addTarefas()')
limparElement.setAttribute('onclick','limparLista()')
