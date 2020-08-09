//procurar o botao
document.querySelector("#add-time")

    //quando clicar no botao
    .addEventListener('click', cloneField)

//executar uma ação
function cloneField() {

    //duplicar os campos-duplicar qual campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean - true or false basicooo da vida

    //pegar os campos - q campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function (field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar onde na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
