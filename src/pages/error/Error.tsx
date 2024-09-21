import { errorContainer } from "./error.css";

export function Error() {
  return (
    <div className={errorContainer}>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  );
}
