import { createEffect, createSignal } from "solid-js";

const CountupTimer = () => {
  const [count, setCount] = createSignal(0);
  const [timerEnabled, setTimerEnabled] = createSignal(false);
  createEffect(() => {
    console.log(`${doubleCount()} second${doubleCount() > 1 ? 's': ''} has elpased!`)
  })
  const doubleCount = () => count() * 2
  const timer = setInterval(() => {
    setCount((c) => c + 1);
  }, 1_000);
  const stopTimer = () => {
    clearInterval(timer);
    setTimerEnabled((c) => !c);
    console.log(`Timer stopped at ${doubleCount()} seconds`)
  };
  return (
    <>
      <div>Seconds Elapsed: {doubleCount()}</div>
      <button disabled={timerEnabled()} onClick={stopTimer}>
        {" "}
        Stop Timer
      </button>
    </>
  );
};

export default CountupTimer;
