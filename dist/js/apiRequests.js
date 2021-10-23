const getPlayersSize = async () => {
    return (await (await fetch("http://api.lblg.cc/players")).json()).length;
};

const getTownsSize = async () => {
    return (await (await fetch("http://api.lblg.cc/towns")).json()).length;
};

const getNationsSize = async () => {
    return (await (await fetch("http://api.lblg.cc/nations")).json()).length;
};

export { getPlayersSize, getTownsSize, getNationsSize };
