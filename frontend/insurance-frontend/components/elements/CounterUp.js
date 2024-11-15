'use client'
import { useEffect, useState, useRef } from 'react'
import Counter from './Counter'

export default function CounterUp({ end }) {
    const [inViewport, setInViewport] = useState(false)
    const countRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInViewport(true)
                    observer.disconnect() // Stop observing after it becomes visible
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
            }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current)
            }
        }
    }, [])

    return (
        <span ref={countRef} className="count-text">
            {inViewport && <Counter end={end} duration={20} />}
        </span>
    )
}
