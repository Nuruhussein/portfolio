import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Nuru Hussen Abdu"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="I'm a Full-Stack Developer with a strong foundation in modern web technologies. My expertise lies in building scalable and efficient applications using JavaScript, React.js, Next.js, and Laravel. I enjoy working with both frontend and backend technologies to create seamless digital experiences." />

                        <AnimatedBody
                            delay={0.1}
                            text="I have a deep interest in crafting intuitive and responsive user interfaces, ensuring optimal performance and accessibility. My backend skills include working with databases like MySQL and MongoDB, and I constantly explore new tools to enhance development efficiency."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Technology is ever-evolving, and I thrive on learning and adapting to new trends. Whether it's experimenting with new frameworks or optimizing existing code, I believe in continuous improvement and innovation."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
