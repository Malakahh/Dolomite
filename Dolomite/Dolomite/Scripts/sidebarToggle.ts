let toggled : boolean = false

$(document).ready(function() {
    console.log("ts works!")

	$(".dSidebarToggler").click(function(e) {
		e.preventDefault();
		if (toggled) {
			$(".dSidebar").addClass("col-md-12");
			$(".dSidebar").removeClass("col-md-10");
            toggled = false
            console.log("toggle off")
		} else {
			$(".dSidebar").addClass("col-md-10");
			$(".dSidebar").removeClass("col-md-12");
            toggled = true
            console.log("toggle on")
		}

	
	})

})