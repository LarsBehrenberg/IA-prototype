/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Wrapper = styled(Link)`
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  border-radius: 0.4rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 17rem;

  &.grid-view {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

    flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
    max-width: calc(99.9% * 1 / 3 - 2.5rem);
    width: calc(99.9% * 1 / 3 - 2.5rem);

    @media (max-width: 1000px) {
      flex-basis: calc(99.9% * 1 / 2 - 1rem);
      max-width: calc(99.9% * 1 / 2 - 1rem);
      width: calc(99.9% * 1 / 2 - 1rem);
      height: 18rem;
    }

    @media (max-width: 700px) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      height: 15rem;
    }

    &:hover {
      box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
      transform: scale(1.04);
    }
  }

  &.list-view {
    flex-basis: 99.9%;
    max-width: 99.9%;
    width: 99.9%;
    display: flex;
    flex-direction: row;
    height: 13rem;

    @media (max-width: 700px) {
      flex-direction: column;
      height: auto;
      max-height: 23rem;
    }

    &:hover h2 {
      color: #e53132;
    }

    &:hover .list-image-container {
      box-shadow: 0 40px 45px rgba(0, 0, 0, 0.37);
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: scale(1.003);
    }
  }
`

const StyledLink = styled.div`
  &.grid-view {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    z-index: 3;
    border-radius: 0.4rem;
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.7) 80%,
        rgba(0, 0, 0, 0.8) 100%
      );
      z-index: -10;
      border-radius: 0.4rem;
      transition: opacity 0.4s;
    }
  }

  &.list-view {
    flex-basis: 60%;
    margin-top: -1rem;

    @media (max-width: 700px) {
      flex-basis: 100%;
    }
  }
`

const Image = styled.div`
  &.grid-view {
    position: absolute;
    top: 0;
    overflow: hidden;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    object-fit: cover;
    border-radius: 0.4rem;
    img {
      border-radius: 0.4rem;
    }
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
  }

  &.list-view {
    object-fit: cover;
    width: 30rem;
    overflow: hidden;
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.3);

    @media (max-width: 700px) {
      width: 100%;
      height: auto;
    }
  }
`

const Info = styled.div`
  &.grid-view {
    color: #f0f0f0;
    margin: 0 1rem 1.25rem 1.25rem;
    position: absolute;
    bottom: 0;
    left: 0;

    & span:last-child {
      display: none;
    }
  }

  &.list-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem 1rem 1.25rem 4rem;
    color: #333;

    & span:last-child {
      opacity: 0.33;
      margin-top: 0.5em;
    }
    @media (max-width: 950px) {
      margin: 1rem 1rem 1.25rem 3rem;
    }
    @media (max-width: 700px) {
      margin: 2rem 0.5rem 1.25rem 0.5rem;
    }
  }
`

const Title = styled.h2`
  margin-bottom: 0.6rem;
  margin-top: 0.4rem;
`

const PostList = ({ date, cover, path, title, excerpt, view, subTitle }) => (
  <Wrapper className={`${view}-view`} to={`/${path}`}>
    <Image className={`${view}-view list-image-container`}>
      <Img fluid={cover} alt={title} />
    </Image>
    <StyledLink className={`${view}-view`}>
      <Info className={`${view}-view`}>
        <span>{subTitle}</span>
        <Title>{title}</Title>
        <span>
          {view === 'grid' ? `${excerpt.substring(0, 75)}...` : excerpt}
        </span>
        <span>{date}</span>
      </Info>
    </StyledLink>
  </Wrapper>
)

export default PostList

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
