// South Park Theme Song Intro Maker - Complete Collection
// Main Application JavaScript

// ===== DATA: SEASON INTROS =====
const seasonIntros = [
    {
        id: 1,
        season: "Season 1-2 (1997-1998)",
        title: "Original Intro",
        years: "1997-1998",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Friendly faces everywhere, humble folks without temptation",
            "Goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "I like girls with big fat titties, I like girls with deep vaginas!",
            "So come on down to South Park and meet some friends of mine!"
        ],
        notes: "Original unedited version with explicit content"
    },
    {
        id: 2,
        season: "Season 3-5 (1999-2001)",
        title: "Edited TV Version",
        years: "1999-2001",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Friendly faces everywhere, humble folks without temptation",
            "I'm goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "Timmy! Timmy! Timmy! Timmy!",
            "So come on down to South Park and meet some friends of mine!"
        ],
        notes: "Censored version with 'Timmy!' replacing explicit lyrics"
    },
    {
        id: 3,
        season: "Season 4 Episode 1",
        title: "Cartman's Silly Hate Crime 2000",
        years: "2000",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Friendly faces everywhere, humble folks without temptation",
            "I'm goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "Timmy, Timmy, Timmy, Timmy, Timmy, Timmy, livin' a lie!",
            "Timmy!"
        ],
        notes: "Special Timmy-focused intro"
    },
    {
        id: 4,
        season: "Season 6-10 (2002-2006)",
        title: "Modern Standard Version",
        years: "2002-2006",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Friendly faces everywhere, humble folks without temptation",
            "I'm goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "Mrph rmhmhm rm! Mrph rmhmhm rm!",
            "So come on down to South Park and meet some friends of mine!"
        ],
        notes: "Kenny's muffled speech version"
    },
    {
        id: 5,
        season: "Season 10+",
        title: "Current HD Version",
        years: "2006-Present",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Friendly faces everywhere, humble folks without temptation",
            "Goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "(Muffled Kenny speech)",
            "So come on down to South Park and meet some friends of mine!"
        ],
        notes: "HD remastered version used from Season 10 onwards"
    },
    {
        id: 6,
        season: "Holiday Special",
        title: "Christmas Intro",
        years: "Various",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Frosty faces everywhere, humble folks without temptation",
            "Goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Merry Christmas!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "Santa Claus is coming to town!",
            "So come on down to South Park and meet some friends of mine!"
        ],
        notes: "Special Christmas episode intro"
    },
    {
        id: 7,
        season: "Special Episodes",
        title: "Movie Version (Extended)",
        years: "1999",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Friendly faces everywhere, humble folks without temptation",
            "Goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "I like girls with big vaginas, I like girls with big fat titties!",
            "So come on down to South Park and meet some friends of mine!",
            "Come on down to South Park and meet some friends of mine!",
            "Howdy, neighbor!"
        ],
        notes: "Extended version from South Park: Bigger, Longer & Uncut"
    },
    {
        id: 8,
        season: "Season 18",
        title: "Gluten-Free Intro",
        years: "2014",
        lyrics: [
            "I'm goin' down to South Park, gonna have myself a time",
            "Gluten-free faces everywhere, humble folks without temptation",
            "Goin' down to South Park, gonna leave my woes behind",
            "Ample parking day or night, people spouting: 'Howdy, neighbor!'",
            "Headin' on up to South Park, gonna see if I can't unwind",
            "(Muffled Kenny speech)",
            "So come on down to South Park and meet some friends of mine!"
        ],
        notes: "Special gluten-free parody intro"
    }
];

