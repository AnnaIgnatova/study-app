import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppSelector } from '../../../store';
import { dataEN } from '../constants/dataEn';
import { dataRU } from '../constants/dataRu';
import { CustomizedAxisTick } from '../CustomAxis';

export const ProgressPlot = () => {
  const { currentLang } = useAppSelector((state) => state.langReducer);

  return (
    <LineChart width={900} height={300} data={currentLang === 'ru' ? dataRU : dataEN}>
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="опыт" stroke="#F8B414" strokeWidth={2} />
    </LineChart>
  );
};
