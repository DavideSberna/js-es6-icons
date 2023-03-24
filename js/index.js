/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2


Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3


Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];




const containerCard = document.querySelector("#container-card")
const containerSelect = document.querySelector("#select-category")


function drowType(selectValue){
    let filterType = "";
    if(selectValue === "all"){
        return inizializzazione()
    } else {
        filterType = icons.filter((value)=>{
            if(value.type === selectValue){
                return true
            } else{
                return false
            }
        })
    }
    let cont = "";
    filterType.forEach((value)=>{
        let type = drow(value)
        cont += type
    })
    containerCard.innerHTML = cont;
}

function drow(value){
    const createCar = `<div class="col-2 card d-flex justify-content-center align-content-center">
                            <ul class="pt-2 pb-2 ps-0 m-0 text-center">
                                <li class="list-group-item"><a href="#"><i class = "${value.prefix}${value.family} ${value.prefix}${value.name}" style="color: ${value.color};"></i></a></li>
                                <li class="list-group-item">${value.name}</li>
                            </ul>
                        </div>`

    return createCar
    

}


function createCard(card){
    const createCard = `<div class="col-2 card d-flex justify-content-center align-content-center">
                            <ul class="pt-2 pb-2 ps-0 m-0 text-center">
                                <li class="list-group-item"><a href="#"><i class = "${card.prefix}${card.family} ${card.prefix}${card.name}" style="color: ${card.color};"></i></a></li>
                                <li class="list-group-item">${card.name}</li>
                            </ul>
                        </div>`

    return createCard

}




function inizializzazione(){
    let content = "";
    icons.forEach((value)=>{
        let card = createCard(value)
        content += card;  
    })
    containerCard.innerHTML = content;
}
inizializzazione()

containerSelect.addEventListener("change", selectType);
function selectType(){ 
  drowType(this.value)
}



// function createSelect(value){
//     const createSelect =`<select name="select-category" id="select-category">
//                             <option value="All">${value.name}</option>
//                             <option value="Animal">${value.name}</option>
//                             <option value="Vegetables">Vegetables</option>
//                             <option value="User">User</option>
//                         </select>`
//     let contentSelect 
//     return createSelect
// }




// if(this.value === "Animal"){
        
//     console.log("animali")
// } else if(this.value === "Vegetables"){
//     console.log("Vegetables")
// } else{
//     console.log("users")
// }