// ===== DATA: VARIATIONS =====
const variations = [
    {
        id: "var1",
        name: "Slow Motion Intro",
        description: "The classic intro played at 0.5x speed for dramatic effect",
        speed: 0.5,
        pitch: 0,
        tags: ["Slow", "Dramatic", "Extended"]
    },
    {
        id: "var2",
        name: "Chipmunk Version",
        description: "High-pitched, fast version that sounds like chipmunks",
        speed: 1.5,
        pitch: 8,
        tags: ["Fast", "High Pitch", "Funny"]
    },
    {
        id: "var3",
        name: "Deep Voice Version",
        description: "Slowed down with lowered pitch for a deeper, more serious tone",
        speed: 0.8,
        pitch: -6,
        tags: ["Slow", "Deep", "Serious"]
    },
    {
        id: "var4",
        name: "Speed Run Intro",
        description: "Maximum speed version - intro in record time",
        speed: 2.0,
        pitch: 0,
        tags: ["Very Fast", "Speed Run", "Challenge"]
    },
    {
        id: "var5",
        name: "Nightcore Remix",
        description: "Nightcore style with increased speed and pitch",
        speed: 1.3,
        pitch: 5,
        tags: ["Nightcore", "Remix", "Upbeat"]
    },
    {
        id: "var6",
        name: "Reversed Intro",
        description: "Completely backwards version for mysterious vibes",
        reversed: true,
        tags: ["Reversed", "Mystery", "Experimental"]
    },
    {
        id: "var7",
        name: "8-Bit Version",
        description: "Retro 8-bit gaming style intro",
        style: "8bit",
        tags: ["8-Bit", "Retro", "Gaming"]
    },
    {
        id: "var8",
        name: "Vaporwave Edition",
        description: "Slowed, pitched down with aesthetic vibes",
        speed: 0.7,
        pitch: -3,
        effects: ["reverb", "echo"],
        tags: ["Vaporwave", "Aesthetic", "Chill"]
    },
    {
        id: "var9",
        name: "Ear Rape Version",
        description: "EXTREME VOLUME WARNING - Maximum distortion and bass boost",
        effects: ["distortion", "bassboost"],
        tags: ["Loud", "Distorted", "Warning"]
    },
    {
        id: "var10",
        name: "Lofi Hip Hop Intro",
        description: "Slowed down with lofi effects for studying/relaxing",
        speed: 0.85,
        effects: ["lofi", "vinyl"],
        tags: ["Lofi", "Chill", "Study"]
    }
];

// ===== DATA: MASHUPS =====
const mashups = [
    {
        id: "mash1",
        name: "South Park x Simpsons",
        description: "South Park intro with Simpsons theme music",
        combination: "South Park lyrics + Simpsons theme melody",
        lyrics: "South Park Season 1 lyrics",
        music: "The Simpsons Theme"
    },
    {
        id: "mash2",
        name: "South Park x Family Guy",
        description: "Mashup with Family Guy's iconic intro style",
        combination: "South Park meets Family Guy",
        lyrics: "Mixed South Park and Family Guy references"
    },
    {
        id: "mash3",
        name: "South Park x Rick and Morty",
        description: "Portal-jumping intro with South Park characters",
        combination: "South Park + Rick and Morty theme",
        lyrics: "Interdimensional South Park adventure"
    },
    {
        id: "mash4",
        name: "South Park x Futurama",
        description: "South Park set in the year 3000",
        combination: "Futuristic South Park theme",
        lyrics: "Good news everyone, we're going to South Park!"
    },
    {
        id: "mash5",
        name: "South Park x Breaking Bad",
        description: "Dramatic tension meets South Park humor",
        combination: "Breaking Bad intensity + South Park silliness"
    },
    {
        id: "mash6",
        name: "South Park x Game of Thrones",
        description: "Epic fantasy intro parody",
        combination: "GOT theme + South Park",
        lyrics: "Winter is coming to South Park"
    },
    {
        id: "mash7",
        name: "South Park x Pokemon",
        description: "Gotta catch 'em all in South Park!",
        combination: "Pokemon theme + South Park locations"
    },
    {
        id: "mash8",
        name: "South Park x Star Wars",
        description: "May the Park be with you",
        combination: "Star Wars opening crawl meets South Park"
    },
    {
        id: "mash9",
        name: "South Park x Marvel",
        description: "Superhero intro with South Park characters",
        combination: "MCU style intro for South Park"
    },
    {
        id: "mash10",
        name: "South Park x Stranger Things",
        description: "Upside down South Park",
        combination: "80s synth + South Park nostalgia"
    }
];

