function modal() {

    ////modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    //modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ""
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    });


    //modalCloseBtn.addEventListener('click', closeModal)

    // клик по экрану-закрывает модальное окно
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }

    })

    //закрыть с помощью эскейп event code 
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })


    //modal window open when user is down landing or any time

    const modalTimerId = setTimeout(openModal, 15000);
    //modal window open when scroll
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight + 1 >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll)
        }

    }
    window.addEventListener('scroll', showModalByScroll);

}
export default modal;