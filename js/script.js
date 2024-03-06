window.addEventListener('DOMContentLoaded' , () => {
    const tabParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabsContent.forEach((item) => {
            // item.style.display = 'none'
            item.classList.add('hide');
            item.classList.remove('show' , 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show' , 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }


    tabParent.addEventListener('click' , (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item , idx) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(idx);
                }
            });
        }
    });

    
    hideTabContent();
    showTabContent();
});




