import { useState, useEffect } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";

// serverData 의 초기값
const initState = {
  dtoList: [],
  pageNumList: [], // 페이지 번호들
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

// useCustomMove() 를 이용하여 현재 경로의 page 와 size 를 구성하고, API 서버 호출
const ListComponent = () => {
  const { page, size, refresh, moveToList, moveToRead } = useCustomMove(); // moveToList 가 추가적으로 필요, refresh 추가

  // serverData 는 나중에 사용
  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data);
      setServerData(data);
    });
  }, [page, size, refresh]);
  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      <div className="flex flex-wrap mx-auto justify-center p-6">
        {serverData.dtoList.map((todo) => (
          <div
            key={todo.tno}
            className="w-full min-w-[400px] p-2 m-2 rounded shoadow-md"
            onClick={() => moveToRead(todo.tno)} // 이벤트 처리 추가
          >
            <div className="flex ">
              <div className="font-extrabold text-2xl p-2 w-1/12">
                {todo.tno}
              </div>
              <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                {todo.title}
              </div>
              <div className="text-1xl m-1 p-2 w-2/10 font-medium">
                {todo.dueDate}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PageComponent
        serverData={serverData}
        movePage={moveToList}
      ></PageComponent>
    </div>
  );
};
export default ListComponent;
