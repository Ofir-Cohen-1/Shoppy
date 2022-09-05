import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { Sparklines } from 'react-sparklines';


const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <Sparklines id={id} height={height} width={width} data={[5, 10, 5, 20, 8, 15]} limit={5} margin={5} type={type}>
</Sparklines>
    // <SparklineComponent
    //   id={id}
    //   height={height}
    //   width={width}
    //   color={color}
    //   lineWidth={1}
    //   valueType="Numeric"
    //   fill={color}
    //   border={{ color: currentColor, width: 2 }}
    //   dataSource={data}
    //   xName="x"
    //   yName="y"
    //   type={type}
    //   tooltipSettings={{
    //     visible: true,
    //     format: "${x} : data ${y}",
    //     trackLineSettings: { visible: true },
    //   }}
    // >
    //   <Inject services={[SparklineTooltip]} />
    // </SparklineComponent>
  );
};

export default SparkLine;
