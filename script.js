const inputValor = document.querySelector(".input-task")
const adicionarBtn = document.querySelector("#enviar-tarefa")
const listaTarefas = document.querySelector(".list-task")

//adiciona evento de click no botao
adicionarBtn.addEventListener("click", handleAdicionarTarefa)

//funcao que sera executada no clique do botao
function handleAdicionarTarefa(){
    //guarda o valor do input
    const valor = inputValor.value

    //verifica se o input esta vazio
    if(valor === ""){
        alert("Adicione uma tarefa")
        return
    }


    const newTask = document.createElement("li")
    newTask.classList.add("task")

    const check = document.createElement("img")
    check.setAttribute("src","assets/checked.png")
    check.addEventListener("click", handleCheckTarefa)

    const texto = document.createElement("p")
    texto.textContent = valor

    const deletar = document.createElement("img")
    deletar.setAttribute("src","assets/trash.png")
    deletar.addEventListener("click", handleDeletarTarefa)

    newTask.append(check, texto, deletar)

    listaTarefas.append(newTask)

    inputValor.value = ""
} 

//funcao q marca a task como done
function handleCheckTarefa(event){
    event.target.parentElement.classList.toggle("done")
}

//funcao q deleta a tarefa
function handleDeletarTarefa(event){
   event.target.parentElement.remove()

}