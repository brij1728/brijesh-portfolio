import "./App.css";

import { Footer, Navbar } from "./layouts";

import { AppRouter } from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
