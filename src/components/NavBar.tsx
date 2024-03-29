import F1 from "../assets/images/gif/1.webp";
import F2 from "../assets/images/gif/2.webp";
import F3 from "../assets/images/gif/3.webp";
import F4 from "../assets/images/gif/4.webp";
import F5 from "../assets/images/gif/5.webp";
import F6 from "../assets/images/gif/6.webp";
import F7 from "../assets/images/gif/7.webp";
import F8 from "../assets/images/gif/8.webp";
import F9 from "../assets/images/gif/9.webp";
import F10 from "../assets/images/gif/10.webp";
import F11 from "../assets/images/gif/11.webp";
import F12 from "../assets/images/gif/12.webp";
import { useEffect, useState } from "react";

function NavBar() {
    const frames = [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12];
    const [yJump, setYJump] = useState<number>(0);
    const [step, setStep] = useState<number>(0);
    const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(frames.length - 1);

    function nextFrame() {
        setCurrentFrameIndex((currentFrameIndex) =>
            currentFrameIndex == frames.length - 1 ? 0 : currentFrameIndex + 1
        );
    }

    function previousFrame() {
        setCurrentFrameIndex((currentFrameIndex) =>
            currentFrameIndex == 0 ? frames.length - 1 : currentFrameIndex - 1
        );
    }

    function handleScroll() {
        const speed = 100;
        setYJump(window.scrollY);

        if (yJump >= speed * (step + 1)) {
            setStep((step) => step + 1);
            nextFrame();
        }
        if (yJump < speed * step) {
            setStep((step) => step - 1);
            previousFrame();
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [yJump, currentFrameIndex]);

    return (
        <nav className="sticky top-0 p-1 z-50 bg-gradient-to-l from-[#303A6A] to-purple-navy">
            <div className="max-w-[1200px] m-auto">
                <div className="flex items-center content-center">
                    <a href="#home">
                        {frames.map((frame, i) => (
                            <img
                                key={i}
                                className="w-12"
                                src={frame}
                                alt="La bonne baguette"
                                hidden={i != currentFrameIndex}
                                width={46}
                                height={46}
                            />
                        ))}
                    </a>
                    <ul className="text-lavender-blue tracking-widest font-miner flex items-center content-center place-content-evenly w-full">
                        <li className="hover:opacity-70 transition-all">
                            <a href="#play">JOUER</a>
                        </li>
                        <li className="hover:opacity-70 transition-all">
                            <a href="#map">MAP</a>
                        </li>
                        <li className="hover:opacity-70 transition-all">
                            <a href="#staff">STAFF</a>
                        </li>
                        <li className="hover:opacity-70 transition-all">
                            <a href="#donate">DON</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
