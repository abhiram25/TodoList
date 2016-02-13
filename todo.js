var addTask = document.querySelector("#date #AddTask");


var todos = [];

var add = document.querySelector("#add");

var tasks = document.querySelector("#tasks");
	

var add = document.querySelector("#add");


var close = document.querySelector("#close");







addTask.addEventListener("click", function() {

	add.style.opacity = 1;
	add.style.transition = "opacity 1s";








	});

	add.addEventListener("keypress", function(event) {
		
		var task = document.querySelector("#add").value;


	 if (event.keyCode == 13) {


	 	
	 	todos.push(task);
	 	var a = document.createElement("div");


		var check = document.createElement("div");

		a.className += "todo";

		check.className += "check";

		
		a.appendChild(check);
		

		

		
		

		var p = document.createElement("p");
		
		var node = document.createTextNode(task);

		p.appendChild(node);

		var span = document.createElement("span");

		span.className += "fa fa-trash delete";

		span.style.opacity = 0;

		p.appendChild(span);

		a.appendChild(p);

		//a.style.opacity = 1;
		//a.style.transition = "opacity .5s";

		a.style.opacity = 0;
		tasks.appendChild(a);

		window.setTimeout(addTask, 0);

		function addTask() {

			

			a.style.opacity = 1;
			
		}
	



		var task = document.querySelector("#add").value = " ";

		add.style.opacity = 0;
		add.style.transition = "opacity none";

	check.addEventListener("click", function() {
		if (check.style.backgroundColor === "transparent") {
			check.style.backgroundColor = "#fff";
			p.style.textDecoration = "line-through";
		} else {
			check.style.backgroundColor = "transparent";
			p.style.textDecoration = "none";
		}
	});	


	p.addEventListener("click", function() {
		if (check.style.backgroundColor === "transparent") {
			check.style.backgroundColor = "#fff";
			p.style.textDecoration = "line-through";
		} else {
			check.style.backgroundColor = "transparent";
			p.style.textDecoration = "none";
		}
	});	

		span.addEventListener("click", function() {
			console.log(this);
			console.log(a);
			a.style.opacity = 0;
			a.style.transition = "opacity .5s";

			window.setTimeout(remove, 500);

			function remove() {
				tasks.removeChild(a);
			}
		});

	a.addEventListener("mouseover", function() {
		span.style.opacity = 1;
		span.style.transition = "opacity .5s";

	});

	a.addEventListener("mouseout", function() {
		span.style.opacity = 0;
		span.style.transition = "opacity .5s";
	});



		
}










	});







		












	





			









