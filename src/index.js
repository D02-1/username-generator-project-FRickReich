const fs = require('fs'); // FileSystem, zum lesen des dateisystems
const path = require('path'); // Path, zum arbeiten mit dateipfaden

// Benutzernamen Generator
// Beispiel für Benutzer: ShinySunflower55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567

// Was benötigen wir?
// - Eine Funktion um die werte aus der JSON datei zu lesen
/**
 * @function getWords
 * @description Reads words from json file.
 * @returns { object }
 */
function getWords()
{
    // Wir lesen eine json datei, die worte enhält, die wir nutzen wollen
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    // Wir geben die worte zurück
    return json;
}

// - Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren
/**
 * @function createRandomNumber
 * @description Creates a random number according to a minimal and maximal value
 * @param { number } minNumber 
 * @param { number } maxNumber 
 * @returns { number }
 */
function createRandomNumber(minNumber, maxNumber)
{
    // Wir erschaffen eine zufallszahl aus einer minimalen und einer maximalen zahl
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    // random = 0.5 * 50000 - 10000 = 15000 + 10000 = 25000

    // Wir geben die zufällige nummer zurück
    return num;
}

// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
// - Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen
// - Einen export, um die Applikation in einer anderen datei zu nutzen
