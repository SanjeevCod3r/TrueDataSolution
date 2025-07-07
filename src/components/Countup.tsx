import { useEffect, useRef } from 'react';

interface CountupProps {
  from: number;
  to: number;
  duration: number;
  separator?: string;
}

const Countup: React.FC<CountupProps> = ({ from, to, duration, separator = '' }) => {
  const element = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!element.current) return;
    
    let start = from;
    const increment = (to - from) / (duration * 1000);
    
    const animate = () => {
      start += increment;
      if (start < to) {
        element.current.textContent = start.toFixed(0) + separator;
        requestAnimationFrame(animate);
      } else {
        element.current.textContent = to.toString() + separator;
      }
    };
    
    animate();
  }, [from, to, duration, separator]);

  return <span ref={element}>{from}</span>;
};

export default Countup;
