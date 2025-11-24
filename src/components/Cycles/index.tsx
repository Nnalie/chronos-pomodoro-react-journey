import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array(state.currentCycle).fill(null);

  const cycleDescMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descando longo",
  };
  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>
      <div className={styles.dots}>
        {/* <span className={`${styles.dot} ${styles.workTime}`}></span> */}
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              /**
               * Sempre que se utilizar um map ou array dentro de um component para exibir
               * uma lista de jsx deve-se passar uma key para o react identificar a renderização
               */
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.dot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
