import { MutableRefObject, useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type itemType = {
    id: number;
    title: string;
    img: string;
    desc: string;
    link?: string
}
const items: itemType[] = [
    {
        id: 1,
        title: "Skill-Fusion",
        img: "https://images.pexels.com/photos/8199133/pexels-photo-8199133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Coursa and Udemy Clone using React and Django-rest-framework",
        link: "https://skillfusion.aajkaa.in/"
    },
    {
        id: 2,
        title: "3D animated Turing Machine FrontEnd",
        img: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Make Turing-machine configurations and see it animate as it calculates the validity of your CFL made using react3fiber",
        link: "https://github.com/PremModhaOfficial/turingReact3fiber"
    },
    {
        id: 3,
        title: "Turing Machine Backend",
        img: "https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Make Turing-machine configurations and see it animate as it calculates the validity of your CFL made using Django-rest-framwork and Python",
        link: "https://github.com/PremModhaOfficial/turingFlaskBakend"
    },
    {
        id: 4,
        title: "Vertical Jumper",
        img: "https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "made mario like game in pure javascript and pinch of html and css",
        link: "https://premmodhaofficial.github.io/vertical_jumper-master/index.html"
    },
    {
        id: 5,
        title: "Ludo cli",
        img: "https://images.pexels.com/photos/11646952/pexels-photo-11646952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Made cli that lets you play ludo with upto 4 bots! (all of the 4 bots can simulate a game in fraction of the second), used pure java and some functional programming concepts using anonyms classes ",
        link: "https://premmodhaofficial.github.io/vertical_jumper-master/index.html"
    },
];

const Single = ({ item }: { item: itemType }) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>
                            <a href={item.link}> See Demo </a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Highlight</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
