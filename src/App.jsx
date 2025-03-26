import './App.css'
import useSwitch from './useSwitch'
import useDate from './useDate';
import useCustomPointer from './useCustomPointer';

function App() {

  const [isOn, toggle] = useSwitch(); // SNACK 1 - ritorno un array con un booleano (isOn) e la funzione toggle che lo cambia da true e false tramite button
  const currentDate = useDate() // SNACK 2 - mi fa vedere la data e l'ora attuale
  const customPointer = useCustomPointer("🔥"); // SNACK 3 - sostituisce cursore del mouse con icona

  return (
    <>
      <h1>Snack Custom Hooks - useSwitch</h1>
      <div>
        <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <h1>Snack Custom Hooks - useDate</h1>
      <div>
        <h2>Data e ora attuali:</h2>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      <h1>Snack Custom Hooks - useCustomPointer</h1>
      <div>
        <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
        {customPointer}
      </div>
    </>
  )
}

export default App
