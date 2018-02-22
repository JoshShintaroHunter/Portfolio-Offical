

// functions to load content into div on main page.
//also sends a call to setActive with a identifying argument.

function loadHome(){
    document.getElementById("content").innerHTML='<object type="text/html" data="home.html#" style="width:100%; height:850px;"></object>';
	setActive(1);
}

function loadSkills(){
    document.getElementById("content").innerHTML='<object type="text/html" data="skills.html#" style="width:100%; height:850px;"></object>';
	setActive(2);
}


function loadProjects(){
  	document.getElementById("content").innerHTML='<object type="text/html" data="projects.html#" style="width:100%; height:650px;"></object>';
  	setActive(3);
}

function loadAbout(){
    document.getElementById("content").innerHTML='<object type="text/html" data="about.html#" style="width:100%; height:950px;"></object>';
  	setActive(4);
}



//setActive removes all active classes before confirming which id to add the ".active" clas to.
function setActive(num){
	
	var i = num;
	$("#home").removeClass("active");
  	$("#skills").removeClass("active");
  	$("#about").removeClass("active");
  	$("#projects").removeClass("active");
	
	if(i === 1){
  	$("#home").addClass("active");
	}
	if(i === 2){
  	$("#skills").addClass("active");
	}
	if(i === 3){
  	$("#projects").addClass("active");
  	}
	if(i === 4){
  	$("#about").addClass("active");
	}
}

/*Call loadHome() on load to fill content box on first load*/
window.onload = function() {
  loadHome();
};
