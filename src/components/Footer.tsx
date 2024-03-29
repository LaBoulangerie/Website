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
        { name: "Discord", link: "https://laboulangerie.net/discord", icon: faDiscord },
        { name: "Twitter", link: "https://laboulangerie.net/twitter", icon: faTwitter },
        { name: "YouTube", link: "https://laboulangerie.net/youtube", icon: faYoutube },
        { name: "GitHub", link: "https://laboulangerie.net/github", icon: faGithub },
        { name: "TikTok", link: "https://laboulangerie.net/tiktok", icon: faTiktok },
        { name: "Wiki", link: "https://laboulangerie.net/wiki", icon: faBook },
    ];

    const mail = "contact@laboulangerie.net";

    return (
        <footer className="bg-gradient-to-br from-[#334079] to-purple-navy">
            <div className="p-6 md:px-[10vw] md:py-[5vh] relative font-poppins text-lavender-blue text-center opacity-50">
                <div className="max-w-[1200px] m-auto md:text-left flex flex-col md:flex-row place-content-evenly items-center">
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
                                <button
                                    key={i}
                                    onClick={() => (location.href = social.link)}
                                    aria-labelledby={`label-${social.name}-f`}
                                >
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        color={"#E4D9FF"}
                                        className="hover:text-yellow-orange hover:scale-125 transition-all ease-in-out text-3xl"
                                    />
                                    <span id={`label-${social.name}-f`} hidden>
                                        Lien vers {social.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-center text-xs">
                        NOT AN OFFICIAL MINECRAFT SERVER. NOT APPROVED BY OR ASSOCIATED WITH MOJANG
                        OR MICROSOFT
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
