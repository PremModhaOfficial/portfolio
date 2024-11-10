import { MutableRefObject, useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const skills = [
    {
        name: "React",
        description: "6 months and more than 3 successful projects",
        link: "https://github.com/PremModhaOfficial",
        level: "intermediate"
    },
    {
        name: "Rust",
        description: "Intermediate in Rust",
        link: "https://github.com/PremModhaOfficial/codecrafters-interpreter-rust",
        level: "intermediate"
    },
    {
        name: "Bash Scripting",
        description: "Automates my workflow in Linux",
        link: "https://github.com/PremModhaOfficial/codecrafters-interpreter-rust",
        level: "intermediate"
    },
    {
        name: "TypeScript",
        description: "Two of my significant React projects are in TypeScript",
        link: "https://github.com/PremModhaOfficial",
        level: "intermediate"
    },
    {
        name: "Linux",
        description: "Using it for two years and still enjoying it",
        link: "https://github.com/PremModhaOfficial/dotfiles",
        level: "advanced"
    },
    {
        name: "Git",
        description: "Using it for 1.5 years",
        link: "https://github.com/PremModhaOfficial",
        level: "advanced"
    },
    {
        name: "Vim/Neovim",
        description: "Helps me code quickly and efficiently for free, even on Linux servers",
        link: "https://github.com/PremModhaOfficial/dotfiles/tree/master/nvim/.config/nvim",
        level: "advanced"
    }
]

const Services = () => {
    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Empowering your software development
                    <br /> with innovative solutions
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b> Solutions
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Software Company.
                    </h1>
                    <button >
                        <a href="#skills">
                            SEE MY SKILLS
                        </a>
                    </button>
                </div>
            </motion.div >
            <motion.div className="listContainer" variants={variants}>
                {
                    skills.map((skill) => {

                        return (
                            <div key={skill.name}>
                                <motion.div
                                    id={skill.name}
                                    className="box"
                                    whileHover={skill.level === "advanced" ? {
                                        color: "black", background: "lightgray", scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)", rotate: 2
                                    } : { background: "lightgray", color: "black" }} >
                                    {skill.level === "advanced" && (
                                        <motion.span
                                            className="advanced-label"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            Advanced
                                        </motion.span>
                                    )}
                                    <h2>{skill.name}</h2>
                                    <p>
                                        {skill.description}
                                    </p>
                                    <button >
                                        <a href={skill.link} style={{ color: "black" }}> see how  </a>
                                    </button>
                                </motion.div>
                            </div>
                        )
                    })
                }

                { /*
                
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div>https://github.com/PremModhaOfficial/codecrafters-interpreter-rust
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <button>Go</button>
                </motion.div> */}
            </motion.div>
        </motion.div >
    );
};

export default Services;
