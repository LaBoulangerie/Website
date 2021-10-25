const generateProfile = async (uuid) => {
    const names = await (
        await fetch(`https://api.mojang.com/user/profiles/${uuid}/names`)
    ).json();

    const name = names[names.length - 1].name;

    const headBlob = await (
        await fetch(`https://visage.surgeplay.com/head/${uuid}`)
    ).blob();

    const headURL = URL.createObjectURL(headBlob);
    const headImg = document.createElement("img");
    headImg.src = headURL;

    const nameTitle = document.createElement("h2");
    nameTitle.textContent = name;

    const profileDiv = document.createElement("div");
    profileDiv.appendChild(headImg);
    profileDiv.appendChild(nameTitle);

    return profileDiv;
};

const copyAddress = () => {
    const adressEl = document.getElementById("adress");
    navigator.clipboard.readText().then((clipText) => alert(clipText));
};

export { generateProfile, copyAddress };
