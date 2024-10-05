import Image from "next/image";

const Aboutus = () => {
  return (
    <div>
    <div className="grid grid-rows-1 md:grid-cols-2 p-4 ]">
      <div className=" w-full md:w-[70%]">
        <h1 className="text-black text-[30px] md:text-[50px]  place-items-baseline flex  font-bold">
          Discover
          <div className="bg-[#3AB300] w-[10px] h-[10px] ml-2   rounded-full "></div>
        </h1>
        <h1 className="text-black text-[30px] md:text-[50px] flex place-items-baseline  font-bold">
          {" "}
          Explore
          <div className="bg-[#EAB308] w-[10px] h-[10px] ml-2  rounded-full "></div>
        </h1>
        <h1 className="text-black text-[30px] md:text-[50px] flex place-items-baseline  font-bold">
          {" "}
          Nigeria
          <div className="bg-[#3AB300] w-[10px] h-[10px] ml-2 rounded-full "></div>{" "}
        </h1>

        <div className="mt-4  text-[12px] md:text-[16px]">
          <h3>
            <strong>LEARN </strong> span about her rich history & contemporary
            life, find out the best <strong>TOURIST ATTRACTIONS</strong> and{" "}
            <strong>WRITE</strong>- get involved in the enhancement of
            Nigeria&apos;s historical archive. After all it takes a joint effort
            to build a nation.
          </h3>
          <h3 className="mt-4 w-full h-full bg-[#EBF7E6] text-[#3AB300] rounded-[20px]  text-center">
            LIVE. FOR THE CULTURE.
          </h3>
        </div>
      </div>

      <div className="mt-8 p-4 md:mt-0 flex w-[100%] bg-[#EBF7E6]">
        <Image
          className="p-6 bg-white"
          src="/landing1.png"
          layout="responsive"
          alt="alt"
          width={460}
          height={528}
        />
      </div>

      
    </div>
    <div className="mt-2 w-full p-4">
    <Image src="/banner1.png" layout="responsive" alt="alt" width={1000} height={400} />
  </div>
  </div>
  );
};

export default Aboutus;
