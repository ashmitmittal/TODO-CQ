var todoArr = [];
// get localItems
var getTodo = JSON.parse(localStorage.getItem("todos"));
if (getTodo != null) {
	todoArr = JSON.parse(localStorage.getItem("todos"));
	console.log(todoArr);
	for (var i = 0; i < getTodo.length; i++) {
		if (getTodo[i].length > 1) {
			var li = document.createElement("li");
			var span = document.createElement("span");
			var text = document.createTextNode(" X");
			span.appendChild(text);
			span.style.float = "right";
			span.style.cursor = "pointer";
			span.className = "close";
			var t = document.createTextNode(getTodo[i]);
			li.appendChild(t);
			li.appendChild(span);
			todoArr.push(task);
			document.getElementById("listItems").appendChild(li);
		}
	}
}

// todo add or delete
const addTask = document.getElementById("addTask");
var closeButton = document.getElementsByClassName("close");

for (var i = 0; i < closeButton.length; i++) {
	closeButton[i].onclick = function() {
		var div = this.parentElement;
		var removeElement = div.textContent.slice(0, -2);
		div.style.display = "none";
		todoArr = todoArr.filter(val => {
			return val != removeElement;
		});
		localStorage.setItem("todos", JSON.stringify(todoArr));
	};
}

addTask.addEventListener("click", () => {
	var task = document.getElementById("task").value;
	if (!task) {
		alert("enter some task");
	} else {
		var li = document.createElement("li");
		var span = document.createElement("span");
		var text = document.createTextNode(" X");
		span.appendChild(text);
		span.style.float = "right";
		span.style.cursor = "pointer";
		span.className = "close";
		var t = document.createTextNode(task);
		li.appendChild(t);
		li.appendChild(span);
		todoArr.push(task);
		localStorage.setItem("todos", JSON.stringify(todoArr));
		document.getElementById("listItems").appendChild(li);
		document.getElementById("task").value = "";

		for (i = 0; i < closeButton.length; i++) {
			closeButton[i].onclick = function() {
				var div = this.parentElement;
				var removeElement = div.textContent.slice(0, -2);
				div.style.display = "none";
				todoArr = todoArr.filter(val => {
					return val != removeElement;
				});
				console.log(todoArr);
				localStorage.setItem("todos", JSON.stringify(todoArr));
			};
		}
	}
});
