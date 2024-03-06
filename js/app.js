window.addEventListener('DOMContentLoaded' , () => {
    const tabsItems = document.querySelector('.tabs__items'),
        tabsItem = document.querySelectorAll('.tabs__item'),
        tabsContent = document.querySelectorAll('.tabs__content');

    function hideContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show' , 'fide');
        });
        tabsItem.forEach((item) => {
            item.classList.remove('tabs__item_active')
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show' , 'fide');
        tabsContent[i].classList.remove('hide');
        tabsItem[i].classList.add('tabs__item_active');
    }
    hideContent();
    showTabContent();

    tabsItems.addEventListener('click' , (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabs__item')){
            tabsItem.forEach((item , idx) => {
                if(target == item) {
                    hideContent();
                    showTabContent(idx);
                }
            });
        }
    });
});



// window.addEventListener('DOMContentLoaded' , () => {
//     const tabsItems = document.querySelector('.tabs__items'),
//         tabsItem = document.querySelectorAll('.tabs__item'),
//         tabsContent = document.querySelectorAll('.tabs__content');

//     function hideTabContent() {
//         tabsContent.forEach((item) => {
//             item.style.display = 'none'
//         });

//         tabsItem.forEach((item) => {
//             item.classList.remove('tabs__item_active')
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].style.display = 'flex';
//         tabsItem[i].classList.add('tabs__item_active')
//     }

//     hideTabContent();
//     showTabContent();

//     tabsItems.addEventListener('click' , (event) => {
//         const target = event.target;
//         if(target && target.classList.contains('tabs__item')){
//             tabsItem.forEach((item , idx) => {
//                 if(target == item) {
//                     hideTabContent();
//                     showTabContent(idx);
//                 }
//             });
//         }
//     });
// });