import { Col, Row, Container } from "reactstrap";
import coffeecup from "../app/assets/img/coffee.png";
import SubHeader from "./SubHeader";

const AboutUs = () => {
  return (
    <Container>
      <SubHeader current={"About Us"} />
      <Row className="row-content sm=3">
        <Col sm="6">
          <h2 id="h2" align={"left"}>
            Who Are We?
          </h2>

          <br />

          <p sm="3" align={"left"}>
            Xaymaca Coffee Traders was created in 2009 by the patriarch of the
            Levy family, David Levy. He built our company on 2 simple tenets
            excellent customer service and honesty. We, at XCT, will always call
            you back, and we will always tell our customers and partners the
            truth so they can run their businesses effectively. By staying true
            to our values, Xaymaca has become the leading coffee importer and
            distributor of Jamaica’s Blue Mountain Coffee and the US
            representative of Coffee Traders Limited the #1 Jamaican Blue
            Mountain coffee producer both in quantity and quality.
          </p>
        </Col>
        <br />

        <h2>What Do We Do?</h2>

        <Col sm="6">
          <p>
            Xaymaca Coffee Traders sells both green coffee and roasted coffee
            beans. We offer green coffee directly from the Jamaica Blue
            Mountains and roasted specialty coffees from Jamaica and other
            countries within the global coffee-producing belt.
          </p>
        </Col>

        <img
          src={coffeecup}
          width={350}
          alt="Coffee Cup"
          className="float-right"
          align={"right"}
        />
      </Row>
    </Container>
  );
};

export default AboutUs;
