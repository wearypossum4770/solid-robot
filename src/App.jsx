import styles from "./assets/css/App.module.css";
import CountupTimer from "./components/elements/click-counter.jsx";
import MainHeader from "./components/header/main-header.jsx";
function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <MainHeader header="This is a Header" />
      </header>
      <CountupTimer />
    </div>
  );
}

export default App;
