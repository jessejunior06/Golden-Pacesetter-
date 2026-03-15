// --- SIDE A: TEAM DATABASE (2026 F1) ---
const teams = {
    mclaren: {
        name: "McLaren",
        principal: "Andrea Stella",
        color: "var(--mclaren)",
        logo: "mclaren-logo.jpeg"
    },
    mercedes: {
        name: "Mercedes",
        principal: "Toto Wolff",
        color: "var(--mercedes)",
        logo: "benz-logo.jpeg"
    },
    redbull: {
        name: "Red Bull Racing",
        principal: "Christian Horner",
        color: "var(--redbull)",
        logo: "redbull-logo.png"
    },
    ferrari: {
        name: "Ferrari",
        principal: "Frédéric Vasseur",
        color: "var(--ferrari)",
        logo: "ferrari-logo.png"
    },
    williams: {
        name: "Williams",
        principal: "James Vowles",
        color: "var(--williams)",
        logo: "williams-logo.png"
    },
    racingbulls: {
        name: "Racing Bulls",
        principal: "Laurent Mekies",
        color: "var(--racingbulls)",
        logo: "racingbulls-logo.jpeg"
    },
    astonmartin: {
        name: "Aston Martin",
        principal: "Adrian Newey",
        color: "var(--astonmartin)",
        logo: "astonmartin-logo.png"
    },
    haas: {
        name: "Haas F1 Team",
        principal: "Ayao Komatsu",
        color: "var(--haas)",
        logo: "haas-logo.png"
    },
    alpine: {
        name: "Alpine",
        principal: "Flavio Briatore",
        color: "var(--alpine)",
        logo: "alpine-logo.png"
    },
    audi: {
        name: "Audi",
        principal: "Jonathan Wheatley",
        color: "var(--audi)",
        logo: "audi-logo.jpeg"
    },
    cadillac: {
        name: "Cadillac",
        principal: "Graeme Lowdon",
        color: "var(--cadillac)",
        logo: "cadillac-logo.jpeg"
    }
};

// --- SIDE B: DRIVER DATABASE (2026 F1 GRID) ---
const drivers = [
    {
        name: "Lando Norris",
        nickname: "LN4",
        number: 1,
        flag: "🇬🇧",
        teamKey: "mclaren",
        image: "lando.jpeg",
        fact: "Lando Norris entered 2026 as the reigning World Champion and switched from #4 to #1."
    },
    {
        name: "Oscar Piastri",
        nickname: "Oscar",
        number: 81,
        flag: "🇦🇺",
        teamKey: "mclaren",
        image: "piastri.jpeg",
        fact: "Oscar Piastri continues with McLaren in 2026 as one of the strongest young drivers on the grid."
    },
    {
        name: "George Russell",
        nickname: "GR63",
        number: 63,
        flag: "🇬🇧",
        teamKey: "mercedes",
        image: "george.jpeg",
        fact: "George Russell leads Mercedes in 2026 and is one of the top contenders in the new era."
    },
    {
        name: "Kimi Antonelli",
        nickname: "Kimi",
        number: 12,
        flag: "🇮🇹",
        teamKey: "mercedes",
        image: "antonelli.jpeg",
        fact: "Kimi Antonelli is Mercedes' young star and became an F1 race winner in the 2026 season."
    },
    {
        name: "Max Verstappen",
        nickname: "Super Max",
        number: 33,
        flag: "🇳🇱",
        teamKey: "redbull",
        image: "max.jpeg",
        fact: "Max Verstappen remains Red Bull's lead driver in Formula 1's new 2026 era."
    },
    {
        name: "Isack Hadjar",
        nickname: "Hadjar",
        number: 6,
        flag: "🇫🇷",
        teamKey: "redbull",
        image: "hadjar.jpeg",
        fact: "Isack Hadjar steps up to Red Bull Racing as part of the team's 2026 driver lineup."
    },
    {
        name: "Lewis Hamilton",
        nickname: "Sir Lewis",
        number: 44,
        flag: "🇬🇧",
        teamKey: "ferrari",
        image: "hamilton.jpeg",
        fact: "Lewis Hamilton races for Ferrari in 2026 after his blockbuster move from Mercedes."
    },
    {
        name: "Charles Leclerc",
        nickname: "CL16",
        number: 16,
        flag: "🇲🇨",
        teamKey: "ferrari",
        image: "charles.jpeg",
        fact: "Charles Leclerc is a Monegasque driver and one half of Ferrari's star-studded lineup."
    },
    {
        name: "Carlos Sainz",
        nickname: "Carlitos",
        number: 55,
        flag: "🇪🇸",
        teamKey: "williams",
        image: "sainz.jpeg",
        fact: "Carlos Sainz races for Williams in 2026 after his move away from Ferrari."
    },
    {
        name: "Alexander Albon",
        nickname: "Albono",
        number: 23,
        flag: "🇹🇭",
        teamKey: "williams",
        image: "albon.jpeg",
        fact: "Alex Albon continues with Williams and remains central to the team's progress."
    },
    {
        name: "Liam Lawson",
        nickname: "Liam",
        number: 30,
        flag: "🇳🇿",
        teamKey: "racingbulls",
        image: "lawson.jpeg",
        fact: "Liam Lawson races for Racing Bulls in the 2026 Formula 1 season."
    },
    {
        name: "Arvid Lindblad",
        nickname: "Arvid",
        number: 17,
        flag: "🇬🇧",
        teamKey: "racingbulls",
        image: "arvid.jpeg", // <--- Double check this filename!
        fact: "Arvid Lindblad joins Racing Bulls as one of the exciting rookies on the 2026 grid."
    },
    {
        name: "Fernando Alonso",
        nickname: "El Nano",
        number: 14,
        flag: "🇪🇸",
        teamKey: "astonmartin",
        image: "fernando.jpeg",
        fact: "Fernando Alonso continues with Aston Martin in 2026 under new team principal Adrian Newey."
    },
    {
        name: "Lance Stroll",
        nickname: "Lance",
        number: 18,
        flag: "🇨🇦",
        teamKey: "astonmartin",
        image: "lance.jpeg",
        fact: "Lance Stroll remains part of Aston Martin's lineup in the 2026 season."
    },
    {
        name: "Esteban Ocon",
        nickname: "Ocon",
        number: 31,
        flag: "🇫🇷",
        teamKey: "haas",
        image: "esteban.jpeg",
        fact: "Esteban Ocon races for Haas F1 Team in 2026."
    },
    {
        name: "Oliver Bearman",
        nickname: "Ollie",
        number: 87,
        flag: "🇬🇧",
        teamKey: "haas",
        image: "bearman.jpeg",
        fact: "Oliver Bearman continues his rise in Formula 1 with Haas in 2026."
    },
    {
        name: "Pierre Gasly",
        nickname: "PG10",
        number: 10,
        flag: "🇫🇷",
        teamKey: "alpine",
        image: "gasly.jpeg",
        fact: "Pierre Gasly leads Alpine's 2026 lineup."
    },
    {
        name: "Franco Colapinto",
        nickname: "Franco",
        number: 43,
        flag: "🇦🇷",
        teamKey: "alpine",
        image: "colapinto.jpeg",
        fact: "Franco Colapinto races for Alpine in the 2026 season."
    },
    {
        name: "Nico Hulkenberg",
        nickname: "Hulk",
        number: 27,
        flag: "🇩🇪",
        teamKey: "audi",
        image: "hulkenberg.jpeg",
        fact: "Nico Hulkenberg is part of Audi's 2026 Formula 1 lineup."
    },
    {
        name: "Gabriel Bortoleto",
        nickname: "Borto",
        number: 5,
        flag: "🇧🇷",
        teamKey: "audi",
        image: "bortoleto.jpeg",
        fact: "Gabriel Bortoleto joins Audi as one of the young talents on the 2026 grid."
    },
    {
        name: "Sergio Pérez",
        nickname: "Checo",
        number: 11,
        flag: "🇲🇽",
        teamKey: "cadillac",
        image: "sergio.jpeg",
        fact: "Sergio Pérez races for Cadillac in the team's debut Formula 1 season."
    },
    {
        name: "Valtteri Bottas",
        nickname: "Valtteri",
        number: 77,
        flag: "🇫🇮",
        teamKey: "cadillac",
        image: "valtteri.jpeg",
        fact: "Valtteri Bottas partners Sergio Perez at Cadillac in 2026."
    }
];

