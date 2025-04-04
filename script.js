const dictionary = {
    "mahal": {
        partOfSpeech: "pang-uri/pangngalan",
        definitions: [
            "Ibig sabihin ay mamahalin o gustong-gusto ang isang tao o bagay",
            "May mataas na presyo o halaga"
        ],
        examples: [
            "Mahal ko ang aking pamilya.",
            "Ang mga alahas ay mahal."
        ]
    },
    "bayan": {
        partOfSpeech: "pangngalan",
        definitions: [
            "Isang lugar o teritoryo na may sariling pamahalaan at mga mamamayan",
            "Ang mga tao sa isang bansa o komunidad"
        ],
        examples: [
            "Ang Pilipinas ay aking bayan.",
            "Ang bayan ay nagtulungan upang malutas ang problema."
        ]
    },
    "kilig": {
        partOfSpeech: "pangngalan/pandiwa",
        definitions: [
            "Ang pakiramdam ng pagkagulat o kasiyahan dahil sa romantikong sitwasyon",
            "Ang pagyanig o panginginig dahil sa kagalakan o pag-ibig"
        ],
        examples: [
            "Naramdaman ko ang kilig nang bigyan niya ako ng bulaklak.",
            "Kinikilig ako kapag nakikita ko silang magkasama."
        ]
    },
    "pag-ibig": {
        partOfSpeech: "pangngalan",
        definitions: [
            "Malalim na damdamin ng pagmamahal at pag-aalala sa isang tao",
            "Ang emosyon na nag-uugnay sa mga tao"
        ],
        examples: [
            "Ang pag-ibig ay walang pinipiling edad o kasarian.",
            "Ipinagdiriwang natin ang Araw ng mga Puso bilang pagkilala sa pag-ibig."
        ]
    },
    "bayanihan": {
        partOfSpeech: "pangngalan",
        definitions: [
            "Ang tradisyonal na paraan ng pagtutulungan ng mga mamamayan sa isang komunidad",
            "Espiritu ng pagkakaisa at kooperasyon"
        ],
        examples: [
            "Nakita natin ang bayanihan noong panahon ng bagyo.",
            "Ang bayanihan ay isang magandang katangian ng mga Pilipino."
        ]
    },
    "salamat": {
        partOfSpeech: "pangngalan/pandiwa",
        definitions: [
            "Pagpapahayag ng pagkilala at pag-appreciate sa kabutihan o tulong na natanggap",
            "Ang pakiramdam ng gratitude"
        ],
        examples: [
            "Maraming salamat sa iyong tulong.",
            "Nagpapasalamat ako sa aking pamilya sa kanilang suporta."
        ]
    },
    "mabuhay": {
        partOfSpeech: "pandiwa/pandamdam",
        definitions: [
            "Ang pag-iral o pagiging buhay",
            "Isang pagbati o pahayag ng pagkilala"
        ],
        examples: [
            "Mabuhay ang mga frontliners!",
            "Nais kong mabuhay nang masaya at malusog."
        ]
    }
};


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const wordDisplay = document.getElementById('word-display');
const exampleWords = document.querySelectorAll('.example-word');
const wordTags = document.querySelectorAll('.word-tag');


function displayWord(word) {
    const entry = dictionary[word.toLowerCase()];
    
    if (entry) {
        wordDisplay.innerHTML = `
            <div class="word-entry">
                <h2>${word.charAt(0).toUpperCase() + word.slice(1)}</h2>
                <p class="part-of-speech">${entry.partOfSpeech}</p>
                
                <div class="definitions">
                    <h3>Mga Kahulugan:</h3>
                    <ol>
                        ${entry.definitions.map(def => `<li>${def}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="examples">
                    <h3>Mga Halimbawa:</h3>
                    ${entry.examples.map(ex => `<div class="example">"${ex}"</div>`).join('')}
                </div>
            </div>
        `;
    } else {
        wordDisplay.innerHTML = `
            <div class="not-found">
                <h2>Hindi mahanap ang salitang "${word}"</h2>
                <p>Paumanhin, ang salitang ito ay wala sa aming diksyunaryo. Subukan ang ibang salita.</p>
            </div>
        `;
    }
}


function searchWord() {
    const word = searchInput.value.trim();
    if (word) {
        displayWord(word);
    }
}


searchBtn.addEventListener('click', searchWord);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWord();
    }
});

exampleWords.forEach(item => {
    item.addEventListener('click', () => {
        const word = item.getAttribute('data-word');
        searchInput.value = word;
        displayWord(word);
    });
});

wordTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const word = tag.getAttribute('data-word');
        searchInput.value = word;
        displayWord(word);
    });
});

alert("WARNING!")
alert("YOU ARE BEING WATCHED")
alert("I CAN SEE YOU")
alert("MISS KO NA SHA MA'AM")
alert("T_T")
alert("SANA AKO NALANG")