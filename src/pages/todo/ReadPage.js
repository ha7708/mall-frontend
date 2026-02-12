import { useParams } from "react-router-dom";

import ReadComponent from "../../components/todo/ReadComponent";

// 조회할 때 사용하는 ReadPage 컴포넌트
const ReadPage = () => {
  const { tno } = useParams();

  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-2xl ">Todo Read Page Component {tno}</div>
      <ReadComponent tno={tno} />
    </div>
  );
};

export default ReadPage;
