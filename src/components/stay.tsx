export default function StayData (){
    return(
        <div className="max-w-screen-xl  grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16  max-w-frame mx-auto bg-black rounded-[20px]">
        <div className="">
            <p className="text-white font-extrabold  text-[44px] text-center sm:text-left">
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </p>
        </div>
        <div className="flex justify-center items-center p-4">
            <div className="flex flex-col items-center space-y-4 ">
                <input
                    type="text"
                    placeholder="Enter your email address"
                    className="px-4 py-2 rounded-lg border-2 border-gray-300 "
                />
                <button
                    className="px-6 py-2 rounded-lg border-2 text-white"
                >Subscribe To news Letter</button>
            </div>
        </div>
    </div>
    )
}





















