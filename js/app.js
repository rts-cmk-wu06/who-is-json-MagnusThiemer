const team = {
    "teamMembers": [{
        "fornavn": "Emil",
        "efternavn": "Kristensen",
        "alder": 33,
        "hårfarve": "lys",
        "skostørrelse": 43
    }, {
        "fornavn": "Magnus",
        "efternavn": "Thiemer",
        "alder": 31,
        "hårfarve": "leverpostej",
        "skostørrelse": 42
    }, {
        "fornavn": "Jonas",
        "efternavn": "Abkjær",
        "alder": 27,
        "hårfarve": "kommune",
        "skostørrelse": 44
    }, {
        "fornavn": "Morten",
        "efternavn": "Sønniksen",
        "alder": 34,
        "hårfarve": "rød",
        "skostørrelse": 44
    }]
};

function printPersondata(object){
    const personDataContainer = document.createElement('div');
    let newHeading = document.createElement('h2');
    newHeading.innerHTML = `${object.fornavn} ${object.efternavn}`;

    let newUl = document.createElement('ul');
    newUl.classList.add('persondata__ul')
    
    let newLiAlder = document.createElement('li')
    newLiAlder.innerHTML = `Alder: ${object.alder}`;
    
    let newLiHårfarve = document.createElement('li')
    newLiHårfarve.innerHTML = `Hårfarve: ${object.hårfarve}`;
    
    let newLiSkostørrelse = document.createElement('li')
    newLiSkostørrelse.innerHTML = `Skostørrelse: ${object.skostørrelse}`;
    
    personDataContainer.appendChild(newHeading);
    newUl.appendChild(newLiAlder);
    newUl.appendChild(newLiHårfarve);
    newUl.appendChild(newLiSkostørrelse);
    personDataContainer.appendChild(newUl);
    personDataContainer.classList.add("persondata__container")
    
    gridContainer.appendChild(personDataContainer);
};

function createGridContainer(){
    let gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');
    document.body.appendChild(gridContainer);
}

createGridContainer();

let gridContainer = document.querySelector('.grid');

team.teamMembers.forEach((teamMembers) => console.log(teamMembers.fornavn));
team.teamMembers.forEach((teamMembers) => console.log(`${teamMembers.fornavn} ${teamMembers.efternavn}`));
team.teamMembers.forEach(teamMembers => printPersondata(teamMembers));