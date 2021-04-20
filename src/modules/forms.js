function forms() {

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        fuilure: 'Что-то пошло не так'
    }

    // server
    forms.forEach(item => {
        bindPostData(item);
    });
    /* function postData(form){
form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const statusMessage = document.createElement('img');
    statusMessage.src=message.loading;
    statusMessage.style.cssText=`display:block; margin:0 auto;`;
    //form.append(statusMessage);
    form.insertAdjacentElement('afterend',statusMessage);

    const request = new XMLHttpRequest();

    request.open('POST', 'server.php');

request.setRequestHeader('Content-type', 'application/json');

    const formData =new FormData(form);
const object={};

formData.forEach(function(val, key){
    object[key]=val;
});

const json = JSON.stringify(object);

    request.send(json);


    request.addEventListener('load',()=>{
        if(request.status===200){
            console.log(request.response);
            showThanksModal(message.success);
            form.reset();//clear form
           // setTimeout(()=>{
                statusMessage.remove();
            //},2000);
        }else{
     showThanksModal(message.fuilure);
        }
    });
});

    };*/
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })
        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `display:block; margin:0 auto;`;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.fuilure);
                }).finally(() => {
                    statusMessage.remove();
                })
        });

    };

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `<div class="modal__content">
        <div class="modal__close">X</div>
        <div class="modal__title">${message}</div>
        </div>`;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000)

    }
}
export default forms;