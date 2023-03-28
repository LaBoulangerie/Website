import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { components } from "../utils/api/api";
import fetcher from "../utils/api/fetcher";

function Staff() {
    const [staffList, setStaffList] = useState<components["schemas"]["TypedNameUuidModel"][]>([]);
    const [headUrls, setHeadUrls] = useState<{ [key: string]: string }>({});
    const tags = {
        owner: {
            name: "OWNER",
            colors: ["from-tag-owner-1", "to-tag-owner-2"],
        },
        mod: {
            name: "MODO",
            colors: ["from-tag-mod-1", "to-tag-mod-2"],
        },
        dev: {
            name: "DEV",
            colors: ["from-tag-dev-1", "to-tag-dev-2"],
        },
        builder: {
            name: "BUILDER",
            colors: ["from-tag-builder-1", "to-tag-builder-2"],
        },
        scenar: {
            name: "SCÉNAR",
            colors: ["from-tag-scenar-1", "to-tag-scenar-2"],
        },
        contributor: {
            name: "INTERVENANT",
            colors: ["from-tag-contributor-1", "to-tag-contributor-2"],
        },
    };

    async function getStaffList() {
        const request = fetcher.path("/staff").method("get").create();
        return (await request({})).data;
    }

    function setHeadUrl(uuid: string) {
        const imgURL = `https://visage.surgeplay.com/head/${uuid}.png`;

        fetch(imgURL)
            .then((response) => response.blob())
            .then((imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                headUrls[uuid] = imageObjectURL;
                setHeadUrls({ ...headUrls });
            });
    }

    useEffect(() => {
        getStaffList().then((staffList) => {
            for (const staff of staffList) {
                if (!staff.uuid) continue;
                setHeadUrl(staff.uuid);
            }

            setStaffList(staffList);
        });
    }, []);

    return (
        <section id="staff" className="bg-gradient-radial from-mango-tango to-[#FFA66C]">
            <div className="p-6 md:px-[10vw] md:py-[5vh] relative font-poppins bg-baguette bg-center bg-[length:50%] bg-no-repeat">
                <div className="max-w-[1200px] m-auto">
                    <h1 className="text-4xl md:text-6xl text-purple-navy font-bold text-center drop-shadow-md">
                        L'ÉQUIPE
                    </h1>
                    <div className="w-full flex flex-wrap my-4">
                        {staffList.map((staff) => (
                            <div
                                key={staff.uuid}
                                className="bg-purple-navy w-32 md:w-48 mx-auto my-4 p-4 text-center drop-shadow-lg rounded-xl flex flex-col items-center content-center"
                            >
                                <img
                                    src={headUrls[staff.uuid as keyof typeof headUrls]}
                                    alt={`Tête de ${staff.name}`}
                                />
                                <p className="font-bold text-lavender-blue">{staff.name}</p>
                                <div
                                    className={
                                        "px-2 py-1 w-24 md:w-32 rounded-full bg-gradient-to-r " +
                                        tags[staff.type as keyof typeof tags].colors.join(" ")
                                    }
                                >
                                    <p className="font-bold text-lavender-blue text-xs md:text-base">
                                        {tags[staff.type as keyof typeof tags].name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="text-purple-navy font-bold bg-gold-crayola py-1 px-2 rounded-lg drop-shadow-md block mx-auto hover:scale-110 active:scale-90 transition-all"
                        onClick={() => (location.href = "https://laboulangerie.net/apply")}
                    >
                        <FontAwesomeIcon icon={faHandshake} /> On recrute
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Staff;
