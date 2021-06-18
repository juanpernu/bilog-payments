import React from 'react'
import PropTypes from 'prop-types'

const Chart = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={colorFill}
      d={`
        M7
        24h-6v-6h6v6zm8-9h-6v9h6v-9zm8-4h-6v13h6v-13zm0-11l-6
        1.221
        1.716
        1.708-6.85
        6.733-3.001-3.002-7.841
        7.797
        1.41
        1.418
        6.427-6.39
        2.991
        2.993 8.28-8.137
        1.667
        1.66
        1.201-6.001z
      `}
    />
  </svg>
);

Chart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Chart.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Chart;
