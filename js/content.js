import { grid1 } from "./data.js";

let usersContainer = document.querySelector(".section_2_grid_1");

const mappedUsers = grid1.map((user, index) => {
  return `<div class="project-card" key=${index}>
                  <div class="details">
                   <p class='text-[red]'>${user.name}</p>
                   <p>${user.text}</p>
                   <p>${user.office_address}</p>
                 </div>
            </div>`;
});

// usersContainer.innerHTML = mappedUsers;
