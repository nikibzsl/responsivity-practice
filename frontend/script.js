 const headerComponent = function(title){
    return `
        <header>${title}</header>
          `
 }

 const sectionComponent = function(id, buttonText, h2Text){

    return `
        <section id = "${id}">
            <h2>${buttonText} 
            <span>Hewwo</span>
            </h2>
            <button>${h2Text}</button>
        </section>
    `
 }

 const footerComponent = function () {
    return `
        <footer></footer>
    `
 }

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity Practice"));

    let sections = ""

    for (let index = 0; index < 5; index++) {  
        sections += sectionComponent(`$id-${index}` , `Button${index}` , `Subtitle${index}`) //sectioncomponent meghívása, +=-vel hozzáadódik a stringhez. a legvégén befejeződik a for ciklus, akkor értelmezi a következő sort
    }

    
    rootElement.insertAdjacentHTML("beforeend", sections);

    rootElement.insertAdjacentHTML("afterend", footerComponent())
}

/* FOR CIKLUS HASZNÁLATA

    forloop: ha nincs adatunk
    forof: ha van adatunk


    tehát ez egy sima html kód.
    id-ban nincsen space, kisbetű és kötőjelek
    a html text-ben viszont ez mindegy, hogy van-e space, ékezet, stb

    pay attention and figure your own code out you dumb fuck seriously stop with the undefined bullshit and BE USEFUL OR DIE

*/

window.addEventListener("load", loadEvent);