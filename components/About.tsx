import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Java Developer"
                        icon="icons/design.svg"
                        description="I create design  products with unique ideas."
                        projects={7} />
                    <AboutCard
                        title="C# Developer"
                        icon="icons/code.svg"
                        description="I develop Front-End with coding super smooth."
                        projects={10} />
                    <AboutCard
                        title="Web Development"
                        icon="icons/phone.svg"
                        description="I develop cross-platform mobile applications."
                        projects={7} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Mahesh Admane</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="images/partners/gvg.png" height={45} width={180} alt="wallety" />
                
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}