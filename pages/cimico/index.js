
import Carousel from "@/components/Carousel";
import { countries } from "@/components/Data";

function index() {
  return (
    <div className="App">
      <div className="topContent">
        <h2>CIMICO</h2>
        <p className="text-sm px-3">Fostering Cooperation and Collaboration between the Military and Civilian Actors, Agencies and Stakeholders, and Galvanizing Citizens participation in Defence and Security Management. </p>
      </div>
      {/* Carousel */}
      <Carousel className="px-3" images={countries} />
    </div>
  );
}

export default index;
