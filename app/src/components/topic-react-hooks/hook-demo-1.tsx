import React, { useState } from 'react';
import { Col, Input, Row } from 'antd';
import './hook-demo.css';

const { Search } = Input;

const HookDemo1 = () => {
  const [searchText, setSearchText] = useState('empty');

  const onSearchTextChange = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <h3>Simple Hook</h3>
      <Row className={'separator-row'}>
        <Col span={12}>
          <Search
            allowClear
            enterButton
            placeholder={'input search text'}
            onSearch={onSearchTextChange}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={12}>
          <div>
            Your search is
            {' '}
            {searchText}
            .
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HookDemo1;
