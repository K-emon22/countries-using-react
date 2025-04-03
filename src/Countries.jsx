import React, {use, useState} from "react";

const Countries = ({FetchPromiseInApp}) => {
  const CountriesDetails = use(FetchPromiseInApp);
  const [count, setcount] = useState([]);
  const VisitedWorldCount = (Countrie) => {

    const newcount=[...count,Countrie]
    setcount(newcount)

  };

  return (
    <div className="mx-[10%]">
      <h1 className="flex justify-center font-bold text-5xl ">
        {CountriesDetails.length} Countries of this World.
      </h1>
      <h2 className="flex justify-center font-bold text-2xl mt-3 ">

        Total visited countries: {count.length}
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {CountriesDetails.map((Detais) => (
          <CountriesData
            key={Detais.name.common}
            VisitedWorldCount={VisitedWorldCount}
            Detais={Detais}
          ></CountriesData>
        ))}
      </div>
    </div>
  );
};

const CountriesData = ({Detais, VisitedWorldCount}) => {
  // console.log(Detais.population);

  const [visit, setVisit] = useState(false);
  const HandleVisited = () => {
    // if (visit === true) {
    //   setVisit(false);
    // } else {
    //   setVisit(true);
    // }
    VisitedWorldCount(Detais);
    setVisit(!visit);
  };
  return (
    <div>
      <div className="border p-4 flex flex-col  rounded-lg gap-1 h-full">
        <div className=" w-full h-1/2 my-0  flex mx-auto ">
          <img
            className=" flex mx-auto "
            src={Detais.flags.png}
            alt={`${Detais.name.common} flag`}
          />
        </div>
        <h1 className=" font-bold ">{Detais.name.common}</h1>
        <h1>
          {" "}
          <span className="font-bold"> Population:</span> {Detais.population}{" "}
        </h1>
        <button
          onClick={HandleVisited}
          className={` font-bold bg-blue-500 w-3/12 mt-auto text-white py-1 px-1 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out ${
            visit && "bg-gray-500"
          }`}
        >
          {visit ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Countries;
