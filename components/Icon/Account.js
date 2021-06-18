import React from 'react'
import PropTypes from 'prop-types'

const Account = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={colorFill}
      d={`
        M12
        2c5.514
        0
        10
        4.486
        10
        10s-4.486
        10-10
        10-10-4.486-10-10
        4.486-10
        10-10zm0-2c-6.627
        0-12
        5.373-12
        12s5.373
        12
        12
        12
        12-5.373
        12-12-5.373-12-12-12zm0
        3c-4.971
        0-9
        4.029-9
        9s4.029
        9
        9
        9
        9-4.029
        9-9-4.029-9-9-9zm1
        13.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371
        2.229.765
        3.225.54
        1.149-.26
        1.385-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243
        0-1.363
        1.039-2.583
        2.984-2.85v-1.067h1v1.018c.725.019
        1.535.145
        2.442.42l-.362
        1.648c-.768-.27-1.616-.515-2.442-.465-1.489.087-1.62
        1.376-.581
        1.916
        1.711.804
        3.943
        1.401
        3.943
        3.546.002
        1.718-1.344
        2.632-3
        2.864z
      `} />
  </svg>
);

Account.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Account.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Account;
