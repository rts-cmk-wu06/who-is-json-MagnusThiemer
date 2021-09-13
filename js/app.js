fetch("./js/team.json")
    .then(response => response.json())
    .then(data => {
        data.teamMembers.forEach(teamMembers => printPersondata(teamMembers));
    })


function printPersondata(object){
    const personDataContainer = document.createElement('div');
    personDataContainer.classList.add("persondata__container")
    gridContainer.appendChild(personDataContainer);

    let newHeading = document.createElement('h2');
    newHeading.textContent = `${object.fornavn} ${object.efternavn}`;
    personDataContainer.appendChild(newHeading);

    let newUl = document.createElement('ul');
    newUl.classList.add('persondata__ul')
    personDataContainer.appendChild(newUl);
    
    let newLiAlder = document.createElement('li')
    newLiAlder.textContent = `Alder: ${object.alder}`;
    newUl.appendChild(newLiAlder);
    
    let newLiHårfarve = document.createElement('li')
    newLiHårfarve.textContent = `Hårfarve: ${object.hårfarve}`;
    newUl.appendChild(newLiHårfarve);
    
    let newLiSkostørrelse = document.createElement('li')
    newLiSkostørrelse.textContent = `Skostørrelse: ${object.skostørrelse}`;
    newUl.appendChild(newLiSkostørrelse);
};

function createGridContainer(){
    let gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');
    document.body.appendChild(gridContainer);
}

createGridContainer();

let gridContainer = document.querySelector('.grid');

/* team.teamMembers.forEach(teamMembers => console.log(teamMembers.fornavn));
team.teamMembers.forEach(teamMembers => console.log(`${teamMembers.fornavn} ${teamMembers.efternavn}`));
team.teamMembers.forEach(teamMembers => printPersondata(teamMembers)); */