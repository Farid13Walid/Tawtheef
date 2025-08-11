import { useEffect, useState } from "react";

export default function Counter({ targetValue, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / targetValue), .00001);

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [start, targetValue]);

  return <strong className="number fs-1 fw-bolder display-3 text-white">{count}</strong>;
}
