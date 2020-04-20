import React from 'react';
import styled from 'styled-components';
/**
 * 각 뉴스 정보를 보여주는 컴포넌트
 */

const NewsItem = ({ props }) => {
  const { title, description, url, urlToImage } = props;
  return (
    <NewsItemBlock>
      {urlToImage&&{
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt={title} />
          </a>
        </div>
      }}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
