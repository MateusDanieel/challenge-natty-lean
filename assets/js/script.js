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

(() => {
    const video = document.querySelector('.sec-video__video');
    const unmuteBt = document.getElementById('unmuteBtn');

    let layoutVisible = false;

    unmuteBt.addEventListener('click', () => {
        video.muted = false;
        unmuteBt.style.display = 'none';
    });

    video.addEventListener('timeupdate', () => {
        const hiddenSections = document.querySelectorAll('section[hidden]');
        const refsSection = document.querySelector('.sec-refs');

        if (!layoutVisible && video.currentTime >= 12) {
            
            hiddenSections.forEach((sec) => {
                sec.removeAttribute('hidden');
            });

            refsSection.setAttribute('hidden', '');

            layoutVisible = true;

            startCounter();
        }

    });

    function startCounter() {
        let remainingTime = 20 * 60;
        const counter = document.querySelectorAll('.sec-counter__timer');

        setInterval(() => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            counter.forEach((el) => {
                el.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            });

            if (remainingTime > 0) {
                remainingTime--;
            };
        }, 1000);
    }

    
})();