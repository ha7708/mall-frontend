import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useCallback } from "react";

// 조회할 때 사용하는 ReadPage 컴포넌트
const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();
  // 쿼리스트링을 유지하여 navigate() 이동시에 활용하기
  // 1. useSearchParams() : 쿼리스트링으로 전달된 데이터를 확인하고
  const [queryParams] = useSearchParams();

  // 2. 삼항식을 사용해서 변수로 추출
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  // 3. 추출한 변수와 createSearchParams() 함수로 navigate 이동 시 필요한 쿼리스트링 만듬
  const queryStr = createSearchParams({ page, size }).toString();

  // tno 값으로 특정 페이지 이동
  const moveToModify = useCallback(
    (tno) => {
      navigate({
        pathname: `/todo/modify/${tno}`,
        // 4. navigate의 search 파라미터에 3에서 만든 쿼리스트링 실어서 보냄
        search: queryStr,
      });
    },
    [tno, page, size]
  );
  const moveToList = useCallback(() => {
    navigate({ pathname: `/todo/list`, search: queryStr });
  });
  return (
    <div className="text-3xl font-extrabold">
      Todo Read Page Component {tno}
      <div>
        <button onClick={() => moveToModify(33)}>Test Modify</button>
        <button onClick={() => moveToList()}>Test List</button>
      </div>
    </div>
  );
};

export default ReadPage;
