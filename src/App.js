import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="app">
      <div className="container">
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
