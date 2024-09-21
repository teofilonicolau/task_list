document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("addTask");
  const newTaskInput = document.getElementById("newTask");
  const tasksList = document.getElementById("tasks");

  const goToGoogleBtn = document.getElementById("goToGoogle");
  goToGoogleBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });

  const voltarBtn = document.getElementById("voltar");
  voltarBtn.addEventListener("click", () => {
    window.history.back();
  });

  const avancarBtn = document.getElementById("avancar");
  avancarBtn.addEventListener("click", () => {
    window.history.forward();
  });

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.textContent = taskText;
      li.appendChild(textSpan);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remover";
      removeButton.onclick = function () {
        this.parentNode.remove();
      };

      li.appendChild(removeButton);
      tasksList.appendChild(li);
      newTaskInput.value = "";
    }
  }

  addTaskButton.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  const changeTextBtn = document.getElementById("changeTextBtn");
  const textToChange = document.getElementById("textToChange");

  changeTextBtn.addEventListener("click", () => {
    setTimeout(() => {
      textToChange.textContent = "Texto alterado!";
    }, 3000);
  });

  let counter;
  let count = 0;
  const startCounterBtn = document.getElementById("startCounter");
  const stopCounterBtn = document.getElementById("stopCounter");
  const counterDisplay = document.getElementById("counterDisplay");

  startCounterBtn.addEventListener("click", () => {
    if (!counter) {
      counter = setInterval(() => {
        count++;
        counterDisplay.textContent = `Contador: ${count}`; // Atualiza o display na página
      }, 1000);
    }
  });

  stopCounterBtn.addEventListener("click", () => {
    clearInterval(counter);
    counter = null;
    console.log("Contador parado.");
  });
});
