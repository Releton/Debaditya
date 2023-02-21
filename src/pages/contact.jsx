import React from "react";
import Navbar from "../components/navbar";

const Contact = () => {
    return (
        <div>

            <Navbar />
            <p className="text-text text-[8vmin] mx-[25%] mt-10">Contact me</p>
            <form method="post" className="flex flex-col md:w-[50%] md:mx-[25%] md:my-[3%]  mt-10 border-2 border-primary p-5 rounded-lg text-primary gap-5" action="mailto:rinkurick1a@gmail.com" encType="text/plain">
                <label className="block">Subject</label>
                <input className="block bg-secondaryDark text-text rounded-lg p-3" type="text" name="subject"></input>
                <label className="block">Body</label>
                <input className="block bg-secondaryDark text-text rounded-lg p-3" type="text" name="body"></input>
                <button className="block w-[25%] mx-auto rounded-lg hover:bg-primary hover:text-text transition-all  p-3 bg-secondaryDark" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact