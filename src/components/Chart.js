import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart } from 'react-easy-chart';

const Chart = ({ data }) => (
  <div>
    <AreaChart
      xType={'time'}
      axes
      tickTimeDisplayFormat={'%e %b'}
      width={700}
      height={500}
      areaColors={['#F3AF75']}
      data={[data]}
    />
  </div>
);

Chart.propTypes = {
  data: PropTypes.array
};

export default Chart;
