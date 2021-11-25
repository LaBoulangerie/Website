const generateProfile = async (profile) => {
    const names = await (
        await fetch(
            `https://api.lblg.cc/mojang/user/profiles/${profile.uuid}/names`
        )
    ).json();

    const name = names[names.length - 1].name;

    const headBlob = await (
        await fetch(`https://visage.surgeplay.com/head/${profile.uuid}`)
    ).blob();

    const headURL = URL.createObjectURL(headBlob);
    const headImg = document.createElement("img");
    headImg.classList.add("head");
    headImg.src = headURL;

    const nameTitle = document.createElement("h2");
    nameTitle.textContent = name;

    const tag = document.createElement("p");
    tag.textContent = profile.role;
    tag.classList.add(profile.role);

    const profileDiv = document.createElement("div");
    profileDiv.appendChild(headImg);
    profileDiv.appendChild(nameTitle);
    profileDiv.appendChild(tag);

    return profileDiv;
};

export { generateProfile };
