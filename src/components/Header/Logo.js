import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BreakPoint } from '@aragon/ui'

import logo from './assets/logo.svg'
import logoCompact from './assets/logo-compact.svg'
import logoMinimal from './assets/logo-minimal.svg'

const Container = styled.span`
  display: flex;
  align-items: center;
`

const Logo = ({ compact, renderLink }) => {
  return (
    <span className="logo">
      {renderLink({
        url: '/',
        children: (
          <Container>
            <BreakPoint to="medium">
              <img alt="Aragon" src={logoMinimal} height={40} />
            </BreakPoint>
            <BreakPoint from="medium" to="large">
              <img alt="Aragon" src={logoMinimal} height={50} />
            </BreakPoint>
            <BreakPoint from="large">
              <img
                alt="Aragon"
                src={compact ? logoCompact : logo}
                height={compact ? 36 : 51}
              />
            </BreakPoint>
          </Container>
        ),
      })}
    </span>
  )
}

Logo.propTypes = {
  compact: PropTypes.bool,
  renderLink: PropTypes.func,
}

Logo.defaultProps = {
  compact: false,
  renderLink: ({ url, children }) => <a href={url}>{children}</a>,
}

export default Logo
