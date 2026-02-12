import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

// 커스텀 훅 정의
// 커스텀 훅 이름은 반드시 'use...' 로 시작해야한다.
// 연관: src/components/todo/ReadComponent.js
const useCustomMove = () => {
  const navigate = useNavigate();
  // 파라미터 추출후 쿼리스트링으로 만듦
  const [queryParams] = useSearchParams();
  // getNum : 문자열 -> 숫자 변환 & 숫자 검증 단계
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  // createSearchParams() 결과는 객체, 그러나 navigate는 문자열 필요하므로 .toString()
  const queryDefault = createSearchParams({ page, size }).toString(); // 새로 추가

  //
  const moveToList = (pageParam) => {
    let queryStr = "";
    // 새 페이지로 이동할 때 onClick={() => moveToList({ page: 1, size: 10 })}
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
      // 현재 페이지 상태 그대로 돌아갈때 onClick={() => moveToList()}
    } else {
      queryStr = queryDefault;
    }
    navigate({ pathname: `../list`, search: queryStr });
  };

  //
  const moveToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../modify/${num}`,
      search: queryDefault, // 수정시에 기존의 쿼리스트링 유지를 위해
    });
  };

  return { moveToList, moveToModify, page, size };
};

export default useCustomMove;
