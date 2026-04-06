const ServicesCard = ({ icon, title, description }) => {
    return (
        <>
            <div className="w-[350px]">
                <div className="w-[50px] h-[50px] bg-slate-200 flex justify-center items-center rounded-md">
                    <img className="w-[25px]" src={icon} alt={title} />
                </div>
                <h1 className="text-[1.1rem] font-semibold mt-1">{title}</h1>
                <p className="text-gray-500 text-[0.8rem]">{description}</p>
            </div>
        </>
    );
};

export default ServicesCard;
