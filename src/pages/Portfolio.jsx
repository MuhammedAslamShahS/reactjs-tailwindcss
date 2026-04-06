import Portfolio_Data from "../API/Portfolio.json";
import Button from "../components/Button";

const Portfolio = () => {
    const data = Portfolio_Data[0];

    const images = [data.img_title1, data.img_title2, data.img_title3, data.img_title4];

    return (
        <div className="w-[100%] h-[auto] px-[50px] my-[50px]">
            <div className="w-[100%] flex justify-between">
                <div className="w-[50%]">
                    <h1 className="text-[2rem]">
                        {data.h1_1Top} <br /> {data.h1_1Bottom}
                    </h1>
                </div>
                <div className="w-[50%] flex justify-end">
                    <p className="w-[65%] text-[0.9rem] text-gray-500">{data.p1_1Top}</p>
                </div>
            </div>

            <div className="mt-[25px] flex flex-wrap gap-4">
                {images.map((img, index) => (
                    <div key={index} className="w-[48%] rounded-lg overflow-hidden">
                        <img className="w-[100%]" src={img} alt={`portfolio-${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="w-[100%] h-[80vh] bg-black text-white flex flex-col justify-center items-center">
                <h1 class="text-[4rem]">{data.h1_2Top}</h1>

                <p class="text-[0.9rem] mb-3 mt-2 text-gray-300 w-[50%] text-center">{data.p1_2Top}</p>

                <Button class="w-[170px] py-[7px] block text-center rounded-full bg-white text-black cursor-pointer">
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default Portfolio;
