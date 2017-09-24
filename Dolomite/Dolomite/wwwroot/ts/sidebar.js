var sidebarHidden = true;
var dTopbar = document.getElementsByClassName("dTopbar")[0];
var dSidebar = document.getElementsByClassName("dSidebar")[0];
var dMainContent = document.getElementsByClassName("dMainContent")[0];
var dSidebarHamburger = document.getElementsByClassName("dSidebarHamburger")[0];
var hamburgerContainingLi = dSidebarHamburger.parentElement.parentElement.parentElement;
window.addEventListener("scroll", function () {
    if (window.scrollY > dTopbar.clientHeight) {
        dSidebar.classList.add("fixed");
    }
    else {
        dSidebar.classList.remove("fixed");
    }
});
hamburgerContainingLi.addEventListener("click", function () {
    if (sidebarHidden) {
        dSidebar.classList.add("dSidebarToggled");
        dMainContent.classList.add("dMainContentToggled");
        dSidebarHamburger.classList.add("open");
        sidebarHidden = false;
    }
    else {
        dSidebar.classList.remove("dSidebarToggled");
        dMainContent.classList.remove("dMainContentToggled");
        dSidebarHamburger.classList.remove("open");
        sidebarHidden = true;
    }
});
