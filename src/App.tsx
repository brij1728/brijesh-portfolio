import "./App.css";

import { Footer, Navbar } from "./layouts";

import { AppRouter } from "./routes";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="main-content">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
