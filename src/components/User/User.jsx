import { LuMessagesSquare } from "react-icons/lu";
import { MdAttachFile, MdDateRange } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";
import PropTypes from "prop-types"; // ES6
const User = ({ user }) => {
  console.log(user);
  const { name, file_quantity, comment_quantity, people_quantity, post_date } =
    user;

  return (
    <div className=" bg-white px-2 rounded-md pb-2">
      {/* ************* box-item ************* */}
      {/* ************* children---->1 ************* */}
      <section className="flex justify-between py-2 gap-3 font-semibold">
        <div className="flex gap-2 items-center ">
          <img
            className=" w-10 h-10 rounded-full"
            src="https://i.ibb.co.com/Q6Ysgxt/Photo-Room-20240813-165411.png"
            alt=""
          />
          <h4>{name}</h4>
        </div>

        <div className="flex gap-2 items-center ">
          <img
            className=" w-10 h-10 rounded-full"
            src="https://i.ibb.co.com/2s99M1W/Photo-Room-20240303-235344.png"
            alt=""
          />
          <h4>Saim Ahmed</h4>
        </div>
      </section>
      {/* ************* children---->2 ************* */}

      <section className="flex justify-between py-2 ">
        <div className="flex gap-2 items-center box-border text-[14px]">
          <SiPowerpages />
          <p>Lorem, ipsum dolor ...</p>
        </div>
        <div className="flex gap-2 items-center bg-slate-100 p-1 rounded-md">
          <RiPagesFill />
          <span>1/2</span>
        </div>
      </section>
      {/* ************* children---->3 ************* */}
      <section className="flex justify-between items-center ">
        <img
          className=" w-10 h-10 rounded-full"
          src="https://i.ibb.co.com/1q5Fz5x/Photo-Room-20240813-165205.png"
          alt=""
        />
        <img
          className=" w-10 h-10 rounded-full"
          src="https://i.ibb.co.com/0qRFZXf/Photo-Room-20240806-124409.png"
          alt=""
        />
        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-200">
          <p className="text-[12px]">
            {people_quantity}
            <span>+</span>
          </p>
        </div>
        <div className="flex gap-1 justify-center text-[12px]">
          <span className="pt-1">
            <LuMessagesSquare />
          </span>
          <span>{comment_quantity}</span>
        </div>
        <div className="flex gap-1 justify-center text-[12px]">
          <span className="pt-1">
            <MdAttachFile />
          </span>
          <span>{file_quantity}</span>
        </div>
        <div className="flex gap-1 justify-center text-[12px]">
          <span className="pt-1">
            <MdDateRange />
          </span>
          <span>{post_date}</span>
        </div>
      </section>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
