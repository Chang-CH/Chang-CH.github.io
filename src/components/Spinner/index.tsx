import { useColorMode } from "@chakra-ui/react";
import { ReactComponent as LightLogo } from "_assets/Logo2Light.svg";
import { ReactComponent as DarkLogo } from "_assets/Logo2Dark.svg";
import styles from "./s.module.scss";

function Spinner() {
  const { colorMode } = useColorMode();
  return colorMode ? (
    <LightLogo className={styles.spinning} width="10rem" height="10rem" />
  ) : (
    <DarkLogo className={styles.spinning} width="10rem" height="10rem" />
  );
}

export default Spinner;
