import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { components } from "../utils/api/api";
import fetcher from "../utils/api/fetcher";

function Donors() {
    const [donorList, setDonorList] = useState<components["schemas"]["TypedNameUuidModel"][]>([]);
    const [faceUrls, setFaceUrls] = useState<{ [key: string]: string }>({});

    async function getDonorList() {
        const request = fetcher.path("/donors").method("get").create();
        return (await request({})).data;
    }

    function setFaceUrl(uuid: string) {
        const imgURL = `https://visage.surgeplay.com/face/${uuid}.png`;

        fetch(imgURL)
            .then((response) => response.blob())
            .then((imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                faceUrls[uuid] = imageObjectURL;
                setFaceUrls({ ...faceUrls });
            });
    }

    useEffect(() => {
        getDonorList().then((donorList) => {
            for (const donor of donorList) {
                if (!donor.uuid) continue;
                setFaceUrl(donor.uuid);
            }

            const donorListSortedByAmount = donorList.sort((a, b) =>
                a.type && b.type ? parseFloat(b.type) - parseFloat(a.type) : 0
            );

            setDonorList(donorListSortedByAmount);
        });
    }, []);

    return (
        <section
            id="donate"
            className="font-poppins bg-gradient-to-br from-lavender-blue to-[#9CAAE8]"
        >
            <div className="p-6 md:px-[10vw] md:py-[5vh] relative font-poppins bg-heart bg-center bg-cover md:bg-[110%_10%] md:bg-[length:60%] bg-no-repeat">
                <div className="max-w-[1200px] m-auto">
                    <h1 className="text-4xl md:text-6xl text-mango-tango font-bold text-center md:text-left drop-shadow-md mt-4 mb-8">
                        FAIRE UN DON
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="text-purple-navy text-lg leading-7 md:w-1/2 z-10">
                            <p className="mt-4">
                                <strong>La Boulangerie</strong> est un projet à but{" "}
                                <strong>non lucratif</strong>. C'est pour ça que grâce aux{" "}
                                <strong>donateurs</strong>, nous pouvons utiliser des
                                infrastructures qui répondent aux besoins du projet.
                            </p>
                            <p className="mt-4">
                                Toute donation est <strong>grandement appréciée</strong> et sera
                                utilisée pour et seulement pour le projet La Boulangerie.
                            </p>
                            <button
                                className="text-purple-navy font-bold bg-gold-crayola py-1 px-2 rounded-lg drop-shadow-md block mt-8 hover:scale-110 active:scale-90 transition-all"
                                onClick={() => (location.href = "https://laboulangerie.net/donate")}
                            >
                                <FontAwesomeIcon icon={faHeart} /> Faire un don
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-purple-navy font-bold text-center text-xl">
                                MERCI À EUX !
                            </h1>
                            <div className="flex flex-wrap place-content-evenly">
                                {donorList.map((donor) => (
                                    <div
                                        key={donor.uuid}
                                        className="w-24 p-2 flex flex-col items-center content-center"
                                    >
                                        <img
                                            className="hover:scale-110 transition-all peer"
                                            src={faceUrls[donor.uuid as keyof typeof faceUrls]}
                                            alt={`Tête de ${donor.name}`}
                                        />
                                        <p className="text-center peer-hover:hidden text-purple-navy">
                                            {donor.type}€
                                        </p>
                                        <p className="text-center hidden peer-hover:block text-purple-navy">
                                            {donor.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Donors;
