let sidebarHidden = true;
const dTopbar = document.getElementsByClassName("dTopbar")[0];
const dSidebar = document.getElementsByClassName("dSidebar")[0];
const dMainContent = document.getElementsByClassName("dMainContent")[0];
const dSidebarHamburger = document.getElementsByClassName("dSidebarHamburger")[0];
const hamburgerContainingLi = dSidebarHamburger.parentElement.parentElement.parentElement;


window.addEventListener("scroll", function () {
    if (window.scrollY > dTopbar.clientHeight) {
        dSidebar.classList.add("fixed");
    } else {
        dSidebar.classList.remove("fixed");
    }
});

hamburgerContainingLi.addEventListener("click", function () {
    if (sidebarHidden) {
        dSidebar.classList.add("dSidebarToggled");
        dMainContent.classList.add("dMainContentToggled");
        dSidebarHamburger.classList.add("open");

        sidebarHidden = false;
    } else {
        dSidebar.classList.remove("dSidebarToggled");
        dMainContent.classList.remove("dMainContentToggled");
        dSidebarHamburger.classList.remove("open");
        
        sidebarHidden = true;
    }
});

