import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 900);
          }, 200);
          return 100;
        }
        return c + Math.floor(Math.random() * 4) + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#111111" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                color: "#6B6560",
                fontSize: "18px",
                letterSpacing: "0.3em",
                marginBottom: "40px",
              }}
            >
              AMAANKHAN PATHAN
            </p>
            <div
              style={{
                width: "160px",
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                position: "relative",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "3px",
                  background: "#FAF8F4",
                  width: `${Math.min(count, 100)}%`,
                }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                color: "#6B6560",
                fontSize: "14px",
                letterSpacing: "0.2em",
                marginTop: "16px",
              }}
            >
              {Math.min(count, 100).toString().padStart(3, "0")}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
