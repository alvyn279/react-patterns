import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import {
  Input, Col, Row, Spin,
} from 'antd';
import axios from 'axios';
import './hook-demo.css';

const { Search } = Input;

interface HackerNewsArticle {
  objectID: string,
  url: string,
  title: string
}

const API_URL_WITH_QUERY = 'https://hn.algolia.com/api/v1/search?query=';

const HookDemo3 = () => {
  const INITIAL_QUERY = 'redux';
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>(INITIAL_QUERY);
  const [url, setUrl] = useState<string>(`${API_URL_WITH_QUERY}${INITIAL_QUERY}`);
  const [hits, setHits] = useState<Array<HackerNewsArticle>>([]);

  useEffect(() => {
    const fetchData = async () => {
      // handle error
      setIsLoading(true);
      const { data } = await axios.get(url);
      setIsLoading(false);
      setHits(data.hits);
    };
    fetchData();
  }, [url]);

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target?.value);
  };

  const onSearchChange = () => {
    setUrl(`${API_URL_WITH_QUERY}${query}`);
  };

  return (
    <>
      <Row>
        <h3>Data fetching with Hooks</h3>
      </Row>
      <Row className={'separator-row'}>
        <Col span={12}>
          <Search
            allowClear
            enterButton
            placeholder={'input search text'}
            onChange={onQueryChange}
            onSearch={onSearchChange}
            style={{ width: 200 }}
          />
        </Col>
        <Col
          span={12}
          className={'results'}
        >
          {!isLoading ? (
            <ul>
              {hits
                .filter((item: HackerNewsArticle) => item.title && item.url)
                .map((item: HackerNewsArticle) => (
                  <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
            </ul>
          ) : (<Spin tip={'Searching ...'} />) }
        </Col>
      </Row>
    </>
  );
};

export default HookDemo3;
