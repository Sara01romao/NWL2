//Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField) //Quando clicar no botao



//Executar uma acao
function cloneField(){
    //Duplicar os campos. Que campos?
   const newfieldsContainer= document.querySelector('.schedule-item').cloneNode(true)


    //Pegar os campos. Que campos?
    const fields = newfieldsContainer.querySelectorAll('input')
    
    //Para cada campo, limpa 
    fields.forEach(function(field){
        //pegar o field do momento e limpa
       field.value= ""
    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newfieldsContainer)

}