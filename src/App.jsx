import "./App.css";
import Completed from "./components/Completed/Completed";
import Doing from "./components/Doing/Doing";
import Incomplete from "./components/Incomplete/Incomplete";
import Overview from "./components/Overview/Overview";
import ToDo from "./components/ToDo/ToDo";
import UnderReview from "./components/UnderReview/UnderReview";

function App() {
  return (
    <>
      <div>
        <div className="flex max-w-[1520px] mx-auto bg-white p-4 ">
          <Incomplete></Incomplete>
          <ToDo></ToDo>
          <Doing></Doing>
          <UnderReview></UnderReview>
          <Completed></Completed>
          <Overview></Overview>
        </div>
      </div>
    </>
  );
}

export default App;