// ===== DATA: CROSSOVER INTRO LINES =====
const crossovers = [
    {
        id: "cross1",
        show: "The Simpsons",
        line: "I'm goin' down to Springfield Park, gonna have myself a D'oh!",
        description: "Homer Simpson visits South Park"
    },
    {
        id: "cross2",
        show: "Family Guy",
        line: "Hehehehe, hey Lois, I'm goin' to South Park! Hehehehe",
        description: "Peter Griffin style intro"
    },
    {
        id: "cross3",
        show: "Rick and Morty",
        line: "*Burp* M-Morty, we gotta go to South Park, Morty! It's important!",
        description: "Rick's interdimensional South Park"
    },
    {
        id: "cross4",
        show: "Adventure Time",
        line: "Come on grab your friends, we're going to South Park lands!",
        description: "Mathematical South Park adventure"
    },
    {
        id: "cross5",
        show: "SpongeBob",
        line: "I'm ready, I'm ready, I'm ready for South Park!",
        description: "SpongeBob's underwater South Park"
    },
    {
        id: "cross6",
        show: "Gravity Falls",
        line: "I'm going down to South Park, gonna solve some mysteries",
        description: "Mystery-solving in South Park"
    },
    {
        id: "cross7",
        show: "The Office",
        line: "I'm Michael Scott, and I'm going to South Park... That's what she said!",
        description: "Michael Scott meets South Park"
    },
    {
        id: "cross8",
        show: "Breaking Bad",
        line: "I am the one who goes to South Park",
        description: "Heisenberg in Colorado"
    },
    {
        id: "cross9",
        show: "Stranger Things",
        line: "Friends don't lie about going to South Park",
        description: "80s kids meet South Park kids"
    },
    {
        id: "cross10",
        show: "Avatar: The Last Airbender",
        line: "Water, Earth, Fire, Air... and South Park!",
        description: "Bending in South Park"
    }
];

