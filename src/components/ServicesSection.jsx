import serviceData from "../API/ServiceData.json";
import ServicesCard from "../components/ServicesCard";
import pageText from "../API/servicesPageText.json";

const services = ["Branding", "Website", "Digital Marketing", "App"];

const ServicesSection = () => {
    return (
        <>
            <div className="w-[100%] h-[12vh] bg-black text-white flex justify-evenly items-center">
                {services.map((item, index) => (
                    <h1 key={index} className="text-[1.8rem] font-medium">
                        {item}
                    </h1>
                ))}
            </div>

            <div className="w-[100%] h-[90vh] flex px-[50px]">
                <div className="w-[40%] h-[100%] flex flex-col justify-center">
                    <h1 className="font-semibold text-[2.2rem]">
                        Passionate <br /> creators, Innovators, <br /> And Visionaries
                    </h1>

                    <p className="text-[0.8rem] mt-2 w-[70%]">{pageText[0].p1}</p>
                </div>

                <div className="w-[60%] h-[100%] flex justify-center items-center flex-wrap gap-2">
                    {/* Card component section start */}

                    {serviceData.map((service, index) => (
                        <ServicesCard key={index} {...service} />
                    ))}
                    {/* Card component section end */}
                </div>
            </div>
        </>
    );
};

export default ServicesSection;
