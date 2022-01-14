const baseUrl = "http://api.laboulangerie.net/"

const getPlayersSize = async () => {
    return (await (await fetch(baseUrl + "players")).json()).length;
};

const getTownsSize = async () => {
    return (await (await fetch(baseUrl + "towns")).json()).length;
};

const getNationsSize = async () => {
    return (await (await fetch(baseUrl + "nations")).json()).length;
};

export { getPlayersSize, getTownsSize, getNationsSize };
