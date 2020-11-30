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

interface HackerNewsArticleHits {
  hits: Array<HackerNewsArticle>
}

interface AxiosError {
  message: string,
  statusCode: number
}

const API_URL_WITH_QUERY = 'https://hn.algolia.com/api/v1/search?query=';
const INITIAL_QUERY = 'youtube';

/**
 * HackerNewsAPI Hook. Can take in a generic type that will define the structure
 * of the data received from the API.
 *
 * @param initialUrl Initial string string URL value for the API request
 * @param initialData Initial generic API data
 */
const useHackerNewsApi = <T, >(initialUrl: string, initialData: T) => {
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | AxiosError>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: { data: T } = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError({
          message: err.message,
          statusCode: err.response?.status,
        });
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, error }, setUrl] as const;
};

/**
 * Refactored version of data fetching into a reusable API hook
 */
const HookDemo4 = () => {
  const [query, setQuery] = useState<string>(INITIAL_QUERY);
  const [{ data, isLoading, error }, setUrl] = useHackerNewsApi<HackerNewsArticleHits>(
    `${API_URL_WITH_QUERY}${INITIAL_QUERY}`,
    { hits: [] },
  );

  return (
    <>
      <Row>
        <h3>Data fetching with custom Hook</h3>
      </Row>
      <Row className={'separator-row'}>
        <Col span={12}>
          <Search
            id={'custom-data-fetching-hook'}
            allowClear
            enterButton
            placeholder={'input search text'}
            onChange={(event: ChangeEvent<HTMLInputElement>) => { setQuery(event?.target?.value); }}
            onSearch={() => { setUrl(`${API_URL_WITH_QUERY}${query}`); }}
            style={{ width: 200 }}
          />
        </Col>
        <Col
          span={12}
          className={'results'}
        >
          {error && (<span>{`${error.statusCode || 'ERR'}: ${error.message}`}</span>)}
          {!isLoading ? (
            <ul
              id={'custom-data-fetching-hook-results'}
            >
              {data.hits
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

export default HookDemo4;
