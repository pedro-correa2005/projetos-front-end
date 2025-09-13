let dataArray = [];

function remove(){
    const card = document.getElementById(event.target.id.replace("btnRemove", '') + "Card");
    card.remove();
}

function filter(){
    const mainContainer = document.getElementById("mainContainer");
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild)
    }
    if(event.target.id === "allFilter"){
        loadContentAll();
    }else if(event.target.id === "activeFilter"){
        loadContentActive();
    }else{
        loadContentInactive();
    }
}

function chkToggle(){
    const extensionName = event.target.id.replace("chk", "");
    const index = dataArray.findIndex(item => item.name === extensionName);

    dataArray[index].isActive = event.target.checked;
}

function loadItem(item){
    const mainContainer = document.getElementById("mainContainer");

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = item.name + 'Card';
    
    const imageElement = document.createElement('img')
    imageElement.src = item.logo;
    cardDiv.appendChild(imageElement);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('cardContent');
    cardDiv.appendChild(contentDiv);
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = item.name;
    contentDiv.appendChild(titleElement);

    const descriptionParagraph = document.createElement('p')
    descriptionParagraph.textContent = item.description;
    contentDiv.appendChild(descriptionParagraph)

    const settingsDiv = document.createElement('div');
    settingsDiv.classList.add("settingsDiv");
    cardDiv.appendChild(settingsDiv);

    const lblChk = document.createElement('label');
    lblChk.classList.add('switch')

    const btnRemove = document.createElement('button')
    btnRemove.textContent = "Remove"
    btnRemove.classList.add("btnRemove");
    btnRemove.id = "btnRemove" + item.name;
    btnRemove.style.cursor = "pointer";
    btnRemove.addEventListener('click', remove);
    settingsDiv.appendChild(btnRemove);

    const inputChk = document.createElement('input');
    inputChk.type = 'checkbox'
    inputChk.checked = item.isActive;
    inputChk.id = "chk" + item.name;
    inputChk.addEventListener('click', chkToggle);
    lblChk.appendChild(inputChk);

    const spanChk = document.createElement('span');
    spanChk.classList.add('slider');
    spanChk.classList.add('round');
    lblChk.appendChild(spanChk);

    settingsDiv.appendChild(lblChk)
    
    mainContainer.appendChild(cardDiv);
}

async function loadContent() {
    await loadJsonData();
    loadContentAll();
}

function loadContentAll(){
    dataArray.forEach(item => {
        loadItem(item);
    })
}

function loadContentActive(){
    dataArray.forEach(item => {
        if(item.isActive){
            loadItem(item);
        }
    })
}

function loadContentInactive(){
    dataArray.forEach(item => {
        if(!item.isActive){
            loadItem(item);
        }
    })
}

async function loadJsonData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        dataArray = await response.json();
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}


document.addEventListener('DOMContentLoaded', loadContent());
