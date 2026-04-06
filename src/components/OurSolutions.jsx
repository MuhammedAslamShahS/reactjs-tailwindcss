import solutions from "../API/Oursolutions.json";

const OurSolutions = () => {
    const data = solutions[0]; // if array

    return (
        <div className="w-full h-full px-[50px] my-[50px]">
            {/* Heading */}
            <div className="w-full flex flex-col items-center">
                <h1 className="text-center font-semibold text-[2.2rem]">
                    {data.mainHeadingTop} <br /> {data.mainHeadingBottom}
                </h1>

                <p className="text-center text-[0.9rem] text-gray-500">
                    {data.mainParagraphTop} <br /> {data.mainParagraphBottom}
                </p>
            </div>

            {/* Items */}
            <div className="w-full mt-[30px] flex flex-col gap-3">
                {data.items.map(({ title, description, image }, index) => (
                    <div key={index} className="flex justify-between items-center border-b-[2px] border-gray-400 pb-[10px]">
                        <h1 className="text-[2rem] w-[40%]">{title}</h1>

                        <p className="w-[45%] text-[0.9rem]">{description}</p>

                        <img src={image} alt={title} className="h-[70px] cursor-pointer" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSolutions;
