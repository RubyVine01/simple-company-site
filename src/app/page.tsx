import styles from "./page.module.css";
import MainContent from "@/components/MainContent";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <MainContent />
    </div>
  );
}
