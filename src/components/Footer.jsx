import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";

export default function Footer() {
    const { theme } = useThemeContext();
    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
            <img className="absolute max-w-4xl w-full h-auto -mt-30 max-md:px-4 right-0 md:right-16 lg:right-24 xl:right-32 top-0 pointer-events-none" src={theme === "dark" ? "Landing-react/assets/landing-text-dark.svg" : "Landing-react/assets/landing-text-light.svg"} alt="landing" width={930} height={340} priority fetchPriority="high" />
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <a href="#!">
                        <img className="h-9 md:h-9.5 w-auto shrink-0" src={theme === "dark" ? "Landing-react/assets/spot.png" : "Landing-react/assets/spotnet.png"} alt="Logo" width={140} height={40} priority fetchPriority="high" />
                    </a>
                    <p className="mt-6">
                     At Spotnet Technologies, we don’t just develop products , We create solutions that empower our clients to stay ahead in a constantly evolving digital landscape.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5">Company Links</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-purple-600 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <a href="tel:0763316839"><p>+256 763316839</p></a>
                            <a href="tel:0743946261"><p>+256 743946261</p></a>
                            <a href="mailto:info@spotnet.com"><p>info@spotnet.com</p></a>
                            <p>Kitende-Entebbe Road</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright 2026 © <a href="https://prebuiltui.com?utm_source=landing" target="_blank"></a> All Right Reserved-<a href="https://themewagon.com" target="_blank">Spotnet Technologies</a>
            </p>
        </footer>
    );
};  