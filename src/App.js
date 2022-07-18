import "./App.css";
import RateCalculator from "./components/RateCalculator";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="border-slate-400 border-2 bg-slate-400 p-5 flex flex-col gap-4">
        <RateCalculator />
      </div>
    </div>
  );
}

export default App;
