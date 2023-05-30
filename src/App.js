import Login from "./components/Auth/Login/Login";
import { Col, Row, Card, Layout } from "antd";
import { Content } from 'antd/es/layout/layout';

function App() {

  return (
    <Layout className="fullHeight">
      <Content className='overflowContent' >
        <Row >
        <Col xs={28} sm={2} md={2} lg={5}></Col>
            <Col xs={26} sm={20} md={12} lg={6} className="cardsLocation">
              <Card title="ESCUELA DIGITAL">
                <Login />
              </Card>
            </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
