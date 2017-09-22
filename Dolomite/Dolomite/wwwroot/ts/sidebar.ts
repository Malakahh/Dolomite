let sidebarHidden = true;
const dSidebar = document.getElementsByClassName("dSidebar")[0];
const dMainContent = document.getElementsByClassName("dMainContent")[0];

document.getElementsByClassName("dSidebarToggler")[0].addEventListener("click", function () {
    if (sidebarHidden) {
        dSidebar.classList.add("dSidebarToggled");
        dMainContent.classList.add("dMainContentToggled");

        sidebarHidden = false;
    } else {
        dSidebar.classList.remove("dSidebarToggled");
        dMainContent.classList.remove("dMainContentToggled");

        sidebarHidden = true;
    }
});
