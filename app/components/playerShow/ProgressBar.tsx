import { useState, useEffect } from "react";

interface ProgressBarProps {
  duration: number;
}

export default function ProgressBar({ duration }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = Date.now();

    const animationFrameId = requestAnimationFrame(function animate() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        setProgress((elapsedTime / duration) * 100);
        requestAnimationFrame(animate);
      } else {
        setProgress(100);
      }
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration]);

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%`, backgroundColor: "#02E7F5" }}
      />
    </div>
  );
}
