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
