import { useState, useEffect, ChangeEvent } from 'react';
import Dropdown from './components/Dropdown';
import './App.css';
import { getDurations } from './utils';
import useCalculate from './hooks/useCalculate';

function App() {
  const [durations, setDurations] = useState<string[]>([]);
  const {
    score,
    value,
    setValue,
    loading,
    handleCalculate
  } = useCalculate();

  useEffect(() => {
    const durations = getDurations();
    setDurations(durations);
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement> ,attribute: string) => {
    setValue({
      ...value,
      [attribute]: e.target.value,
    })
  }

  return (
    <div className="App">
      <h3>Test Project</h3>
      <div className="item">
        <Dropdown
          label="Duration in bed"
          items={durations}
          onChange={(e) => onChange(e, 'bed')}
        />
      </div>
      <div className="item">
        <Dropdown
          label="Duration asleep"
          items={durations}
          onChange={(e) => onChange(e, 'asleep')}
        />
      </div>
      <div className="item">
        <button
          disabled={!(value.asleep && value.bed)}
          onClick={() => handleCalculate()}
        >
          Calculate
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {!!score && !loading && <p>{score}</p>}
    </div>
  );
}

export default App;
