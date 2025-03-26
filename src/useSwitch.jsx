import { useState } from "react"

export default function useSwitch(initialValue = false) {
    const [isOn, setIsOn] = useState(initialValue) // se non passo valore, sarà = a false

    // creo funzione toggle che deve fare un setIsOn al valore opposto di quello iniziale
    // dal valore corrente mi deve tornare il non valore corrente
    const toggle = () => {
        setIsOn(current => !current)
    }

    // devo ritornare isOn e toggle
    return [isOn, toggle]
}