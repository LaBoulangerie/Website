import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TownBackground from "../assets/images/town-bg.svg";
function About() {
    const [icon, setIcon] = useState(faCopy);

    function copyAdress() {
        navigator.clipboard.writeText("mc.laboulangerie.net");
        setIcon(faCheck);
        setTimeout(() => setIcon(faCopy), 1000);
    }

    return (
        <div className="p-6 md:px-[10vw] md:py-[5vh] overflow-hidden relative font-poppins bg-gradient-to-b from-[#EFE9FF] to-lavender-blue">
            <div className="max-w-[1200px] m-auto">
                <h1 className="text-4xl md:text-6xl text-mango-tango font-bold text-center md:text-left drop-shadow-md mt-4 mb-8">
                    C'EST QUOI ?
                </h1>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="text-purple-navy text-lg leading-7 md:w-2/3 z-10">
                        <p className="mt-4">
                            <strong>La Boulangerie</strong> est un serveur{" "}
                            <strong>World Building Minecraft</strong> francophone à but non lucratif
                            géré par une équipe de passionnés. Découvrez notre nouveau monde :{" "}
                            <strong>Gaiartos</strong>, ses nations, ses villes et ses religions.
                        </p>
                        <p className="mt-4">
                            Faites votre place dans ce monde où <strong>tout est possible</strong>,
                            menez la vie d'un <strong>commerçant</strong> itinérant, d'un{" "}
                            <strong>empereur</strong> avide de conquête ou bien du{" "}
                            <strong>prêcheur</strong> d'une foi jusqu'ici inconnue et intéragissez
                            avec les membres de La Boulangerie !
                        </p>
                    </div>
                    <button
                        className="relative flex-shrink-0 z-[1] bg-gradient-to-br from-purple-navy to-mango-tango rounded-2xl py-4 px-10 m-auto before:z-[-1] before:blur-lg before:rounded-2xl before:bg-gradient-to-br before:from-purple-navy before:to-mango-tango before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 block hover:scale-110 active:scale-90 transition-all"
                        onClick={copyAdress}
                    >
                        <h1 className="text-4xl text-lavender-blue font-extrabold">JOUER !</h1>
                        <p className="text-[8px] text-lavender-blue font-bold">
                            <FontAwesomeIcon icon={icon} /> MC.LABOULANGERIE.NET [1.19]
                        </p>
                    </button>
                </div>
                <img
                    className="absolute left-0 right-0 bottom-5 m-auto scale-150 opacity-20 select-none"
                    draggable={false}
                    src={TownBackground}
                />
            </div>
        </div>
    );
}

export default About;
