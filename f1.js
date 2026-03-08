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
        logo: "https://logo.clearbit.com/mclaren.png?size=400x400   "
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

drivers.forEach(driver => {
    const cardHTML = `
        <div class="driver-card" style="--glow-color: ${driver.color};">
            <div class="card-inner">
                
                <div class="card-front">
                    <img src="${driver.image}" alt="${driver.name}">
                    <div class="info">
                        <h2>${driver.name}</h2>
                        <p class="nickname">${driver.nickname}</p>
                        
                        <div class="team-container">
                            <div class="logo-icon" style="background-image: url('${driver.logo}');"></div>
                            <span class="team-badge" style="border: 1px solid ${driver.color}; color: ${driver.color};">
                                ${driver.team}
                            </span>
                        </div>
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
