import styles from "./s.module.scss";

interface design {
  color1: string;
  color2: string;
}

const I: design = {
  color1: "#ffffff",
  color2: "#f4f4f4",
};

const B: design = {
  color1: "#444",
  color2: "#333",
};

const O: design = {
  color1: "#F7931E",
  color2: "#E7830E",
};

const Magic = () => {
  const SIZE = 19;
  const MAX_DELAY = 800;

  const grid: Array<Array<design>> = [
    [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
    [I, I, I, I, I, I, B, B, B, B, B, B, B, I, I, I, I, I, I],
    [I, I, I, I, B, B, I, I, I, I, I, I, I, B, B, I, I, I, I],
    [I, I, I, B, I, I, I, I, I, I, I, I, I, I, I, B, I, I, I],
    [I, I, B, I, I, I, I, I, B, B, B, I, I, I, I, I, O, I, I],
    [I, I, B, I, I, I, B, B, I, I, I, B, B, I, I, I, O, I, I],
    [I, B, I, I, I, B, I, I, I, I, I, I, I, O, I, I, I, O, I],
    [I, B, I, I, I, B, I, I, I, I, I, I, I, O, I, I, I, O, I],
    [I, B, I, I, B, I, I, I, I, I, I, I, I, I, O, I, I, O, I],
    [I, B, I, I, B, I, I, I, I, I, I, I, I, I, O, O, O, O, I],
    [I, B, I, I, B, I, I, I, I, I, I, I, I, I, O, I, I, O, I],
    [I, B, I, I, I, B, I, I, I, I, I, I, I, O, I, I, I, O, I],
    [I, B, I, I, I, B, I, I, I, I, I, I, I, O, I, I, I, O, I],
    [I, I, B, I, I, I, B, B, I, I, I, B, B, I, I, I, O, I, I],
    [I, I, B, I, I, I, I, I, B, B, B, I, I, I, I, I, O, I, I],
    [I, I, I, B, I, I, I, I, I, I, I, I, I, I, I, B, I, I, I],
    [I, I, I, I, B, B, I, I, I, I, I, I, I, B, B, I, I, I, I],
    [I, I, I, I, I, I, B, B, B, B, B, B, B, I, I, I, I, I, I],
    [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
  ];
  return (
    <div
      className={styles.divMagic}
      style={{
        width: "19rem",
        height: "19rem",
      }}
    >
      {grid.map((rows, row) => {
        return (
          <div className={styles.magicRow}>
            {rows.map((values, col) => {
              return (
                <div className={styles.magicContainer}>
                  <div
                    className={styles.magic}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${values.color1}, ${values.color2})`,
                      animationDelay: `${Math.round(
                        (MAX_DELAY * Math.min(row, col)) / SIZE
                      )}ms`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Magic;
