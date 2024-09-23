import { Heading2 } from "../../../common/components/headings/heading";
import PageLayout from "../../../common/layouts/pageLayout/PageLayout";
import Annotation from "../../../common/components/annotation/Annotation.tsx";
import Divider from "../../../common/components/divider/Divider.tsx";

export default function OopDevelopmentPage() {
  return (
    <PageLayout
      title="프론트엔드의 객체지향 프로그래밍"
      desc={
        "프론트엔드에서 객체지향 설계는 복잡한 애플리케이션의 구조를 명확히 하고, 확장성과 유지보수성을 높이며, 재사용 가능한 컴포넌트를 만들 수 있다."
      }
    >
      <Heading2>프론트엔드 패러다임</Heading2>
      <p>
        웹은 예전과 다르게 페이지를 보여주기에 그치지 않고 유저와 인터랙션이
        많이 요구되고 도메인이 고도화 되면서 더 크고 복잡한 애플리케이션을
        설계해야 한다. 이러한 애플리케이션을 개발하기 위해서는 확장성과 유지보수
        등을 쉽게 할 수 있는 설계가 필요하다.
      </p>
      <p>
        프론트엔드는 다양한 설계 패러다임이 존재하며 객체지향, 함수형, 컴포넌트
        기반 설계 그리고 선언적 프로그래밍이 가장 널리 사용되고 있다. 그중에서
        객체지향 프로그래밍은 데이터와 그 데이터를 처리하는 함수를 객체라는
        하나의 단위로 묶어서 프로그래밍하는 방식을 말한다.
        <Annotation
          label={"1)"}
          link={"https://f-lab.kr/insight/oop-in-frontend-development"}
        />
        객체는 하나의 chunk로 다양한 객체를 조합하여 프로덕트를 만드는 것으로
        프론트엔드는 데이터와 뷰를 다루기 때문에 컴포넌트 단위로 객체지향적인
        설계가 중요할 것 같다.
      </p>
      <Divider />
      <Heading2>객체와 클래스</Heading2>
      <p>
        객체는 클래스에서 만들어진 인스턴스 Instance 이다. 클래스는 분류, 객체는
        실체에 대한 개념이라고 볼 때, 객체들이 공통적으로 가진 속성으로 분류할
        수 있을 것 같다.
      </p>
    </PageLayout>
  );
}
