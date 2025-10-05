
const nameInput = document.getElementById("name");
const nationalIdInput = document.getElementById("nationalId");
const ageInput = document.getElementById("age");
const tableBody = document.getElementById("studentTable");
const addBtn = document.getElementById("addBtn");

function addStudent() {
  const name = nameInput.value;
  const nationalId = nationalIdInput.value;
  const age = ageInput.value;

  const newRow = document.createElement("tr");
  newRow.innerHTML =
    "<td>" + name + "</td>" +
    "<td>" + nationalId + "</td>" +
    "<td>" + age + "</td>" +
    "<td><button onclick='this.parentElement.parentElement.remove()' class='btn btn-danger btn-sm'>حذف</button></td>";

  tableBody.appendChild(newRow);

  nameInput.value = "";
  nationalIdInput.value = "";
  ageInput.value = "";
}

window.onload = function() {
  addBtn.onclick = addStudent;
};

