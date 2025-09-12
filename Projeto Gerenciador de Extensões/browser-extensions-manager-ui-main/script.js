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

                const titleElement = document.createElement('h2');
                titleElement.textContent = item.name;
                cardDiv.appendChild(titleElement);

                const descriptionParagraph = document.createElement('p')
                descriptionParagraph.textContent = item.description;
                cardDiv.appendChild(descriptionParagraph)

                const lblChk = document.createElement('label');
                lblChk.classList.add('switch')

                const inputChk = document.createElement('input');
                inputChk.type = 'checkbox'
                lblChk.appendChild(inputChk);

                const spanChk = document.createElement('span');
                spanChk.classList.add('slider');
                spanChk.classList.add('round');
                lblChk.appendChild(spanChk);

                cardDiv.appendChild(lblChk)
                
                mainContainer.appendChild(cardDiv);
            })
        })
        .catch(error => console.error('Error fetching or parsing JSON: ', error))
}

document.addEventListener('DOMContentLoaded', loadContent());