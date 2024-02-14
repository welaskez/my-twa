import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useCounterContract } from './hooks/useCounterContract';

function App() {
  const { value, address } = useCounterContract();

  return (
    <div className="App">
      <div className="Container">
        <TonConnectButton />

        <div className="Card">
          <b>Counter address</b>
          <div className="Hint">{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className="Car">
          <b>Counter value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>
      </div>
    </div>
  )
}

export default App
