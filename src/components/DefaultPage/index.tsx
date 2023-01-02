import styles from "./s.module.scss";

const DefaultPage: React.FC = ({
  children,
}: {
  children?: React.ReactElement;
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.divContent}>{children}</div>
    </div>
  );
};

export default DefaultPage;
