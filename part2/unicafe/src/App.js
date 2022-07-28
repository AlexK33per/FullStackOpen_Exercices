import Button from './components/Button';
import { useState } from 'react';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbackFlag, setFeedbackFlag] = useState(false)

  function havingData () {
    return good + neutral + bad > 0
  }

  let statisticBlock = (
    <div>
      <Statistics statistic="good" value={good} />
      <Statistics statistic="neutral" value={neutral} />
      <Statistics statistic="bad" value={bad} />
      <Statistics statistic="all" value={good + neutral + bad} />
      <Statistics statistic="average" value={(good - bad) / (good + neutral + bad)} />
      <Statistics statistic="positive" value={good / (good + neutral + bad)} />
    </div>
  )

  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      {
        
      }
      
    </div>
  );
}

export default App;
