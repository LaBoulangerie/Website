import { getPlayersSize, getTownsSize, getNationsSize } from "./apiRequests";

const playersEl = document.getElementById("players");
const townsEl = document.getElementById("towns");
const nationsEl = document.getElementById("nations");

playersEl.textContent = await getPlayersSize();
townsEl.textContent = await getTownsSize();
nationsEl.textContent = await getNationsSize();
