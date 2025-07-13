'use strict';

(() => {
    const form = document.getElementById('getLeadModalForm');
    const btsBuyNow = document.querySelectorAll('.sec-offers .sec-offers__offer__btn');

    btsBuyNow.forEach((bt) => {
        bt.addEventListener('click', () => {
            sessionStorage.setItem('qtd', bt.dataset.jsQtd);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fieldName = document.getElementById('fieldName').value;
        const fieldEmail = document.getElementById('fieldEmail').value;
        const fieldPhone = document.getElementById('fieldPhone').value;
        
        sessionStorage.setItem('username', fieldName);
        sessionStorage.setItem('usermail', fieldEmail);
        sessionStorage.setItem('userphone', fieldPhone);
        
        window.location.href = "details.html";
    });

})();