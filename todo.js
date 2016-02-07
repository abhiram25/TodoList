var addTask = document.querySelector("#date #AddTask");


var todos = [];

var EnterTask = document.querySelector("#EnterTask");

var tasks = document.querySelector("#tasks");
	

var add = document.querySelector("#add");


var close = document.querySelector("#close");


var task = document.querySelector("#add").value;

addTask.addEventListener("click", function() {


	var task = document.querySelector("#add").value;

	add.addEventListener("keypress", function(event) {
		var task = document.querySelector("#add").value;
		if(event.which == 13) {
			console.log(task);
		}
	});





	});


	




/*
	var input = document.querySelector("input").value;


					
					todos.push(input);


		var p = document.createElement("p");
		var remove = document.createElement("button");

	var node = document.createTextNode(input);

		p.appendChild(node);
		p.appendChild(remove);

		

			tasks.appendChild(p);

			remove.addEventListener("click", function() {
			tasks.removeChild(p);
		});

			p.addEventListener("click", function() {
				if (p.style.textDecoration === "none") {
					p.style.setProperty("text-decoration", "line-through");
				} else {
					p.style.setProperty("text-decoration", "none");
				}
});  		
			
		}); 
*/


/* close.addEventListener("click", function() {
		EnterTask.style.display = "none";
	}); */






	





			









