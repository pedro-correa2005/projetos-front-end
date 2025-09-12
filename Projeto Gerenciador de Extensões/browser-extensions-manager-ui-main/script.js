function loadContent(){
    const mainContainer = document.getElementById("mainContainer");
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
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
                settingsDiv.appendChild(btnRemove);

                const inputChk = document.createElement('input');
                inputChk.type = 'checkbox'
                inputChk.checked = item.isActive;
                lblChk.appendChild(inputChk);

                const spanChk = document.createElement('span');
                spanChk.classList.add('slider');
                spanChk.classList.add('round');
                lblChk.appendChild(spanChk);

                settingsDiv.appendChild(lblChk)
                
                mainContainer.appendChild(cardDiv);
            })
        })
        .catch(error => console.error('Error fetching or parsing JSON: ', error))
}

document.addEventListener('DOMContentLoaded', loadContent());