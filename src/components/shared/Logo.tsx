import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className=" w-[80px]">
       <img className=" " src="/header/logoHeader.png" alt="" />
    </Link>
  );
};
