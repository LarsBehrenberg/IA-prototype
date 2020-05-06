import { css } from '@emotion/core'
import theme from '../../config/theme'

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 30;
    top: 0;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 4rem;
    background-color: #161b2e;
    @media (max-width: 1000px) {
      padding: 1rem 4rem;
    }
    @media (max-width: 700px) {
      padding: 1rem 4rem;
    }
    @media (min-width: 1200px) {
      padding: 1rem 9rem;
    }
  }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: #161b2e;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
        color: ${theme.colors.white.light};
        &:hover {
          border-color: ${theme.colors.black.base};
          color: ${theme.colors.black.base};
        }
        &:focus {
          color: ${theme.colors.white.light};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.white.light};
    }
  }
`

export default headroom
