import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  // return (
  //   <div>
  //     <div className="flex">
  //       {/* <a> 대신 <Link> 를 사용해야함 : 모두 다시 로드하는 것이 아닌 js로 화면만 바꾼다. */}
  //       {/* <a>는 페이지를 새로 로드 하고, <Link>는 JS로 화면만 바꾼다. */}
  //       <Link to={"/about"}>About</Link>
  //     </div>
  //     <div className=" text-3xl">Main Page</div>
  //   </div>
  // );
  return (
    <BasicLayout>
      <div className=" text-3xl">Main Page</div>
    </BasicLayout>
  );
};

export default MainPage;
