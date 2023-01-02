import { ReactComponent as Logo } from "_assets/Logo2.svg";
import styles from "./s.module.scss";

function Spinner() {
  return <Logo className={styles.spinning} width="50%" height="50%" />;
}

export default Spinner;
