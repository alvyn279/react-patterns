import React, { useEffect, useState } from 'react';
import {
  Button, Popover, Col, Row,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const HookDemo2 = () => {
  const [count, setCount] = useState(0);
  const clickedMessage = `You clicked this button ${count} times.`;
  const explanation = 'useEffect() is executed after changes are flushed to the DOM,'
    + ' like `componentDidMount()` and `componentDidUpdate`.';

  useEffect(() => {
    document.title = clickedMessage;
  });

  return (
    <>
      <Row>
        <h3>
          Simple Hook with `useEffect()`
          <Popover
            content={explanation}
            title={`When to use useEffect`}
          >
            <InfoCircleOutlined />
          </Popover>
        </h3>
      </Row>
      <Row className={'separator-row'}>
        <Col span={12}>
          <Button
            type={'primary'}
            onClick={() => setCount(count + 1)}
          >
            Click Me
          </Button>
        </Col>
        <Col span={12}>
          <span>
            {`${clickedMessage} Check your tab.`}
          </span>
        </Col>
      </Row>
    </>
  );
};

export default HookDemo2;
