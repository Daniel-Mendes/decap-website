/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { SiGithub } from '@icons-pack/react-simple-icons';

import Container from './container';
import DocSearch from './docsearch';
import searchIcon from '../img/search.svg';
import theme from '../theme';
import { mq } from '../utils';

const StyledHeader = styled.header`
  background: ${theme.colors.primaryLight};
  color: ${theme.colors.white};
  padding-top: ${theme.space[2]};
  padding-bottom: ${theme.space[2]};
  transition: background 0.2s ease, padding 0.2s ease, box-shadow 0.2s ease;
  font-family: ${theme.fontFamily[1]};

  ${mq[1]} {
    padding-top: ${theme.space[3]};
    padding-bottom: ${theme.space[3]};
  }

  ${mq[2]} {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: ${theme.zIndexes.header};

    ${(p) =>
      !p.collapsed &&
      css`
        // padding-top: ${theme.space[5]};
        // padding-bottom: ${theme.space[5]};
      `};
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  ${mq[1]} {
    margin-right: ${theme.space[4]};
  }
  ${mq[2]} {
    margin-right: ${theme.space[5]};
  }
  ${mq[3]} {
    margin-right: ${theme.space[6]};
  }

  a {
    display: flex;
    align-items: center;
  }

  img {
    height: clamp(32px, 3vw, 40px);
    width: auto;
  }
`;

const MenuActions = styled.div`
  flex: 1 0 60px;
  display: flex;
  justify-content: flex-end;
  ${mq[1]} {
    display: none;
  }
`;

const MenuBtn = styled.button`
  background: none;
  border: 0;
  padding: ${theme.space[2]};
  font-size: ${theme.fontsize[6]};
  line-height: 1;
  color: inherit;
`;

const SearchBtn = styled(MenuBtn)``;

const ToggleArea = styled.div`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: absolute;
  top: ${theme.space[6]};
  left: 0;
  width: 100%;
  flex: 1 0 100px;
  background: ${theme.colors.primaryLight};
  padding: 0 ${theme.space[4]} ${theme.space[4]};
  z-index: 2;

  ${mq[1]} {
    position: relative;
    display: block;
    width: auto;
    top: initial;
    left: initial;
    background: none;
    padding: 0;
  }
`;

const SearchBox = styled(ToggleArea)`
  ${mq[1]} {
    flex: 1;
    max-width: 200px;
    margin-right: ${theme.space[3]};
  }
`;

const Menu = styled(ToggleArea)`
  ${mq[1]} {
    flex: 0 0 auto;
    margin-left: auto;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
  align-items: flex-start;

  ${mq[1]} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  ${mq[2]} {
    gap: ${theme.space[4]};
  }

  ${mq[3]} {
    gap: ${theme.space[5]};
  }
`;

const MenuItem = styled.li`
  line-height: 1;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;

    ${mq[2]} {
      font-size: ${theme.fontsize[4]};
    }
  }
`;

const MenuDetails = styled.details`
  position: relative;

  & > summary {
    cursor: pointer;
    line-height: 1;
    font-weight: 400;

    ${mq[2]} {
      font-size: ${theme.fontsize[4]};
    }
  }

  &[open] > ${MenuList} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    ${mq[1]} {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;

      background-color: ${theme.colors.white};
      border: 2px solid ${theme.colors.primaryLight};
      border-radius: ${theme.radii[1]};

      padding: 4px;
    }

    & > ${MenuItem} {
      color: ${theme.colors.text};

      ${mq[1]} {
        color: ${theme.colors.gray};
      }

      width: 100%;

      & > a {
        display: block;
        width: 100%;
        padding: 10px 20px;
      }
    }

    & > ${MenuItem}:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primaryLight};
      border-radius: ${theme.radii[1]};
    }
  }
`;

function Header({ hasHeroBelow }) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // TODO: use raf to throttle events
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const currentWindowPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrolled = currentWindowPos > 0;

    setScrolled(scrolled);
  }

  function handleMenuBtnClick() {
    setNavOpen((s) => !s);
    setSearchOpen(false);
  }

  function handleSearchBtnClick() {
    setSearchOpen((s) => !s);
    setNavOpen(false);
  }

  return (
    <StyledHeader collapsed={scrolled} id="header">
      <HeaderContainer>
        <Logo>
          <Link to="/">
            <img src="/img/decap-logo-white.svg" alt="Decap CMS" />
          </Link>
        </Logo>
        <MenuActions>
          <SearchBtn onClick={handleSearchBtnClick}>
            {isSearchOpen ? (
              <span>&times;</span>
            ) : (
              <img src={searchIcon} alt="search" />
            )}
          </SearchBtn>
          <MenuBtn onClick={handleMenuBtnClick}>
            {isNavOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </MenuBtn>
        </MenuActions>
        <SearchBox open={isSearchOpen}>
          <DocSearch />
        </SearchBox>
        <Menu open={isNavOpen}>
          <MenuList>
            <MenuItem>
              <Link to="/docs/intro/">Docs</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/services/" className="ga-menu">
                Pro Help
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/community/">Community</Link>
            </MenuItem>

            <MenuItem>
              <MenuDetails>
                <summary>Resources</summary>

                <MenuList>
                  <MenuItem>
                    <Link to="/plugins">Plugins</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/themes">Themes</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/config-builder">ConfigBuilder</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/showcases">Showcases</Link>
                  </MenuItem>
                </MenuList>
              </MenuDetails>
            </MenuItem>

            <MenuItem>
              <Link to="/blog/">Blog</Link>
            </MenuItem>
            <MenuItem
              css={css`
                height: 28px;
              `}
            >
              <a
                href="https://github.com/decaporg/decap-cms"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <SiGithub size={28} />
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