// ===== DATA: AU (ALTERNATE UNIVERSE) INTROS =====
const auIntros = [
    {
        id: "au1",
        name: "Zombie Apocalypse South Park",
        description: "Post-apocalyptic version where South Park is overrun",
        lyrics: [
            "I'm crawlin' down to South Park, gonna save my life today",
            "Zombie faces everywhere, hungry folks with desperation",
            "Sneakin' through South Park, gonna keep my brain inside",
            "Barricaded day and night, people screaming: 'Help me, stranger!'",
            "Survivin' in South Park, gonna see if I can't survive",
            "Run! Run! Run for your life!",
            "Better stay away from South Park, they'll eat your brains tonight!"
        ]
    },
    {
        id: "au2",
        name: "Medieval South Park",
        description: "Knights and castles version",
        lyrics: [
            "I'm riding down to South Park, gonna have myself a quest",
            "Gallant knights everywhere, noble folk without temptation",
            "Journeying to South Park, gonna slay a dragon or two",
            "Castle parking day or night, people shouting: 'Hail, good knight!'",
            "Riding on to South Park, gonna see what I can find",
            "For honor! For glory! For the kingdom!",
            "So come ye down to South Park and join our quest divine!"
        ]
    },
    {
        id: "au3",
        name: "Space Station South Park",
        description: "Futuristic space colony version",
        lyrics: [
            "I'm flying up to South Park Station, gonna float in zero-G",
            "Robot faces everywhere, android folks without emotion",
            "Docking at South Park Station, gonna leave Earth far behind",
            "Solar parking day or night, aliens shouting: 'Greetings, Earthling!'",
            "Heading to South Park Station, gonna see if stars align",
            "Beep boop beep! Robot noises!",
            "So beam on up to South Park Station and meet some droids of mine!"
        ]
    },
    {
        id: "au4",
        name: "Underwater South Park",
        description: "Atlantis-style underwater city",
        lyrics: [
            "I'm swimming down to South Park, gonna have myself a dive",
            "Fishy faces everywhere, gill-folk without temptation",
            "Diving down to South Park, gonna leave the surface behind",
            "Coral parking day or night, merfolk spouting: 'Howdy, swimmer!'",
            "Going deep to South Park, gonna see what I can find",
            "Blub blub blub blub blub!",
            "So swim on down to South Park and meet some fish friends of mine!"
        ]
    },
    {
        id: "au5",
        name: "Wild West South Park",
        description: "Cowboys and outlaws version",
        lyrics: [
            "I'm ridin' into South Park, gonna have myself a duel",
            "Cowboy faces everywhere, dusty folks without temptation",
            "Moseyin' to South Park, gonna leave my worries behind",
            "Horse parking day or night, cowboys shoutin': 'Howdy, partner!'",
            "Headin' to South Park saloon, gonna wet my whistle fine",
            "Yee-haw! Shoot 'em up!",
            "So mosey on to South Park and meet some outlaws of mine!"
        ]
    },
    {
        id: "au6",
        name: "Steampunk South Park",
        description: "Victorian era with steam technology",
        lyrics: [
            "I'm steaming down to South Park, in my dirigible so fine",
            "Goggled faces everywhere, inventors without hesitation",
            "Clockwork South Park awaits, gonna leave the old world behind",
            "Airship parking day or night, people shouting: 'Good day, sir!'",
            "Engineering South Park dreams, gonna see what gears align",
            "Chugga chugga steam steam!",
            "So fly on down to South Park and meet some tinkerers of mine!"
        ]
    },
    {
        id: "au7",
        name: "Horror Movie South Park",
        description: "Slasher film intro parody",
        lyrics: [
            "Don't go down to South Park, you'll regret it every time",
            "Scary faces in the dark, serial killers without hesitation",
            "Running from South Park, trying to save your life tonight",
            "No escape day or night, victims screaming: 'Help me, someone!'",
            "Trying to leave South Park, but you'll never make it out alive",
            "Ahhhhhh! Someone's dying!",
            "Should've stayed away from South Park, now you'll join the body count!"
        ]
    },
    {
        id: "au8",
        name: "Anime South Park",
        description: "Japanese anime style intro",
        lyrics: [
            "Senpai, I'm going to South Park-chan, kawaii desu ne!",
            "Anime faces everywhere, tsundere folks with determination",
            "Notice me, South Park-senpai, gonna find my nakama here",
            "Mecha parking day or night, people shouting: 'NANI?!'",
            "Power level over 9000 in South Park!",
            "Believe it! Dattebayo!",
            "So come to South Park Academy and meet your anime destiny!"
        ]
    }
];

