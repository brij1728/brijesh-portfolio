import "./App.css";

import { AppRouter } from "./routes";
import { Navbar } from "./layouts";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="main-content">
        <AppRouter />
      </div>
    
    </div>
  );
}

export default App;
