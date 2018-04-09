import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, BreakPoint, Button, Text } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'
import Logo from './Logo'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledHeader = styled.div`
  padding: 0 12px;
  background: ${theme.contentBackground};

  .in {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 60px;
    max-width: 1140px;
    margin: 0 auto;
  }

  .menu,
  .buttons {
    display: flex;
    align-items: center;
  }
  .menu {
    align-items: stretch;
  }
  .logo,
  .logo a {
    display: flex;
    align-items: center;
  }
  .title {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .menu-items {
    display: flex;
    align-items: center;
  }
  .nav {
    display: flex;
    align-items: stretch;
    list-style: none;
    margin-left: 20px;
  }
  .nav ul {
    display: flex;
    align-items: stretch;
  }
  .button {
    margin-left: 10px;
    &:first-child {
      margin: 0;
    }
  }

  ${medium(`
    .in {
      min-height: 70px;
    }
  `)};
  ${large(`
    .in {
      min-height: 70px;
    }
    .nav {
      margin-left: 45px;
    }
  `)};

  ${({ withTitle }) => {
    if (!withTitle) return ''
    return `
      .logo {
        padding-right: 40px;
        border-right: 1px solid #e8e8e8;
        padding-top: 6px;
        padding-bottom: 8px;
      }
      .logo img:first-child {
        margin-right: 10px;
      }
    `
  }};
`

const Header = ({ title, menuItems, renderMenuItemLink }: Props) => (
  <StyledHeader withTitle={Boolean(title)}>
    <div className="in">
      <div className="menu">
        <Logo compact={Boolean(title)} renderLink={renderMenuItemLink} />
        {title && (
          <div className="title">
            <h1>
              <Text size="xlarge">{title} </Text>
            </h1>
          </div>
        )}
        {menuItems.length > 0 && (
          <div className="menu-items">
            <BreakPoint to="medium">
              <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
            </BreakPoint>
            <BreakPoint from="medium">
              <nav className="nav">
                <ul>
                  {menuItems.map((item, i) => (
                    <MenuItem
                      key={i}
                      url={item[0]}
                      label={item[1]}
                      active={item[2]}
                      renderLink={renderMenuItemLink}
                    />
                  ))}
                </ul>
              </nav>
            </BreakPoint>
          </div>
        )}
      </div>
      {!title && (
        <BreakPoint from="medium">
          <div className="buttons">
            <div className="button">
              <a href="https://app.aragon.one/" target="_blank">
                <Button mode="strong">Try Aragon Core 0.5</Button>
              </a>
            </div>
          </div>
        </BreakPoint>
      )}
    </div>
  </StyledHeader>
)

Header.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.array,
  renderMenuItemLink: PropTypes.func,
}

Header.defaultProps = {
  menuItems: [],
}

export { StyledHeader }
export default Header
