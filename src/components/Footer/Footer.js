import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, themeDark, breakpoint, grid } from '@aragon/ui'

import logo from './assets/logo.svg'
import iconTwitter from './assets/twitter.svg'
import iconMedium from './assets/medium.svg'
import iconRocket from './assets/rocket.svg'

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
  .icon.twitter {
    background-image: url(${iconTwitter});
  }
  .icon.medium {
    background-image: url(${iconMedium});
  }
  .icon.rocket {
    background-image: url(${iconRocket});
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

const Footer = ({ compact }) => (
  <StyledFooter compact={compact}>
    <div className="main">
      <div className="logo">
        <img src={logo} width="158" height="50" alt="Aragon" />
      </div>
      <div className="all-links">
        {!compact && (
          <div className="menus">
            <nav className="menu-1">
              <ul>
                <li>
                  <a href="https://aragon.one/core">Users</a>
                </li>
                <li>
                  <a href="https://hack.aragon.org/">Developers</a>
                </li>
                <li>
                  <a href="https://aragon.one/network">Network</a>
                </li>
                <li>
                  <a href="https://aragon.one/about">About</a>
                </li>
              </ul>
            </nav>
            <nav className="menu-2">
              <ul>
                <li>
                  <a href="https://wiki.aragon.one" target="_blank">
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aragon" target="_blank">
                    Code
                  </a>
                </li>
                <li>
                  <a href="https://aragon.one/join">Join us</a>
                </li>
                <li>
                  <a href="https://blog.aragon.one/" target="_blank">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="menu-3">
              <ul>
                <li>
                  <strong>
                    <a href="https://app.aragon.one/" target="_blank">
                      Try Aragon Core 0.5
                    </a>
                  </strong>
                </li>
                <li>
                  <a href="mailto:contact@aragon.one">Contact Us</a>
                </li>
                <li>
                  <a href="mailto:media@aragon.one">Media/Press Inquiries</a>
                </li>
                <li>
                  <a
                    href="https://wiki.aragon.one/press/press-kit/"
                    target="_blank"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <ul className="social-links">
          <li>
            <a
              href="https://twitter.com/AragonProject"
              className="icon twitter"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://blog.aragon.one/"
              className="icon medium"
              target="_blank"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              href="https://aragon.chat/"
              className="icon rocket"
              target="_blank"
            >
              Community
            </a>
          </li>
        </ul>
      </div>
    </div>
  </StyledFooter>
)

Footer.propTypes = {
  compact: PropTypes.bool,
}

Footer.defaultProps = {
  compact: false,
}

export default Footer
