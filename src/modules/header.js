

const mordalItSelf = document.querySelector('.mordal-wrapper');

const displayModal = document.querySelector('#clickToShowMordal');

const removeM = document.querySelector('.removeMordal');


// To display the mordal after form finish
export function callOnModal() {

    displayModal.addEventListener('click', (e) =>  {
        e.preventDefault();
    
        mordalItSelf.style.display = 'block';
    })

};



// To remove the mordal after form finish

export function removeModal() {

    removeM.addEventListener('click',(e) => {
        let a = e.target.parentElement.parentElement.parentElement;
        a.style.display = 'none';
    });

}


