import {
    faDiscord,
    faGithub,
    faTiktok,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    const links = [
        { name: "Règlement", url: "https://laboulangerie.net/rules" },
        { name: "Règlement des conflits", url: "https://laboulangerie.net/conflits" },
        { name: "Recrutement", url: "https://laboulangerie.net/apply" },
        { name: "Faire un don", url: "https://laboulangerie.net/donate" },
    ];

    const socials = [
        { link: "https://laboulangerie.net/discord", icon: faDiscord },
        { link: "https://laboulangerie.net/twitter", icon: faTwitter },
        { link: "https://laboulangerie.net/youtube", icon: faYoutube },
        { link: "https://laboulangerie.net/github", icon: faGithub },
        { link: "https://laboulangerie.net/tiktok", icon: faTiktok },
        { link: "https://laboulangerie.net/wiki", icon: faBook },
    ];

    const mail = "contact@laboulangerie.net";

    return (
        <div className="bg-gradient-to-br from-[#334079] to-purple-navy">
            <div className="p-6 md:px-[10vw] md:py-[5vh] relative font-poppins">
                <div className="max-w-[1200px] m-auto opacity-50 text-lavender-blue text-center md:text-left flex flex-col md:flex-row place-content-evenly items-center">
                    <div className="bg-baguette bg-center bg-[length:40%] bg-no-repeat">
                        <h1 className="font-alagard">La Boulangerie</h1>
                        <div className="my-2">
                            <p className="font-bold">
                                {new Date().getFullYear()} Association La Boulangerie
                            </p>
                            <p>Made with 🧡</p>
                            <p>
                                Hosted by{" "}
                                <a
                                    href="https://clients.librahost.fr/aff.php?aff=42"
                                    className="underline"
                                >
                                    LibraHost
                                </a>{" "}
                                💜
                            </p>
                        </div>
                    </div>

                    <ul className="my-2">
                        {links.map((link) => (
                            <li key={link.url}>
                                <a href={link.url} className="underline">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <div className="my-2 md:text-center">
                            <a href={`mailto:${mail}`}>
                                <FontAwesomeIcon icon={faEnvelope} /> {mail}
                            </a>
                        </div>

                        <div className="flex gap-4 place-content-evenly bottom-0">
                            {socials.map((social, i) => (
                                <a key={i} href={social.link}>
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        color={"#E4D9FF"}
                                        className="hover:text-yellow-orange hover:scale-125 transition-all ease-in-out text-3xl"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
