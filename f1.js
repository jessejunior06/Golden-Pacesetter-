const drivers = [
    {
        name: "Lewis Hamilton",
        nickname: "\"Sir Lewis\"",
        team: "Ferrari",
        principal: "Frédéric Vasseur",
        image: "hamilton.jpeg",
        fact: "Lewis is a partial owner of the Denver Broncos NFL team and has a vegan bulldog named Roscoe.",
        color: "var(--ferrari)",
        logo: "ferrari-logo.png" // Update this to your local filename
    },
    {
        name: "Charles Leclerc",
        nickname: "\"The Prince of Monaco\"",
        team: "Ferrari",   
        principal: "Frédéric Vasseur",
        image: "charles.jpeg",
        fact: "Charles is known for his incredible qualifying pace and has a strong connection to his home country of Monaco.",
        color: "var(--ferrari)",
        logo: "ferrari-logo.png" // Update this to your local filename
    },
    {
        name: "Max Verstappen",
        nickname: "\"Super Max\"",
        team: "Red Bull Racing",
        principal: "Christian Horner",
        image: "max.jpeg",
        fact: "He won his very first F1 race for Red Bull at the 2016 Spanish Grand Prix at just 18 years old.",
        color: "var(--redbull)",
        logo: "redbull-logo.png" // Update this to your local filename
    },
    {
        name: "Lando Norris",
        nickname: "\"Last Lap Lando\"",
        team: "McLaren",
        principal: "Andrea Stella",
        image: "lando.jpeg",
        fact: "Lando is a massive gamer and founded his own successful esports and lifestyle brand called Quadrant.",
        color: "var(--mclaren)",
        logo: "mclaren-logo.jpeg" // Update this to your local filename
    },
    {
        name: "George Russell",
        nickname: "\"Mr. Consistency\"",
        team: "Mercedes",
        principal: "Toto Wolff",
        image: "george.jpeg",
        fact: "He famously created a PowerPoint presentation when he was a teenager to convince Toto Wolff to sign him.",
        color: "var(--mercedes)",
        logo: "benz-logo.jpeg" // Update this to your local filename
    }
];

const gridContainer = document.getElementById('paddock-grid');
const searchBar = document.getElementById('search-bar');

// --- 3D Tilt Logic (Fixed to allow flipping) ---
function applyTiltEffect() {
    const cards = document.querySelectorAll('.driver-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardInner = card.querySelector('.card-inner');
            const rect = card.getBoundingClientRect();
            
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (centerY - y) / 20; 
            const rotateY = (x - centerX) / 20;

            // This allows the card to keep its hover-flip (180deg) while tilting
            cardInner.style.transform = `rotateY(180deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            const cardInner = card.querySelector('.card-inner');
            cardInner.style.transform = `rotateY(0deg) rotateX(0deg) rotateY(0deg)`;
        });
    });
}

// 1. Reusable function to sort and render
function renderDrivers(driversToDisplay) {
    gridContainer.innerHTML = ''; 

    if (driversToDisplay.length === 0) {
        gridContainer.innerHTML = '<p style="color: white; text-align: center; width: 100%; font-family: Orbitron;">No drivers found in the paddock.</p>';
        return;
    }

    // --- SORTING LOGIC: Group by Team Name ---
    const groupedDrivers = [...driversToDisplay].sort((a, b) => a.team.localeCompare(b.team));

    groupedDrivers.forEach((driver, index) => {
        const cardHTML = `
            <div class="driver-card" style="--glow-color: ${driver.color}; animation-delay: ${index * 0.1}s;">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${driver.image}" alt="${driver.name}">
                        <div class="info">
                            <h2>${driver.name}</h2>
                            <p class="nickname">${driver.nickname}</p>
                            
                            <div class="team-container">
                                <img src="${driver.logo}" class="team-logo" alt="logo">
                                <span class="team-badge">${driver.team}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-back" style="border: 2px solid ${driver.color};">
                        <h3>Did You Know?</h3>
                        <p>${driver.fact}</p>
                        <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); width: 100%;">
                            <span class="stat-label">Team Principal</span>
                            <strong>${driver.principal}</strong>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });

    applyTiltEffect();
}

// 2. Load initial sorted list
renderDrivers(drivers);

// 3. Search Bar listener
searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredDrivers = drivers.filter(driver => {
        return driver.name.toLowerCase().includes(searchString) || 
               driver.team.toLowerCase().includes(searchString);
    });
    renderDrivers(filteredDrivers);
});