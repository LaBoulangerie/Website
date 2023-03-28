import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GaiartosMap from "../assets/images/gaiartos-map.png";

function Map() {
    function toTheMapYouGo() {
        location.href = "https://laboulangerie.net/map";
    }

    return (
        <div className="bg-gradient-to-br from-[#5668BC] to-purple-navy">
            <div className="p-6 md:px-[10vw] md:py-[5vh] relative font-poppins bg-map bg-cover">
                <div className="max-w-[1200px] m-auto">
                    <div className="flex flex-col md:flex-row-reverse md:items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl text-lavender-blue font-bold text-center md:text-right drop-shadow-md mt-4 mb-8">
                                LA MAP
                            </h1>
                            <div className="text-lavender-blue text-lg leading-7 md:text-right">
                                <p>
                                    Partez à l'aventure sur <strong>Gaiartos</strong>, une sublime
                                    map créée de A à Z, constituée de <strong>5 continents</strong>{" "}
                                    : Nettai, Riquez, Damield, Munakh et Brulfroi. Aventurez-vous
                                    dans les <strong>mystérieux</strong> vestiges et découvrez son{" "}
                                    <strong>lore</strong> !
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="relative before:bg-[length:100%_100%] before:h-full before:w-full before:blur-lg before:bg-gaiartos-map before:absolute before:inline-block">
                                <img
                                    className="drop-shadow-md"
                                    src={GaiartosMap}
                                    alt="Carte de Gaiartos"
                                />
                            </div>
                            <button
                                className="text-purple-navy font-bold bg-gold-crayola py-1 px-2 rounded-lg drop-shadow-md block mx-auto mt-[-16px] mb-4 hover:scale-110 active:scale-90 transition-all"
                                onClick={toTheMapYouGo}
                            >
                                <FontAwesomeIcon icon={faCompass} /> Map dynamique
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
