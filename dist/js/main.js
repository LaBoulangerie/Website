import { getPlayersSize, getTownsSize, getNationsSize } from "./apiRequests.js";
import { generateProfile } from "./misc.js";
import { profiles } from "./profiles.js";

const playersEl = document.getElementById("players");
const townsEl = document.getElementById("towns");
const nationsEl = document.getElementById("nations");

playersEl.textContent = await getPlayersSize();
townsEl.textContent = await getTownsSize();
nationsEl.textContent = await getNationsSize();

for (const profil of profiles) {
    document
        .getElementById(profil.group)
        .appendChild(await generateProfile(profil));
}

const copyAddress = async () => {
    const adressEl = document.getElementById("adress");
    const address = adressEl.textContent;

    adressEl.textContent = "adresse copiée !";
    setTimeout(() => (adressEl.textContent = address), 2000);

    await navigator.clipboard.writeText(address);
};

const buttonEl = document.getElementById("copyButton");
buttonEl.addEventListener("click", copyAddress);
