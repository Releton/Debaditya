import React, { useState } from "react";
import Card from "./sub/Card";
import DebImg from '../assets/Debaditya.png'
import Stats from "./stats";
import { statsProgramming } from "../data/icon";
import Capability from "./sub/capability";
import PortfolioImg from "../assets/portfolio.png"
import ClimaImg from '../assets/clima.png'
import PiImg from '../assets/pi.png'
import Footer from "./footer";

function getAge() {
    return 2009 - new Date().getFullYear()
}
export default function Main() {
    const [intro, setIntro] = useState("Web Developer")
    const selection = ["Web Developer", "Programmer", "Editor", "Youtuber"]
    function getIntro() {
        let i = 0

        function timer() {
            if (i >= selection.length) {
                i = 0;
            }
            setIntro(selection[i++])
        }
        timer()
        setInterval(timer, 3000)
    }


    return (
        <div onLoad={() => getIntro()}>
            <p className="text-[10vmin] text-center mt-3 overflow-hidden  bg-dark"><span className="text-text">I'm a </span><span className="text-primary changing inline-block relative" >{intro}</span></p>
            <div className="px-5 xl:grid xl:grid-cols-3 py-8 xl:gap-5">
                <Card src={DebImg} name="Debaditya" role="Student" institute="St. Joan's School" age={getAge()} />
                <Stats span="col-span-2" items={statsProgramming} />
            </div>

            <div className="text-center text-primary px-5 py-8  ">
                <p className="text-[10vmin] mb-5">What can I do? 🤔</p>
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-3">

                    <Capability heading="Frontend" size=" h-[40vmin] " content="I know technologies like html, css, javascript very well and I have some experience with react too. I am on my way mastering react, in fact this portfolio that you are viewing is also made by me using react!" text="Portfolio --->" src={PortfolioImg} href="#" />
                    <Capability heading="Backend" size=" h-[40vmin] " content="I have learnt technologies like node js and use express to create the backend.I can use mongoDB and I mongoose along with EJS and create cool web apps for you. I can create RESTful api's for you" src={ClimaImg} text="Clima --->" href="https://github.com/Releton/Clima-Weather-App" />
                    <Capability heading="Scripts" size=" h-[40vmin] " content="I can write scripts in Java, Python and Javascript for you. I have almost 3 years of experience now writing scripts, the best script I have ever written is Pi for our school's computer exhibition" src={PiImg} href="https://assistant-pi.blogspot.com" text="Pi --->" />
                </div>
            </div>
            <div className="text-primary flex justify-center w-[100%]">

                <Footer />

            </div>
        </div>
    )
}

// xl:flex justify-between xl:gap-10