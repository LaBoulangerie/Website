import { getPlayersSize, getTownsSize, getNationsSize } from "./apiRequests.js";
import { generateProfile } from "./misc.js";
import { profiles } from "./profiles.js";

const playersEl = document.getElementById("players");
const townsEl = document.getElementById("towns");
const nationsEl = document.getElementById("nations");

playersEl.textContent = await getPlayersSize();
townsEl.textContent = await getTownsSize();
nationsEl.textContent = await getNationsSize();

profiles.forEach(async (profil) => {
    document
        .getElementById(profil.role + "s")
        .appendChild(await generateProfile(profil.uuid));
});
