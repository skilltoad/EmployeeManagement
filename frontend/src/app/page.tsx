import Image from "next/image";
import styles from "./page.module.css";
import App from "./Func/page";
// import 'bootstrap/dist/css/bootstrap.min.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <App></App>
    </main>
  );
}