// ===== DATA: INTRO STYLES =====
const introStyles = [
    {
        id: "style1",
        name: "Classic Original",
        icon: "🎸",
        description: "The original South Park theme as you know it",
        genre: "Original"
    },
    {
        id: "style2",
        name: "Heavy Metal",
        icon: "🤘",
        description: "Headbanging metal version with screaming guitars",
        genre: "Metal"
    },
    {
        id: "style3",
        name: "Country Western",
        icon: "🤠",
        description: "Yeehaw! Country twang version",
        genre: "Country"
    },
    {
        id: "style4",
        name: "Jazz Lounge",
        icon: "🎺",
        description: "Smooth jazz club rendition",
        genre: "Jazz"
    },
    {
        id: "style5",
        name: "Classical Orchestra",
        icon: "🎻",
        description: "Full orchestral arrangement",
        genre: "Classical"
    },
    {
        id: "style6",
        name: "Reggae Vibes",
        icon: "🌴",
        description: "Laid-back reggae version, mon",
        genre: "Reggae"
    },
    {
        id: "style7",
        name: "EDM Remix",
        icon: "🎧",
        description: "Electronic dance music with sick drops",
        genre: "EDM"
    },
    {
        id: "style8",
        name: "Acoustic Unplugged",
        icon: "🪕",
        description: "Stripped down acoustic version",
        genre: "Acoustic"
    },
    {
        id: "style9",
        name: "Hip Hop Beat",
        icon: "🎤",
        description: "Rap version with fresh beats",
        genre: "Hip Hop"
    },
    {
        id: "style10",
        name: "Punk Rock",
        icon: "💀",
        description: "Fast, aggressive punk version",
        genre: "Punk"
    },
    {
        id: "style11",
        name: "Opera",
        icon: "🎭",
        description: "Dramatic operatic performance",
        genre: "Opera"
    },
    {
        id: "style12",
        name: "Mariachi",
        icon: "🎺",
        description: "Mexican mariachi band version",
        genre: "Mariachi"
    },
    {
        id: "style13",
        name: "Barbershop Quartet",
        icon: "🎩",
        description: "Four-part harmony a cappella",
        genre: "Barbershop"
    },
    {
        id: "style14",
        name: "Dubstep",
        icon: "🔊",
        description: "WUBWUBWUB bass drops everywhere",
        genre: "Dubstep"
    },
    {
        id: "style15",
        name: "K-Pop",
        icon: "💜",
        description: "Korean pop style with dance breaks",
        genre: "K-Pop"
    }
];

// ===== APPLICATION STATE =====
let currentIntro = null;
let isPlaying = false;
let customIntros = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('South Park Intro Maker Initialized!');
    initializeTabs();
    loadSeasonIntros();
    loadVariations();
    loadMashups();
    loadCrossovers();
    loadAUIntros();
    loadStyles();
    initializeGenerator();
    initializeCustomBuilder();
    setupPlaybackControls();

    // Load new extended features
    setTimeout(() => {
        if (typeof loadExtendedIntros !== 'undefined') loadExtendedIntros();
        if (typeof loadMoreCrossovers !== 'undefined') loadMoreCrossovers();
        if (typeof loadVideoGames !== 'undefined') loadVideoGames();
        if (typeof loadGameCrossovers !== 'undefined') loadGameCrossovers();
        if (typeof initializeSilvaGunner !== 'undefined') initializeSilvaGunner();
        if (typeof initializeEpisodeGenerator !== 'undefined') initializeEpisodeGenerator();

        // Load mega expansion features
        if (typeof loadMoreAUs !== 'undefined') loadMoreAUs();
        if (typeof loadThemeGenerator !== 'undefined') loadThemeGenerator();
    }, 100);
});

// ===== TAB FUNCTIONALITY =====
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// ===== LOAD SEASON INTROS =====
function loadSeasonIntros() {
    const grid = document.getElementById('seasonGrid');
    grid.innerHTML = '';

    seasonIntros.forEach(intro => {
        const card = document.createElement('div');
        card.className = 'season-card';
        card.innerHTML = `
            <h3>${intro.title}</h3>
            <div class="season-info">
                <strong>${intro.season}</strong><br>
                ${intro.years}
            </div>
            <div class="lyrics-preview">
                "${intro.lyrics[0]}..."
            </div>
            <p style="margin-top: 10px; font-size: 0.85em; color: #666;">
                ${intro.notes}
            </p>
        `;

        card.addEventListener('click', () => selectIntro(intro, card));
        grid.appendChild(card);
    });
}

