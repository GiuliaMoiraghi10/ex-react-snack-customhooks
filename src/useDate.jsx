import { useEffect, useState } from "react"

export default function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date())

    // ogni secondo va a ricalcolare la data corrente
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return currentDate
}