async function getUsers() {

  try {

    const response = await fetch("https://dummyjson.com/users");

    const data = await response.json();

    const users = data.users;

    const table = document.getElementById("userTable");

    users.forEach(user => {

      const row = `
        <tr>
          <td>${user.id}</td>
          <td>${user.firstName}</td>
          <td>${user.email}</td>
        </tr>
      `;

      table.innerHTML += row;

    });

  } catch (error) {

    console.log("Error fetching data:", error);

  }

}

getUsers();