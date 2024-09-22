import { gateway } from "./gateway.css";
import useMediaQuery from "../../hooks/useMediaQuery.ts";

export function Gateway() {
  const { isMobile } = useMediaQuery();

  return (
    <div className={gateway}>
      <h1>intro</h1>
      <p>
        {isMobile
          ? "O2O와 커머스 도메인에서 프로덕트 디자이너와 PO로 일하다가 소프트웨어 엔지니어로 전직 중입니다. 퀘스트를 수행하며 도움이 되는 아이템을 획득하면 정리하는 인벤입니다. 오타 및 잘못된 내용은 hello@ireneworks.com 으로 남겨주세요."
          : "O2O와 커머스 도메인에서 프로덕트 디자이너와 PO로 일하다가 소프트웨어 엔지니어로 전직 중입니다.\n퀘스트를 수행하며 도움이 되는 아이템을 획득하면 정리하는 인벤입니다.\n오타 및 잘못된 내용은 hello@ireneworks.com 으로 남겨주세요."}
      </p>
    </div>
  );
}
