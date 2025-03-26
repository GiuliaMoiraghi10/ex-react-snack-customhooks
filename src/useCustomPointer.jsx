import { useState, useEffect } from 'react'

export default function useCustomPointer(component) {
    const [posizione, setPosizione] = useState({ x: 0, y: 0 }) //posizione iniziale del mouse

    useEffect(() => {
        const handleMouseMove = event => {
            setPosizione({ x: event.clientX, y: event.clientY })
        }
        document.addEventListener('mousemove', handleMouseMove)
        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div style={{
            position: 'fixed',
            top: posizione.y,
            left: posizione.x,
            transform: 'translate(-50%, -50%',
            cursor: 'none'
        }}>
            {component}
        </div>
    )


}