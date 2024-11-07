import Users from "../Users/Users";

const UnderReview = () => {
  return (
    <div className="w-[400px] mx-3 bg-slate-100 rounded-md  ">
      {/* ************* section---->1 ************* */}

      <div className="my-3 w-full px-4 rounded-md  h-14 flex  items-center justify-between  ">
        <div className="gap-2 flex items-center ">
          <h1>Under Review</h1>
        </div>
        <div className="w-6 h-6 rounded-md flex items-center justify-center bg-slate-300">
          <span>0</span>
        </div>
      </div>
      {/* ************* section---->2 ************* */}
      <div className="w-[400px] max-h-screen overflow-auto text-justify  ">
        <Users></Users>
      </div>
    </div>
  );
};

export default UnderReview;
