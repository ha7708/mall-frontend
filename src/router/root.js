import { Suspense, lazy } from "react";
// lazy → 컴포넌트를 필요할 때만 불러오는 지연 로딩
// Suspense → lazy 로딩 중일 때 보여줄 fallback UI
import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading...</div>;

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));

// createBrowserRouter → React Router v6 방식 라우터 생성
const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
]);

export default root;
