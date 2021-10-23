import { getPlayersSize, getTownsSize, getNationsSize } from "./apiRequests.js";
import { generateProfile } from "./misc.js";
import { donors } from "./profiles.js";

const playersEl = document.getElementById("players");
const townsEl = document.getElementById("towns");
const nationsEl = document.getElementById("nations");

playersEl.textContent = await getPlayersSize();
townsEl.textContent = await getTownsSize();
nationsEl.textContent = await getNationsSize();

const donorsEl = document.getElementById("donors");

donors.forEach(async (donor) => {
    donorsEl.appendChild(await generateProfile(donor.uuid));
});
