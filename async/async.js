localStorage.removeItem("users")
const usersContainer = document.querySelector("#users-container");
const loadingMsg = document.querySelector(".loading-msg");
const template = document.querySelector("#user-template");
const btnGetAll = document.querySelector("#get-all");
const btnRemoveAll = document.querySelector("#remove-all");

function loadData() {
  const data = localStorage.getItem("users");
  if (data !== null) {
    renderUsers(JSON.parse(data));
  } else {
    loadingMsg.textContent = "Данные загружаются...";
    setTimeout(() => {
      fetch("async.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
          }
          return response.json();
        })
        .then(json => {
          localStorage.setItem("users", JSON.stringify(json.users));
          renderUsers(json.users);
        })
        .catch(error => {
          loadingMsg.style.display = "block";
          loadingMsg.textContent = "Что-то пошло не так при загрузке!";
        });
    }, 2000);
  }
}

function renderUsers(users) {
  usersContainer.innerHTML = "";
  loadingMsg.style.display = "none";
  users.forEach(user => {
    const card = template.content.cloneNode(true);
    card.querySelector(".user-name").textContent = `${ user.name } ${ user.surname }`;
    card.querySelector(".user-email").textContent = `${ user.email }`;
    card.querySelector(".user-age").textContent = `Возраст: ${ user.age }`;
    card.querySelector(".delete-btn").onclick = () => deleteUser(user.id);
    usersContainer.appendChild(card);
  });
}

function deleteUser(id) {
  const users = JSON.parse(localStorage.getItem("users"));
  const newUsers = users.filter(user => user.id !== id);
  localStorage.setItem("users", JSON.stringify(newUsers));
  renderUsers(newUsers);
}

function removeAllUsers() {
  localStorage.removeItem("users");
  usersContainer.innerHTML = "";
  alert("Все карточки удалены");
}

function getAllUsers() {
loadData();
}

btnGetAll.onclick = getAllUsers;
btnRemoveAll.onclick = removeAllUsers;

loadData();
