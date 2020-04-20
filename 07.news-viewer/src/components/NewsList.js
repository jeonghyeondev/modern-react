import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
/**
 * API를 요청하고 뉴스 데이터가 들어 있는 배열 컴포넌트
 */
const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={samplArticle} />
      <NewsItem article={samplArticle} />
      <NewsItem article={samplArticle} />
      <NewsItem article={samplArticle} />
      <NewsItem article={samplArticle} />
      <NewsItem article={samplArticle} />
    </NewsListBlock>
  );
};

export default NewsList;
