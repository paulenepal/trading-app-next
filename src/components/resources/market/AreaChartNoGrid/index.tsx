import React from "react";
import { timeFormat } from "d3-time-format";
import { discontinuousTimeScaleProviderBuilder, Chart, ChartCanvas, AreaSeries, MouseCoordinateX, MouseCoordinateY } from "react-financial-charts";

const AreaChartNoGrid = ({ chartData, height, width }) => {
  const ScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      (d) => new Date(d.date)
    );
  // const height = 700;
  // const width = 900;
  const margin = { left: 0, right: 48, top: 0, bottom: 24 };

  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
    chartData
  );
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const chartHeight = height - margin.top - margin.bottom;
  const yExtents = (data) => [data.close];

  const dateTimeFormat = "%d %b";
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  return (
    <ChartCanvas
      height={height}
      ratio={3}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} height={chartHeight} yExtents={yExtents}>
        <AreaSeries yAccessor={(d) => d.close} fillStyle="rgba(38, 166, 154, 0.3)" />
        <MouseCoordinateX
          rectWidth={margin.right}
          displayFormat={timeDisplayFormat}
        />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={timeDisplayFormat}
        />
      </Chart>
    </ChartCanvas>
  );
};

export default AreaChartNoGrid;
