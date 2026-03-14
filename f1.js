const drivers = [
    {
        name: "Lewis Hamilton",
        nickname: "\"Sir Lewis\"",
        team: "Ferrari",
        principal: "Frédéric Vasseur",
        image: "hamilton.jpeg",
        fact: "Lewis is a partial owner of the Denver Broncos NFL team and has a vegan bulldog named Roscoe.",
        color: "var(--ferrari)",
        logo: "https://logo.clearbit.com/ferrari.png?size=400x400"
    },
    {
        name: "Max Verstappen",
        nickname: "\"Super Max\"",
        team: "Red Bull Racing",
        principal: "Christian Horner",
        image: "max.jpeg",
        fact: "He won his very first F1 race for Red Bull at the 2016 Spanish Grand Prix at just 18 years old.",
        color: "var(--redbull)",
        logo: "https://logo.clearbit.com/redbullracing.png?size=400x400"
    },
    {
        name: "Lando Norris",
        nickname: "\"Last Lap Lando\"",
        team: "McLaren",
        principal: "Andrea Stella",
        image: "lando.jpeg",
        fact: "Lando is a massive gamer and founded his own successful esports and lifestyle brand called Quadrant.",
        color: "var(--mclaren)",
        logo: "https://logo.clearbit.com/mclaren.png?size=400x400"
    },
    {
        name: "George Russell",
        nickname: "\"Mr. Consistency\"",
        team: "Mercedes",
        principal: "Toto Wolff",
        image: "george.jpeg",
        fact: "He famously created a PowerPoint presentation when he was a teenager to convince Toto Wolff to sign him.",
        color: "var(--mercedes)",
        logo: "https://logo.clearbit.com/mercedes.png?size=400x400"
    },
    {
        name: "Charles Leclerc",
        nickname: "\"The Prince of Monaco\"",
        team: "Ferrari",   
        principal: "Frédéric Vasseur",
        image: "charles.jpeg",
        fact: "Charles is known for his incredible qualifying pace and has a strong connection to his home country of Monaco.",
        color: "var(--ferrari)",
        logo: "https://logo.clearbit.com/ferrari.png?size=400x400"
    }
];

const gridContainer = document.getElementById('paddock-grid');
const searchBar = document.getElementById('search-bar');

// --- NEW: 3D Tilt Logic ---
function applyTiltEffect() {
    const cards = document.querySelectorAll('.driver-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardInner = card.querySelector('.card-inner');
            const rect = card.getBoundingClientRect();
            
            // Calculate coordinates relative to the card center
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Spatial transformation for 3D rotation
            const rotateX = (centerY - y) / 15; 
            const rotateY = (x - centerX) / 15;

            cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            const cardInner = card.querySelector('.card-inner');
            cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    });
}

// 1. Wrap your card creation in a reusable function
function renderDrivers(driversToDisplay) {
    gridContainer.innerHTML = ''; 

    if (driversToDisplay.length === 0) {
        gridContainer.innerHTML = '<p style="color: white; text-align: center; width: 100%; font-family: Orbitron;">No drivers found in the paddock.</p>';
        return;
    }

    // UPDATED: Added 'index' to create staggered animation delays
    driversToDisplay.forEach((driver, index) => {
        const cardHTML = `
            <div class="driver-card" style="--glow-color: ${driver.color}; animation-delay: ${index * 0.1}s;">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${driver.image}" alt="${driver.name}">
                        <div class="info">
                            <h2>${driver.name}</h2>
                            <p class="nickname">${driver.nickname}</p>
                            <span class="team-badge" style="border: 1px solid ${driver.color}; color: ${driver.color};">${driver.team}</span>
                        </div>
                    </div>
                    <div class="card-back" style="border: 1px solid ${driver.color};">
                        <h3>Did You Know?</h3>
                        <p>${driver.fact}</p>
                        <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                            <span class="stat-label">Team Principal</span>
                            <strong>${driver.principal}</strong>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });

    // RE-APPLY Tilt whenever the grid is redrawn
    applyTiltEffect();
}

// 2. Load initial drivers
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