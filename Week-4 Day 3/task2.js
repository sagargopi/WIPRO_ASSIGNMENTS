// Task 2: Fetch and display a random user from https://randomuser.me/api/
const fetchBtn = document.getElementById("fetch-btn");
const userInfoContainer = document.getElementById("user-info");

const fetchRandomUser = async () => {
    userInfoContainer.innerHTML = "<p>Loading...</p>";
    
    try {
        const response = await fetch("https://randomuser.me/api/");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        const user = data.results[0];
        
        const { title, first, last } = user.name;
        const fullName = `${title} ${first} ${last}`;
        const email = user.email;
        const profilePic = user.picture.large;
        
        displayUser(fullName, email, profilePic);
    } catch (error) {
        console.error("Error fetching random user:", error);
        userInfoContainer.innerHTML = `<p class="error">Failed to fetch user. Error: ${error.message}</p>`;
    }
};

const displayUser = (name, email, profilePic) => {
    userInfoContainer.innerHTML = `
        <div class="user-card">
            <img src="${profilePic}" alt="${name}'s profile picture" class="profile-pic">
            <div class="name">${name}</div>
            <div class="email">${email}</div>
        </div>
    `;
};

fetchBtn.addEventListener("click", fetchRandomUser);
