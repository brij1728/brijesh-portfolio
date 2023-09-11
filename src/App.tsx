import "./App.css";

import { AppRouter } from "./routes";

function App() {
  return (
    <div className="app-container">
      <div id="main-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
