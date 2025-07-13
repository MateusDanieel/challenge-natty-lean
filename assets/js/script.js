'use strict';

if (window.location.pathname != '/details.html') {

    (() => {
        const form = document.getElementById('getLeadModalForm');
        const btsBuyNow = document.querySelectorAll('.sec-offers .sec-offers__offer__btn');

        btsBuyNow.forEach((bt) => {
            bt.addEventListener('click', () => {
                sessionStorage.setItem('qtd', bt.dataset.jsQtd);
                sessionStorage.setItem('price', bt.dataset.jsPrice);
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

            if (!layoutVisible && video.currentTime >= 1214) {

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
} else {
    (() => {
        const getElementsToSetSS = document.querySelectorAll('[data-js-get-session]');
        const ebookName = document.querySelector('[data-js-set-ebook="name"]');
        const ebookImage = document.querySelector('[data-js-set-ebook="img"]');
        
        let qtd = sessionStorage.getItem("qtd");

        if (qtd == 6) {
            ebookName.innerHTML = 'Firm & Fit - Transform Your Appeaance and Texture by Sarah Miller';
            ebookImage.setAttribute('src', 'assets/img/bonus1.webp');
        } else if (qtd == 3) {
            ebookName.innerHTML = 'Cravings Crusher - Meal Plan & Recipes Book';
            ebookImage.setAttribute('src', 'assets/img/bonus2.webp');
        } else if (qtd == 2) {
            ebookName.innerHTML = 'Skin-Firming Blueprint';
            ebookImage.setAttribute('src', 'assets/img/bonus3.webp');
        } else {
            ebookName.innerHTML = '';
        }

        getElementsToSetSS.forEach((el) => {
            if (el.dataset.jsGetSession == "username") {
                el.innerHTML = sessionStorage.getItem("username");
            } else if (el.dataset.jsGetSession == "price") {
                el.innerHTML = sessionStorage.getItem("price");
            } else if (el.dataset.jsGetSession == "qtd") {
                el.innerHTML = sessionStorage.getItem("qtd");
            } else if (el.dataset.jsGetSession == "img") {
                el.setAttribute('src', `assets/img/img-${sessionStorage.getItem("qtd")}-bottles.webp`);
            } else if (el.dataset.jsGetSession == "usermail") {
                el.innerHTML = sessionStorage.getItem("usermail");
            } else {
                el.innerHTML = '';
            }
        });

    })();
}



