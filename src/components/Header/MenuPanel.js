import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import ClickOutHandler from 'react-onclickout'
import { spring as springConf, theme, unselectable } from '@aragon/ui'

import close from './assets/panel-close.svg'
import open from './assets/panel-open.svg'

const Container = styled.div`
  min-height: 60px;
  ${unselectable()};
`

const PanelStyles = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  padding-top: 70px;
  line-height: 2;
  font-size: 17px;
  background: ${theme.accent};
  a {
    color: white;
    text-decoration: none;
  }
`

const PanelContent = styled.div`
  padding: 0 60px 20px 30px;
  a {
    display: block;
  }
`

const Toggle = styled.a.attrs({ role: 'button' })`
  position: absolute;
  right: 0;
  z-index: 4;
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

class Panel extends React.Component {
  static defaultProps = {
    renderLink: ({ url, children }) => <a href={url}>{children}</a>,
  }
  state = {
    opened: false,
  }
  toggle = () => {
    this.setState({ opened: !this.state.opened })
  }
  close = () => {
    this.setState({ opened: false })
  }
  render() {
    const { items, renderLink } = this.props
    const { opened } = this.state
    return (
      <Motion
        style={{
          openProgress: spring(Number(opened), springConf('fast')),
        }}
      >
        {({ openProgress }) => (
          <Container>
            <ClickOutHandler onClickOut={this.close}>
              <Toggle onClick={this.toggle}>
                <img
                  alt=""
                  width="22"
                  height="22"
                  src={opened ? close : open}
                />
              </Toggle>
              <PanelStyles
                style={{
                  display: openProgress > 0 ? 'block' : 'none',
                  opacity: openProgress,
                  transform: `translateY(-${(1 - openProgress) * 5}px)`,
                }}
              >
                <PanelContent>
                  {items.map(([url, label, active]) => (
                    <div key={url} onClick={this.close}>
                      {renderLink({
                        url,
                        children: label,
                      })}
                    </div>
                  ))}
                </PanelContent>
              </PanelStyles>
            </ClickOutHandler>
          </Container>
        )}
      </Motion>
    )
  }
}

Panel.propTypes = {
  items: PropTypes.array,
  renderLink: PropTypes.func,
}

export default Panel
