import * as React from "react";
import ReactDOM from "react-dom/client";
import create from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => {
    return set((state) => ({ bears: state.bears + 1 }));
  },
  removeAllBears: () => set({ bears: 0 }),
}));

function BearCounter() {
  const bears = useStore((s) => s.bears);

  return <div>{"🐻".repeat(bears)}</div>;
}

function BearControls() {
  const increasePopulation = useStore((s) => s.increasePopulation);

  return <button onClick={increasePopulation}>add bear</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BearCounter />
    <BearControls />
  </>
);
