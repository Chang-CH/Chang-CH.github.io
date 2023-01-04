import { useColorMode } from "@chakra-ui/react";
import styles from "./s.module.scss";

interface design {
  color1: string;
  color2: string;
  id: number;
}

const palette_dark = [
  {
    id: 0,
    color1: "#ffffff",
    color2: "#f4f4f4",
  },
  {
    id: 1,
    color1: "#444",
    color2: "#333",
  },
  {
    id: 2,
    color1: "#F7931E",
    color2: "#E7830E",
  },
];

const palette_light = [
  {
    id: 0,
    color1: "#fffcf2",
    color2: "#fcf7e3",
  },
  {
    id: 1,
    color1: "#444",
    color2: "#333",
  },
  {
    id: 2,
    color1: "#F7931E",
    color2: "#E7830E",
  },
];

const StaggerGizmo = () => {
  const SIZE = 19;
  const MAX_DELAY = 2000;
  const { colorMode, toggleColorMode } = useColorMode();

  const grid: Array<Array<number>> = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                      backgroundImage: `linear-gradient(135deg, ${
                        colorMode === "light"
                          ? palette_light[values].color1
                          : palette_dark[values].color1
                      }, ${
                        colorMode === "light"
                          ? palette_light[values].color2
                          : palette_dark[values].color2
                      })`,
                      animationDelay: `${Math.round(
                        (MAX_DELAY * (row + col)) / (SIZE * 2)
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

export default StaggerGizmo;