// ===== LOAD VARIATIONS =====
function loadVariations() {
    const list = document.getElementById('variationsList');
    list.innerHTML = '';

    variations.forEach(variation => {
        const card = document.createElement('div');
        card.className = 'variation-card';
        card.innerHTML = `
            <h3>${variation.name}</h3>
            <div class="description">${variation.description}</div>
            <div class="tags">
                ${variation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;

        card.addEventListener('click', () => selectVariation(variation));
        list.appendChild(card);
    });
}

// ===== LOAD MASHUPS =====
function loadMashups() {
    const grid = document.getElementById('mashupsGrid');
    grid.innerHTML = '';

    mashups.forEach(mashup => {
        const card = document.createElement('div');
        card.className = 'mashup-card';
        card.innerHTML = `
            <h3>${mashup.name}</h3>
            <p>${mashup.description}</p>
            <div class="combination">
                <strong>Combination:</strong> ${mashup.combination}
            </div>
        `;

        card.addEventListener('click', () => selectMashup(mashup));
        grid.appendChild(card);
    });
}

// ===== LOAD CROSSOVERS =====
function loadCrossovers() {
    const grid = document.getElementById('crossoverGrid');
    grid.innerHTML = '';

    crossovers.forEach(crossover => {
        const card = document.createElement('div');
        card.className = 'crossover-card';
        card.innerHTML = `
            <h3>South Park x ${crossover.show}</h3>
            <p style="font-style: italic; margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                "${crossover.line}"
            </p>
            <p>${crossover.description}</p>
        `;

        card.addEventListener('click', () => selectCrossover(crossover));
        grid.appendChild(card);
    });
}

// ===== LOAD AU INTROS =====
function loadAUIntros() {
    const grid = document.getElementById('auGrid');
    grid.innerHTML = '';

    auIntros.forEach(au => {
        const card = document.createElement('div');
        card.className = 'au-card';
        card.innerHTML = `
            <h3>${au.name}</h3>
            <p>${au.description}</p>
            <div style="margin-top: 10px; padding: 10px; background: #f9f9f9; border-radius: 5px; font-size: 0.9em;">
                <strong>First Line:</strong><br>
                <em>"${au.lyrics[0]}"</em>
            </div>
        `;

        card.addEventListener('click', () => selectAU(au));
        grid.appendChild(card);
    });
}

// ===== LOAD STYLES =====
function loadStyles() {
    const grid = document.getElementById('stylesGrid');
    grid.innerHTML = '';

    introStyles.forEach(style => {
        const card = document.createElement('div');
        card.className = 'style-card';
        card.innerHTML = `
            <div class="style-icon">${style.icon}</div>
            <h3>${style.name}</h3>
            <p>${style.description}</p>
            <div style="margin-top: 10px; padding: 5px 15px; background: rgba(0,0,0,0.1); border-radius: 15px; display: inline-block;">
                ${style.genre}
            </div>
        `;

        card.addEventListener('click', () => selectStyle(style));
        grid.appendChild(card);
    });
}

// ===== GENERATOR INITIALIZATION =====
function initializeGenerator() {
    // Populate season select
    const seasonSelect = document.getElementById('generatorSeason');
    seasonIntros.forEach(intro => {
        const option = document.createElement('option');
        option.value = intro.id;
        option.textContent = intro.title;
        seasonSelect.appendChild(option);
    });

    // Populate style select
    const styleSelect = document.getElementById('generatorStyle');
    introStyles.forEach(style => {
        const option = document.createElement('option');
        option.value = style.id;
        option.textContent = style.name;
        styleSelect.appendChild(option);
    });

    // Speed slider
    const speedSlider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    speedSlider.addEventListener('input', (e) => {
        speedValue.textContent = e.target.value + 'x';
    });

    // Pitch slider
    const pitchSlider = document.getElementById('pitchSlider');
    const pitchValue = document.getElementById('pitchValue');
    pitchSlider.addEventListener('input', (e) => {
        pitchValue.textContent = e.target.value;
    });

    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateCustomIntro);
}

// ===== CUSTOM BUILDER =====
function initializeCustomBuilder() {
    const builder = document.getElementById('customLineBuilder');
    builder.innerHTML = `
        <div class="line-input">
            <label>Character/Person:</label>
            <input type="text" id="customCharacter" placeholder="e.g., Stan, Cartman, etc.">
        </div>
        <div class="line-input">
            <label>Custom Intro Line:</label>
            <textarea id="customLine" placeholder="Write your custom intro line here..."></textarea>
        </div>
        <div class="line-input">
            <label>Style/Theme:</label>
            <select id="customTheme">
                <option value="original">Original Style</option>
                <option value="parody">Parody</option>
                <option value="serious">Serious</option>
                <option value="funny">Funny</option>
                <option value="dark">Dark</option>
            </select>
        </div>
        <button class="btn-add" onclick="addCustomLine()">Add Custom Line</button>
    `;

    displaySavedCustoms();
}

function addCustomLine() {
    const character = document.getElementById('customCharacter').value;
    const line = document.getElementById('customLine').value;
    const theme = document.getElementById('customTheme').value;

    if (!character || !line) {
        alert('Please fill in both character and line!');
        return;
    }

    const custom = {
        id: Date.now(),
        character,
        line,
        theme,
        created: new Date().toLocaleString()
    };

    customIntros.push(custom);
    displaySavedCustoms();

    // Clear inputs
    document.getElementById('customCharacter').value = '';
    document.getElementById('customLine').value = '';

    alert('Custom line added successfully!');
}

function displaySavedCustoms() {
    const container = document.getElementById('savedCustoms');
    container.innerHTML = '<h3>Saved Custom Lines</h3>';

    if (customIntros.length === 0) {
        container.innerHTML += '<p style="color: #999;">No custom lines yet. Create one above!</p>';
        return;
    }

    customIntros.forEach(custom => {
        const item = document.createElement('div');
        item.style.cssText = 'background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border: 2px solid #ddd;';
        item.innerHTML = `
            <strong>${custom.character}</strong> <span style="color: #999;">(${custom.theme})</span><br>
            <em style="display: block; margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 5px;">
                "${custom.line}"
            </em>
            <small style="color: #999;">Created: ${custom.created}</small>
            <button onclick="deleteCustom(${custom.id})" style="float: right; background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        `;
        container.appendChild(item);
    });
}

