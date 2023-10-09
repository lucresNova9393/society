
import Carousel from "@/components/Carousel";
import { countries } from "@/components/Data1";

function index() {
  return (
    <div className="App">
      <div className="topContent">
        <div><h2>CSO</h2></div>
        <p className="text-sm px-3">Linking Civil Societies for collective actions and strategic engagements, as well as enhancing their thematic interventions. </p>
      </div>
      {/* Carousel */}
      <Carousel className="px-3" images={countries} />
    </div>
  );
}

export default index;
