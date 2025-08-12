import { Button } from "./components/basic-components/Button";
import  { Checkbox } from "./components/basic-components/Checkbox";
import { FileInput } from "./components/basic-components/FileInput";
import { NumberInput } from "./components/basic-components/NumberInput";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", padding: "20px" }}>
      <Button label="Hello World" />
      <Checkbox label="Hello World" />
      <FileInput buttonText="Upload File" placeholder="No file chosen" />
      <NumberInput />
    </div>
  );
}

export default App;