function deleteCustom(id) {
    customIntros = customIntros.filter(c => c.id !== id);
    displaySavedCustoms();
}

// ===== SELECTION FUNCTIONS =====
function selectIntro(intro, cardElement) {
    // Remove previous selection
    document.querySelectorAll('.season-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Mark as selected
    cardElement.classList.add('selected');

    currentIntro = {
        type: 'season',
        data: intro
    };

    updateNowPlaying(intro.title);
    displayLyrics(intro.lyrics);
}

function selectVariation(variation) {
    currentIntro = {
        type: 'variation',
        data: variation
    };

    updateNowPlaying(variation.name);
    displayLyrics([`Playing: ${variation.description}`]);
}

function selectMashup(mashup) {
    currentIntro = {
        type: 'mashup',
        data: mashup
    };

    updateNowPlaying(mashup.name);
    displayLyrics([mashup.description, '', mashup.combination]);
}

function selectCrossover(crossover) {
    currentIntro = {
        type: 'crossover',
        data: crossover
    };

    updateNowPlaying(`Crossover: ${crossover.show}`);
    displayLyrics([crossover.line, '', crossover.description]);
}

function selectAU(au) {
    currentIntro = {
        type: 'au',
        data: au
    };

    updateNowPlaying(au.name);
    displayLyrics(au.lyrics);
}

function selectStyle(style) {
    currentIntro = {
        type: 'style',
        data: style
    };

    updateNowPlaying(`${style.name} Style`);
    displayLyrics([style.description, '', `Genre: ${style.genre}`]);
}

// ===== GENERATE CUSTOM INTRO =====
function generateCustomIntro() {
    const seasonId = parseInt(document.getElementById('generatorSeason').value);
    const styleId = document.getElementById('generatorStyle').value;
    const speed = parseFloat(document.getElementById('speedSlider').value);
    const pitch = parseInt(document.getElementById('pitchSlider').value);

    const effects = {
        reverb: document.getElementById('effectReverb').checked,
        echo: document.getElementById('effectEcho').checked,
        distortion: document.getElementById('effectDistortion').checked
    };

    const season = seasonIntros.find(s => s.id === seasonId);
    const style = introStyles.find(s => s.id === styleId);

    const output = document.getElementById('generatedOutput');
    output.innerHTML = `
        <h3>Generated Custom Intro</h3>
        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Base:</strong> ${season.title}</p>
            <p><strong>Style:</strong> ${style.name} (${style.genre})</p>
            <p><strong>Speed:</strong> ${speed}x</p>
            <p><strong>Pitch:</strong> ${pitch > 0 ? '+' : ''}${pitch} semitones</p>
            <p><strong>Effects:</strong> ${Object.entries(effects).filter(([k,v]) => v).map(([k]) => k).join(', ') || 'None'}</p>
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px; border: 2px solid #4CAF50;">
            <h4>Lyrics:</h4>
            ${season.lyrics.map(line => `<p class="lyric-line">${line}</p>`).join('')}
        </div>
        <button class="btn-generate" style="margin-top: 20px;" onclick="playGeneratedIntro()">
            Play This Custom Intro
        </button>
    `;

    currentIntro = {
        type: 'generated',
        data: { season, style, speed, pitch, effects }
    };
}

function playGeneratedIntro() {
    if (!currentIntro || currentIntro.type !== 'generated') return;

    const { season, style, speed, pitch, effects } = currentIntro.data;
    updateNowPlaying(`Custom: ${season.title} (${style.name})`);
    displayLyrics(season.lyrics);
    alert(`Playing custom intro:\n${season.title} in ${style.name} style\nSpeed: ${speed}x, Pitch: ${pitch}`);
}

// ===== PLAYBACK CONTROLS =====
function setupPlaybackControls() {
    document.getElementById('playBtn').addEventListener('click', playIntro);
    document.getElementById('pauseBtn').addEventListener('click', pauseIntro);
    document.getElementById('stopBtn').addEventListener('click', stopIntro);
    document.getElementById('downloadBtn').addEventListener('click', downloadIntro);
}

function playIntro() {
    if (!currentIntro) {
        alert('Please select an intro first!');
        return;
    }

    isPlaying = true;
    alert(`Now playing: ${document.getElementById('npTitle').textContent}\n\nNote: This is a demo. Full audio playback would require actual audio files.`);
}

function pauseIntro() {
    isPlaying = false;
    alert('Playback paused');
}

function stopIntro() {
    isPlaying = false;
    alert('Playback stopped');
}

function downloadIntro() {
    if (!currentIntro) {
        alert('Please select an intro first!');
        return;
    }

    const title = document.getElementById('npTitle').textContent;
    alert(`Download started: ${title}\n\nNote: This is a demo. Full download functionality would generate actual audio/video files.`);
}

// ===== DISPLAY FUNCTIONS =====
function updateNowPlaying(title) {
    document.getElementById('npTitle').textContent = title;
}

function displayLyrics(lyrics) {
    const display = document.getElementById('lyricsDisplay');
    display.innerHTML = '';

    if (Array.isArray(lyrics)) {
        lyrics.forEach((line, index) => {
            const lyricLine = document.createElement('div');
            lyricLine.className = 'lyric-line';
            lyricLine.textContent = line;
            display.appendChild(lyricLine);
        });
    } else {
        display.innerHTML = `<div class="lyric-line">${lyrics}</div>`;
    }
}

// Make functions globally available
window.addCustomLine = addCustomLine;
window.deleteCustom = deleteCustom;
window.playGeneratedIntro = playGeneratedIntro;

console.log('🎵 South Park Intro Maker Ready!');
console.log(`📊 Loaded: ${seasonIntros.length} seasons, ${variations.length} variations, ${mashups.length} mashups`);
console.log(`🎬 ${crossovers.length} crossovers, ${auIntros.length} AU intros, ${introStyles.length} styles`);
