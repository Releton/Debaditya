import React, { useState } from 'react'
import Navbar from '../components/navbar'
import PiImg from '../assets/pi.png'
import ShowCase from '../components/sub/showcase'
import ClimaImg from '../assets/clima.png'

function Project() {
    return (

        <div>

            <Navbar />

            <div className='grid grid-cols-1 sm:grid-cols-2 sm:min-h-[30vh] xl:grid-cols-3 mt-5 p-5 gap-5'>
                <ShowCase title="Pi, A virtual assistant developed using python" img={PiImg} heading="Pi" description="Pi is a virtual assistant developed using python which interacts with you by voice. It can automate things for you and enteratain you" href="https://assistant-pi.blogspot.com" btntext="Pi" />
                <ShowCase title="Clima, a fully functional weather app with express js" img={ClimaImg} heading="Clima" description="Clima a weather app that can detect your exact location using coordinates and tell the local weather, This app has a sleek design. Search for a location and get the weather details" href="https://github.com/Releton/Clima-Weather-App" btntext="Clima" />
            </div>
        </div>
    )

}

export default Project