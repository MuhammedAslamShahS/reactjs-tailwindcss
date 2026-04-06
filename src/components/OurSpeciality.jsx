import Button from "../components/Button";
import specialityText from "../API/OurSpeciality.json";

const OurSpeciality = () => {
    return (
        <div className="w-[100%] h-[100vh] bg-white flex">
            <div className="w-[50%] h-[100%] flex flex-col justify-center px-[50px]">
                <h1 className="text-[2rem]">
                    {specialityText[0].h1_Top} <br /> {specialityText[0].h1_Mid} <br /> {specialityText[0].h1_Bottom}
                </h1>

                <p className="text-[0.9 rem] text-gray-500 mt-2 w-[70%]">{specialityText[0].p1}</p>

                <Button className="w-[160px] text-center mt-2 border-[2px] border-[#c8c9cc] py-[7px] cursor-pointer rounded-sm">
                    Get To Touch Now
                </Button>
            </div>
            <div className="w-[50%] h-[100%] flex justify-center items-center">
                <img
                    className="w-[60%] h-[50%] rounded-lg"
                    src={specialityText[0].img_title}
                    alt={specialityText[0].img_title}
                />
            </div>
        </div>
    );
};

export default OurSpeciality;
