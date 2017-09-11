let toggled : boolean = false

$(document).ready(function() {


	$(".dSidebarToggler").click(function(e) {
		e.preventDefault();
		if (!toggled) {
			$(".dSidebar").addClass("col-md-12");
			$(".dSidebar").removeClass("col-md-10");
			toggled = true
		} else {
			$(".dSidebar").addClass("col-md-10");
			$(".dSidebar").removeClass("col-md-12");
			toggled = false
		}

	
	})

})