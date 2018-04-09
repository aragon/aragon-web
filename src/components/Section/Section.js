import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grid } from '@aragon/ui'

const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ large }) => grid(large ? 12 : 10)}px;
`

const Section = ({ large, visual, className, ...props }) => {
  const containerProps = { className }
  const content = (
    <StyledContent large={large}>
      <div {...props} />
    </StyledContent>
  )
  if (visual) return <div {...containerProps}>{content}</div>
  return <section {...containerProps}>{content}</section>
}

Section.propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool,
  visual: PropTypes.bool,
}

Section.defaultProps = {
  large: false,
  visual: false,
}

export default Section
