import '../css/login.css';
import { Button, Card, Input,Form,Radio, Layout, Col, Row, Divider} from 'antd';
import { Link } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';

export const Test = () => {
  return (
    <div className="container">
      <Layout>
        <Content>
          <Divider orientation="left">Percentage columns</Divider>
          <Row>
              <Col flex={2}>letf 2 / 5</Col>
              <Col flex={3}>left 3 / 5</Col>
          </Row>
          <Divider orientation="center">Percentage columns</Divider>
        </Content>
      </Layout>
    </div>
  );
}
