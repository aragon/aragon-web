import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, themeDark, breakpoint, grid } from '@aragon/ui'

import logo from './assets/logo.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledFooter = styled.footer`
  padding: 60px 20px 35px;
  font-size: 15px;
  color: grey;
  background: ${colors.Rain['Shark']};

  ${({ compact }) => {
    if (!compact) return ''
    return `
      padding-top: 30px;
      padding-bottom: 30px;
      .icon {
        padding-left: 25px;
      }
    `
  }};

  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }

  .logo {
    margin-bottom: 60px;
  }
  .menus {
    display: flex;
  }
  .menu-1,
  .menu-2,
  .menu-3 {
    margin-right: 35px;
  }
  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .social-links li {
    display: flex;
    margin-left: 75px;
  }
  .icon {
    overflow: hidden;
    text-indent: -9999px;
    padding-left: 30px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  li {
    list-style: none;
    line-height: 2;
  }
  a {
    text-decoration: none;
  }
  strong a {
    color: ${themeDark.accent};
    font-weight: 400;
  }

  ${medium(`
    padding-bottom: 70px;

    .all-links {
      display: flex;
      justify-content: space-between;
    }
    .social-links {
      display: block;
      margin-top: 0;
      margin-left: 120px;
    }
    .social-links li {
      display: block;
    }
    .icon {
      overflow: visible;
      text-indent: 0;
      background-position: 0 50%;
    }
  `)};

  ${large(`
    padding-top: 90px;
    .main {
      flex-direction: row;
      max-width: ${grid(12, 11)}px;
    }
    .logo {
      width: ${grid(3, 3)}px;
      flex-shrink: 0;
    }
    .menus {
      display: flex;
      width: ${grid(6, 6)}px;
    }
    .menu-1 {
      width: ${grid(2, 2)}px;
      margin-right: 0;
    }
    .menu-2 {
      width: ${grid(2, 2)}px;
    }
    .menu-3 {
      width: ${grid(2, 2)}px;
    }
    .social-links {
      width: ${grid(3)}px;
      margin-left: 0;
    }
    li {
      margin: 0 0 10px;
      line-height: 1.5;
    }
  `)};
`

const FooterLink = ({ label, url, icon, external, strong }) => {
  const props = { children: label, href: url }
  if (external) {
    props.target = '_blank'
  }
  if (icon) {
    props.className = 'icon'
    props.style = { backgroundImage: `url(${icon})` }
  }
  const link = <a {...props} />
  if (strong) {
    return <strong>{link}</strong>
  }
  return link
}

class Footer extends React.Component {
  menus() {
    const menus = this.props.menus.map(items =>
      items.map(([label, url, icon = null]) => ({
        label: label.replace(/^\*/, ''),
        url,
        icon,
        external: /^https?:\/\//.test(url),
        strong: label.startsWith('*'),
      }))
    )
    return {
      groups: menus.slice(0, -1).slice(0, 3),
      socialLinks: menus[menus.length - 1],
    }
  }
  render() {
    const { compact } = this.props
    const { groups, socialLinks } = this.menus()
    return (
      <StyledFooter compact={compact}>
        <div className="main">
          <div className="logo">
            <img src={logo} width="158" height="50" alt="Aragon" />
          </div>
          <div className="all-links">
            {!compact && (
              <div className="menus">
                {groups.slice(0, 3).map((items, i) => (
                  <nav key={i} className={`menu-${i + 1}`}>
                    <ul>
                      {items.map((item, i) => (
                        <li key={i}>
                          <FooterLink {...item} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            )}
            {socialLinks.length > 0 && (
              <ul className="social-links">
                {socialLinks.map((item, i) => (
                  <li key={i}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </StyledFooter>
    )
  }
}

Footer.propTypes = {
  compact: PropTypes.bool,
  menus: PropTypes.array,
}

Footer.defaultProps = {
  compact: false,
  menus: [],
}

export default Footer
