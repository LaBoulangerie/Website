const getPlayersSize = async () => {
    return (await fetch("http://api.lblg.cc/players")).length;
};

const getTownsSize = async () => {
    return (await fetch("http://api.lblg.cc/towns")).length;
};

const getNationsSize = async () => {
    return (await fetch("http://api.lblg.cc/nations")).length;
};

export { getPlayersSize, getTownsSize, getNationsSize };
