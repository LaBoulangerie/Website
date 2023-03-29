import {
    faDiscord,
    faGithub,
    faTiktok,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Baguette from "../assets/images/baguette.webp";
import Title from "../assets/images/title.webp";

function Header() {
    const socials = [
        { name: "Discord", link: "https://laboulangerie.net/discord", icon: faDiscord },
        { name: "Twitter", link: "https://laboulangerie.net/twitter", icon: faTwitter },
        { name: "YouTube", link: "https://laboulangerie.net/youtube", icon: faYoutube },
        { name: "GitHub", link: "https://laboulangerie.net/github", icon: faGithub },
        { name: "TikTok", link: "https://laboulangerie.net/tiktok", icon: faTiktok },
        { name: "Wiki", link: "https://laboulangerie.net/wiki", icon: faBook },
    ];

    return (
        <header id="home" className="bg-header bg-[70%_50%] bg-cover h-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <img className="w-48 p-8 md:w-96" src={Baguette} alt="La bonne baguette" />
                <img className="w-64 p-1 md:w-[32rem]" src={Title} alt="Logo La Boulangerie" />
                <h1 className="font-miner text-lavender-blue text-center tracking-widest p-2 md:text-xl">
                    UNE NOUVELLE AVENTURE
                </h1>
                <div className="absolute flex gap-4 md:gap-8 bottom-4 md:bottom-8 fill-lavender-blue">
                    {socials.map((social, i) => (
                        <button
                            key={i}
                            onClick={() => (location.href = social.link)}
                            aria-labelledby={`label-${social.name}-h`}
                        >
                            <FontAwesomeIcon
                                icon={social.icon}
                                color={"#E4D9FF"}
                                className="hover:text-yellow-orange hover:scale-125 transition-all ease-in-out text-3xl md:text-5xl"
                            />
                            <span id={`label-${social.name}-h`} hidden>
                                Lien vers {social.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
