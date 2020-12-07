/*window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    //create function that hides content
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');

        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }
    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log(event);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);

                }
            })
        }
    })


})*/
window.addEventListener('DOMContentLoaded',()=> {
const tabsParent= document.querySelector('.tabheader__items'),
tabs = document.querySelectorAll('.tabheader__item'),

tabsContent=document.querySelectorAll('.tabcontent');
function contentHide(){
    tabsContent.forEach( item=>{
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(tab=>{ 
            tab.classList.remove('tabheader__item_active');
        });
}
function contentShow (i=0){
    
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add
    

}
contentHide();
contentShow();
tabsParent.addEventListener('click',(e)=>{

const target = e.target;
if (target && target.classList.contains('tabheader__item')){
    tabs.forEach((item, i)=>{
        if(item==target){contentHide();
            contentShow(i);
        }
    })
}

})
}
)