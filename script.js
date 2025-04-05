// https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

const output = document.querySelector("output")
const en = document.querySelector("#english")
const de = document.querySelector("#deutsch")

async function randomize() {
    output.innerHTML = "Loading..."
    output.style.display = "block"
    try {
        const language = en.checked ? "en" : "de"
        const response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`)
        const fact = await response.json()
        output.innerHTML = fact.text
    } catch (error) {
        output.innerHTML = error
    }
}
