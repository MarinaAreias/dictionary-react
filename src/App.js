import "./App.css";
import Dictionary from "./Dictionary";
import Button from "./Button";
import Footer from "./Footer";

export default function App(props) {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Your Dictionary</h1>
          <Button />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
