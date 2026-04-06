import Button from "../components/Button";
import desktopImg from "../../Public/Images/desktop.jpg"

const Home = () => {
    return (
        <div className="w-[100%] h-[calc(100vh-64px)] flex">
            {/* Left section starting */}
            <div className="w-[50%] h-[100%] flex flex-col justify-center px-[50px]">
                <h1 className="text-[2.2rem] font-semibold">
                    Elevate Your Brand <br /> With Stunning App And <br /> Website Design
                </h1>

                <p className="w-[70%] text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio ut ab. Quo, non dolores.
                </p>

                <div className="mt-[10px] flex gap-2">
                    <Button className="px-[30px] py-[7px] rounded-sm bg-black text-amber-50 cursor-pointer">
                        Get Started
                    </Button>

                    <Button className="px-[30px] py-[7px] rounded-sm text-black border-[1.5px] border-mist-450 cursor-pointer">
                        View Project
                    </Button>
                </div>
            </div>
            {/* Left section ending */}



            {/* Right section starting */}
            <div className="w-[50%] h-[100%] flex justify-center items-center">

              <div className="w-[60%] h-[70%] rounded-lg overflow-hidden p-[10px] relative">

                <div className="bg-white rounded-lg absolute top-0 left-0 w-[200px] p-[10px]">

                  <div className="p-[10px] rounded-lg bg-[#F5F5F5]">
                    <h1 className="text-[2.5rem] font-medium">256+1</h1>
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, recusandae.</p>
                  </div>

                </div>

                <div className="bg-white w-[150px] absolute bottom-0 right-0 p-[10px] rounded-lg">
                  <div className="p-[10px] rounded-lg bg-black text-white">
                    <h1 className="text-[2rem] font-medium">200+</h1>
                    <p className="text-[0.6rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, inventore.</p>
                  </div>
                </div>

                <img className="w-[100%] h-[100%] rounded-lg" src={desktopImg} alt="" />
              </div>
            </div>
            {/* Right section ending */}
        </div>
    );
};

export default Home;
