import './App.css'
import useSwitch from './useSwitch'

function App() {

  const [isOn, toggle] = useSwitch(); // ritorno un array con un booleano (isOn) e la funzione toggle che lo cambia da true e false tramite button

  return (
    <>
      <h1>Snack Custom Hooks</h1>
      <div>
        <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </>
  )
}

export default App
