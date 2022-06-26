import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppSelector } from '../../../store';
import { dataEN } from '../constants/dataEn';
import { dataRU } from '../constants/dataRu';
import { CustomizedAxisTick } from '../CustomAxis';

export const ProgressPlot = (props: any) => {
  const { currentLang } = useAppSelector((state) => state.langReducer);
  const data = currentLang === 'ru' ? dataRU : dataEN;

  const chartData = data.map((obj, index) => {
    return { ...obj, опыт: props.data[index] };
  });

  return (
    <LineChart width={900} height={300} data={chartData}>
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="опыт" stroke="#F8B414" strokeWidth={2} />
    </LineChart>
  );
};
