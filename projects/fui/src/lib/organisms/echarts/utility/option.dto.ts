import { GridDTO, LegendDTO } from './legend-grid.dto';
import { SeriesDTO } from './series.dto';
import { DataZoomDTO, TitleDTO } from './title-datazoom.dto';
import { ToolBoxDTO, TooltipDTO } from './tootip-toolbox.dto';
import { VisualMapDTO } from './visual-map.dto';
import { XAxisDTO, YAxisDTO } from './xyAxis.dto';

/** Option Echart
 * @description
 * This is Option/Setting for Chart, Don't modify it directly if you don't know what are you doing.
 * @example
 * option: OptionChart = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'normal',
          },
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };
*/
export interface OptionChart {
  tooltip?: TooltipDTO;
  toolbox?: ToolBoxDTO;
  dataZoom?: Array<DataZoomDTO> | DataZoomDTO;
  title?: TitleDTO;
  grid?: GridDTO;
  legend?: LegendDTO;
  xAxis?: Array<XAxisDTO> | XAxisDTO;
  yAxis?: Array<YAxisDTO> | YAxisDTO;
  series?: Array<SeriesDTO> | SeriesDTO;
  visualMap?: VisualMapDTO;
}
