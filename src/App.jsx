import { Suspense } from "react";
import "./App.css";
import Countries from "./Countries";

const FetchPromise = async () => {
  const PromiseDAta = await fetch("https://restcountries.com/v3.1/all");
  return PromiseDAta.json();
};

function App() {

  const FetchPromiseInApp= FetchPromise()

  
  return (
    <>
      <Suspense fallback={<h2 className="border-2 border-red-600 flex justify-center"> loding data.... </h2>}> <Countries FetchPromiseInApp={FetchPromiseInApp}> </Countries></Suspense>
    </>
  );
}

export default App;
