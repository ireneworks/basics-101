import Divider from "../../../common/components/divider/Divider";
import Paragraph from "../../../common/components/paragraph/Paragraph";
import {
  Heading2,
  Heading4,
} from "../../../common/components/headings/heading";
import { descWrapper, headingBlue } from "./solidPrinciplePage.css";
import PageLayout from "../../../common/layouts/pageLayout/PageLayout";

export default function SolidPrinciplePage() {
  return (
    <PageLayout
      title="프론트엔드의 SOLID 원칙 활용법"
      desc={
        "SOLID 원칙은 소프트웨어 설계에서 유지보수성과 확장성을 높이기 위해 도입된 중요한 개념입니다. 이 원칙들은 개별 모듈이나 클래스가 어떻게 설계되어야 하는지에 대한 가이드라인을 제공합니다."
      }
    >
      <Heading2>왜 SOLID 원칙이 필요할까요?</Heading2>
      <div className={descWrapper}>
        <Heading4>
          <span className={headingBlue}>01</span>
          {"코드의 유연성 증가"}
        </Heading4>
        <Paragraph>
          {
            "변화하는 요구사항에 쉽게 대응하고, 코드를 재사용하거나 확장할 수 있는 기회를 제공합니다."
          }
        </Paragraph>
      </div>
      <div className={descWrapper}>
        <Heading4>
          <span className={headingBlue}>02</span>
          {"유지보수성 향상"}
        </Heading4>
        <Paragraph>
          {
            "코드의 복잡도가 줄어들고, 수정할 때 한 부분만 고치면 되기 때문에 유지보수가 훨씬 용이해집니다."
          }
        </Paragraph>
      </div>
      <div className={descWrapper}>
        <Heading4>
          <span className={headingBlue}>03</span>
          {"코드 재사용성 증가"}
        </Heading4>
        <Paragraph>
          {
            "클래스나 모듈의 결합도를 낮추고(Loose Coupling), 응집도를 높이는(High Cohesion) 구조를 만듭니다. 이를 통해 서로 독립적인 코드 조각을 더 쉽게 재사용할 수 있습니다."
          }
        </Paragraph>
      </div>
      <div className={descWrapper}>
        <Heading4>
          <span className={headingBlue}>04</span>
          {"테스트 용이성"}
        </Heading4>
        <Paragraph>
          {
            "각 클래스가 하나의 책임만 가지면, 독립적으로 테스트할 수 있는 단위 테스트를 쉽게 작성할 수 있습니다. 또한, 의존성 주입과 인터페이스 분리를 통해 테스트 중에 모의 객체(mock)를 사용하는 것이 쉬워집니다."
          }
        </Paragraph>
      </div>
      <div className={descWrapper}>
        <Heading4>
          <span className={headingBlue}>05</span>
          {"코드의 가독성 및 명확성"}
        </Heading4>
        <Paragraph>
          {
            "각 클래스와 모듈이 하나의 역할에 집중하므로, 코드를 읽는 사람은 해당 클래스가 무엇을 하는지 바로 이해할 수 있습니다."
          }
        </Paragraph>
      </div>
      <Divider />
    </PageLayout>
  );
}
