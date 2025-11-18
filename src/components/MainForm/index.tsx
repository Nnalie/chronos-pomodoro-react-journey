import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";

export function MainForm() {
  // const [taskName, setTaskName] = useState("");
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id={"meuInput"}
          type="text"
          labelText={"Teste"}
          placeholder="teste"
          /**
           * Utilizar 'useState' + 'onChange' quando quiser pegar o valor do input
           * em tempo real, como em uma validação de cpf em tempo real, form controlada
           */
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
          /**
           * Utilizar 'ref' para quando não interessa o que o usuário esteja digitando, pois
           * o input será somente validado após o envio dele.
           */
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
