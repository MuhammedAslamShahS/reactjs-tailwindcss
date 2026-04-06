import React from "react";
import Button from "../components/Button";

const About = () => {
    return (
        <div className="w-[100%] h-[45vh] bg-[#F5F5F5] px-[50px] flex">
            <div className="w-[50%] h-[100%] flex items-center">
                <h1 className="text-[2rem] font-semibold">
                    Lorem, ipsum. <br /> Lorem, ipsum. <br /> Lorem, ipsum.
                </h1>
            </div>

            <div className="w-[50%] h-[100%] flex flex-col justify-center">
              <p className="w-[70%] text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo architecto eligendi nulla veritatis quaerat impedit. Ex repellat iste accusantium iure, id omnis blanditiis unde?</p>
            <div className="mt-2"><Button className="mt-2 p-2 rounded-lg w-[160px] bg-black text-white">Get into Touch Now</Button></div>
            </div>
        </div>
    );
};

export default About;