const gridContainer = document.getElementById('paddock-grid');
const searchBar = document.getElementById('search-bar');

// --- THE ENGINE: TILT EFFECT LOGIC ---
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
            
            // Adjust tilt intensity here
            const rotateX = (centerY - y) / 15; 
            const rotateY = (x - centerX) / 15;

            // Maintain the 180deg flip while adding the tilt offset
            cardInner.style.transform = `rotateY(180deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            const cardInner = card.querySelector('.card-inner');
            // Return to neutral state
            cardInner.style.transform = `rotateY(0deg) rotateX(0deg) rotateY(0deg)`;
        });
    });
}

// --- THE ENGINE: RENDERING LOGIC ---
function renderDrivers(driversToDisplay) {
    gridContainer.innerHTML = '';

    if (driversToDisplay.length === 0) {
        gridContainer.innerHTML = '<p class="error-msg">No drivers found in the paddock.</p>';
        return;
    }

    gridContainer.innerHTML = driversToDisplay.map((driver, index) => {
        const team = teams[driver.teamKey];

        if (!team) {
            return `
                <div class="driver-card error-card">
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="info">
                                <h2>${driver.name}</h2>
                                <p class="nickname">${driver.nickname}</p>
                                <p class="error-msg">Team data missing for: ${driver.teamKey}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="driver-card" style="--glow-color: ${team.color}; animation-delay: ${index * 0.1}s;">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${driver.image}" alt="${driver.name}">
                        <div class="info">
                            <div class="card-header">
                                <span class="driver-number">#${driver.number}</span>
                                <span class="flag">${driver.flag}</span>
                            </div>
                            <h2>${driver.name}</h2>
                            <p class="nickname">${driver.nickname}</p>
                            <div class="team-container">
                                <div class="team-logo-icon" style="background-image: url('${team.logo}');"></div>
                                <span class="team-badge">${team.name}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-back" style="border: 2px solid ${team.color};">
                        <h3>Did You Know?</h3>
                        <p>${driver.fact}</p>
                        <div class="principal-box">
                            <span class="stat-label">Team Principal</span>
                            <strong>${team.principal}</strong>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-initialize tilt effect for the newly created DOM elements
    applyTiltEffect();
}

// --- SEARCH LOGIC ---
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredDrivers = drivers.filter(driver => {
        const team = teams[driver.teamKey];
        return (
            driver.name.toLowerCase().includes(searchTerm) ||
            driver.nickname.toLowerCase().includes(searchTerm) ||
            driver.flag.includes(searchTerm) ||
            (team && team.name.toLowerCase().includes(searchTerm))
        );
    });

    renderDrivers(filteredDrivers);
});

// --- INITIAL RENDER ---
renderDrivers(drivers);