import { HistoricalDates } from '../HistoricalDates/HistoricalDates.tsx';
import { historicalData } from '../../data/mockData.ts';

function App() {
  return (
      <div>
        <HistoricalDates data={historicalData} />
      </div>
  )
}

export default App
