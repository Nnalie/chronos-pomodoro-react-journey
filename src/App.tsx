import "./App.css";
import { Heading } from "./components/heading";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Heading>Olá mundo 1!</Heading>
      <Heading>Olá mundo 2!</Heading>
      <Heading>Olá mundo 3!</Heading>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </>
  );
}

export default App;
