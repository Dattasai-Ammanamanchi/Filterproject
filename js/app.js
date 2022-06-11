(function(){
const buttons=document.querySelectorAll('.btn');
const storeitems=document.querySelector('.store-item');

buttons.forEach((button)=> {
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const filter=e.target.dataset.filter

        storeitems.forEach((item)=>{
            if (filter === 'all')
            {
                item.style.display = 'block'
            }
            else {
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }else {
                    item.style.display = 'none'
                }
            }


        })
    })

})

})();

(function(){
const searchBox = document.querySelector('#search-item')
const storeitems = document.querySelectorAll('.store-item')

searchBox.addEventListener('keyup', (e) => {

    const searchfilter = e.target.value.toLowerCase().trim()

    storeItems.forEach((item)=>{
        if(item.textContent.includes(searchFilter)){
            item.style.display ='block'
        }else{
            item.style.display='none'
        }
    })
})

})();