var sidebarHidden = true;
var dSidebar = document.getElementsByClassName("dSidebar")[0];
var dMainContent = document.getElementsByClassName("dMainContent")[0];
var dSidebarHamburger = document.getElementsByClassName("dSidebarHamburger")[0];
dSidebarHamburger.addEventListener("click", function () {
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
//# sourceMappingURL=sidebar.js.map