const navTabs = document.querySelectorAll('.nav-tabs li')
let lastTab = navTabs[0];

//add event listeners to tabs
navTabs.forEach((tab) => {
    tab.addEventListener("click", onNavTabClicked)
})

function onNavTabClicked(event){
    //remove active class from last tab
    lastTab.classList.remove('active')
    lastTab = event.target.parentElement

    //remove active from last contentPage
    document.querySelector('.content-page.active').classList.remove('active')

    //add active class to current tab
    event.target.parentElement.className = "active"

    //get class name of content section to show
    let className = event.target.parentElement.attributes['data-controls'].nodeValue

    //find page content section to show based on the class name we just found
    let contentPage = document.querySelector(`.content-page.${className}`)
    
    //add active class to page content
    contentPage.classList.add('active')    
}