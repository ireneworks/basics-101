import { Heading2 } from "../../../common/components/headings/heading";
import PageLayout from "../../../common/layouts/pageLayout/PageLayout";
import Annotation from "../../../common/components/annotation/Annotation.tsx";
import Divider from "../../../common/components/divider/Divider.tsx";
import CodeBlock from "../../../common/components/codeBlock/CodeBlock.tsx";
import ecommerceImgPath from "../../../common/assets/images/oop/ecommerce.jpg";
import paymentImgPath from "../../../common/assets/images/oop/payment.jpg";
import cartImgPath from "../../../common/assets/images/oop/cart.jpg";
import { root } from "../../../common.css.ts";
import Code from "../../../common/components/code/Code.tsx";

export default function OopDevelopmentPage() {
  return (
    <PageLayout
      title="프론트엔드의 객체지향 프로그래밍"
      desc={
        "객체지향 프로그래밍을 많이 들어는 봤는데 해당 개념을 어떻게 실제 코드에서 활용할 수 있을까에 대한 고찰"
      }
    >
      <Heading2>프론트엔드 패러다임</Heading2>
      <p>
        웹은 예전과 다르게 페이지를 보여주기에 그치지 않고 유저와의 많은
        인터랙션이 요구되고 도메인이 고도화 되면서 더 크고 복잡한 애플리케이션을
        설계해야 한다. 이러한 애플리케이션을 개발하기 위해서는 확장성과 유지보수
        등을 쉽게 할 수 있는 설계가 필요하다. 이에 프론트엔드 필드는 다양한 설계
        패러다임을 발전시켜왔고 객체지향, 함수형, 컴포넌트 기반 설계 그리고
        선언적 프로그래밍이 가장 널리 사용되고 있다. 그중에서 객체지향
        프로그래밍을 딥다이브 해보고자 하고 이는 데이터와 그 데이터를 처리하는
        함수를 객체라는 하나의 단위로 묶어서 프로그래밍하는 방식을 말한다.
        <Annotation
          label={"1)"}
          link={"https://f-lab.kr/insight/oop-in-frontend-development"}
        />
        객체는 하나의 chunk로 다양한 객체를 조합하여 프로덕트를 만드는 것으로
        프론트엔드는 데이터와 뷰를 다루기 때문에 컴포넌트 단위로 객체지향적인
        설계가 중요할 것 같다.
      </p>
      <Divider />
      <Heading2>객체지향 그래서 실전에서 어떻게 활용할 수 있어?</Heading2>
      <img
        src={ecommerceImgPath}
        alt={"커머스 상세 페이지"}
        width={"100%"}
        height={"auto"}
        style={{
          border: `1px solid ${root.color.gray150}`,
          margin: "0 0 40px",
        }}
      />
      <p>
        SDP 페이지는 썸네일, ATF, BTF로 나눌 수 있다. 그 중에서 썸네일 + ATF
        영역을 가상으로 설계해보고자 한다.
      </p>
      <p>먼저 모든 상품 카테고리의 틀이 될 수 있는 레이아웃을 만들었다.</p>
      <CodeBlock
        codeSnippet={
          "export default function SdpLayout({ thumbnail, category, isTimeDeal, children }) {\n" +
          "  return (\n" +
          "    <Layout> // 네비게이션과 CTA가 포함된 레이아웃\n" +
          "      <Thumbnail thumbnail={thumbnail} ads={category} isTimeDeal={isTimeDeal} />\n" +
          "      <Atf>{children}</Atf>\n" +
          "    </Layout>\n" +
          "  );\n" +
          "}"
        }
      />
      <p>
        만든 기본 Sdp 컴포넌트를 이용하여 각 상품의 카테고리 별 SDP 페이지를
        구성한다.
      </p>
      <p>
        각 색상은 광고, 썸네일, 리뷰, 가격, 옵션, 적립 등 의 관심사가 동일한
        데이터의 그룹으로 분리했다. 분리한 데이터 그룹 내에서 UI variant를
        나누었다.
      </p>
      <CodeBlock
        codeSnippet={
          "export function HealthSdp({\n" +
          "  thumbnail,\n" +
          "  isTimeDeal,\n" +
          "  brand,\n" +
          "  review,\n" +
          "  title,\n" +
          "  sizes,\n" +
          "  price,\n" +
          "  shipment,\n" +
          "}) {\n" +
          "  return (\n" +
          "    <Sdp\n" +
          "      thumbnail={thumbnail}\n" +
          "      category={CATEGORY.Health}\n" +
          "      isTimeDeal={isTimeDeal}\n" +
          "    >\n" +
          "      <Reivew.Default brand={brand} review={review} />\n" +
          "      <Title title={title} />\n" +
          "      <Options.Size options={sizes} />\n" +
          "      <PriceAndShipment price={price} shipment={shipment} />\n" +
          "      <PaymentBenefit.CoupangCash />\n" +
          "    </Sdp>\n" +
          "  );\n" +
          "}\n" +
          "\n" +
          "export function ApplianceSdp({\n" +
          "  thumbnail,\n" +
          "  isTimeDeal,\n" +
          "  brand,\n" +
          "  review,\n" +
          "  title,\n" +
          "  displaySizes,\n" +
          "  price,\n" +
          "  shipment,\n" +
          "  quantity,\n" +
          "}) {\n" +
          "  return (\n" +
          "    <Sdp\n" +
          "      thumbnail={thumbnail}\n" +
          "      category={CATEGORY.Appliance}\n" +
          "      isTimeDeal={isTimeDeal}\n" +
          "    >\n" +
          "      <Reivew.Default brand={brand} review={review} />\n" +
          "      <Title title={title} />\n" +
          "      <Options.Tv options={displaySizes} />\n" +
          "      <Insuarance.Care />\n" +
          "      <PriceAndShipment price={price} shipment={shipment} />\n" +
          "      <PaymentBenefit.CreditCard />\n" +
          "      <Quantity quantity={quantity} />\n" +
          "      <Insuarance.Info />\n" +
          "    </Sdp>\n" +
          "  );\n" +
          "}\n" +
          "\n" +
          "export function CoffeeSdp({\n" +
          "  thumbnail,\n" +
          "  isTimeDeal,\n" +
          "  brand,\n" +
          "  review,\n" +
          "  title,\n" +
          "  sizes,\n" +
          "  price,\n" +
          "  shipment,\n" +
          "  quantity,\n" +
          "  sku,\n" +
          "}) {\n" +
          "  return (\n" +
          "    <Sdp\n" +
          "      thumbnail={thumbnail}\n" +
          "      category={CATEGORY.Coffee}\n" +
          "      isTimeDeal={isTimeDeal}\n" +
          "    >\n" +
          "      <Reivew.Default brand={brand} review={review} />\n" +
          "      <Title title={title} />\n" +
          "      <Options.Size options={sizes} />\n" +
          "      <PriceAndShipment price={price} shipment={shipment} />\n" +
          "      <PaymentBenefit.CoupangCash />\n" +
          "      <Quantity quantity={quantity} />\n" +
          "      <OtherSellers Sku={sku} />\n" +
          "    </Sdp>\n" +
          "  );\n" +
          "}"
        }
      />
      <p>
        해당 설계의 가장 큰 장점은 새로운 카테고리가 추가되어도 사이드 이펙트
        거의 없이 쉽게 확장할 수 있다. 또한 각 카테고리별로 다른 UI를 가질 수
        있기 때문에 유지보수가 쉽다. 만약 하나의 Sdp라는 컴포넌트 안에서 모든
        데이터와 UI를 처리하려고 했다면, 굉장히 많은 props와 state를 관리하고
        복잡한 조건문을 사용해야 했을 것 이다.
      </p>
      <Divider />
      <img
        src={paymentImgPath}
        alt={"커머스 결제 페이지"}
        width={320}
        height={"auto"}
        style={{ margin: "40px 0", border: `1px solid ${root.color.gray150}` }}
      />
      <p>
        다른 예시로 결제 모듈을 만든다고 가정해보자. 각 상품을 결제를 진행한다의
        개념은 동일하지만 유저가 선택한 결제 방식에 따라 결제 로직을 다르게
        처리하고자 한다.
      </p>
      <CodeBlock
        codeSnippet={
          "function Checkout() {\n" +
          "  const { data } = useQuery();\n" +
          "\n" +
          "  return (\n" +
          "    <>\n" +
          "      <Address address={auth.address} />\n" +
          "      <Items items={data.items} />\n" +
          "      <Payment amount={data.amount} />\n" +
          "    </>\n" +
          "  );\n" +
          "}"
        }
      />
      <p>
        <Code>PAYMENT_METHOD</Code>안에 공통 인터페이스를 만들고 각 결제 방식에
        따라 process에 있는 함수를 실행하여 결제를 진행한다.
      </p>
      <CodeBlock
        codeSnippet={
          "export function Payment({ amount }) {\n" +
          "  const [paymentMethod, setPaymentMethod] = useState(null);\n" +
          "\n" +
          "  const handlePayment = (method, amount) => {\n" +
          "    method.process(amount)\n" +
          "  };\n" +
          "\n" +
          "  return (\n" +
          "    <>\n" +
          "      {PAYMENT_METHOD.map((method) => (\n" +
          "        <PaymentMethodItem\n" +
          "          key={method.key}\n" +
          "          name={method.name}\n" +
          "          onClick={() => setPaymentMethod(method)}\n" +
          "        />\n" +
          "      ))}\n" +
          "      <Button onClick={() => handlePayment(paymentMethod, amount)} />\n" +
          "    </>\n" +
          "  );\n" +
          "}"
        }
      />
      <p>
        이러한 방식은 결제 방식을 추가하거나 수정하는 요구사항이 들어오면
        수정해야할 곳이 명확히 정해져있기 때문에 유지보수가 쉽다. 예를 들어
        <Code>PAYMENT_METHOD</Code>에 새로운 방식을 추가하거나 필요한 방식만
        수정하면 된다.
      </p>
      <Divider />
      <img
        src={cartImgPath}
        alt={"카드에 상품 담기"}
        width={"100%"}
        height={"auto"}
        style={{ margin: "40px 0", border: `1px solid ${root.color.gray150}` }}
      />
      <p>
        카트에 상품을 담을 수 있는 메소드는 하나만 만들고 이를 통해서만 카트에
        담을 수 있도록 구현한다.
      </p>
      <CodeBlock
        codeSnippet={
          "function ProductItem({ item }) {\n" +
          "  const { handleAddToCart } = useCartStore();\n" +
          "\n" +
          "  return (\n" +
          "    <>\n" +
          "      {/** 상품 정보 표시 */}\n" +
          "      <Button onClick={() => handleAddToCart(item)}>장바구니 담기</Button>\n" +
          "    </>\n" +
          "  );\n" +
          "}"
        }
      />
    </PageLayout>
  );
}
