import Button from "./Button";
import Header from "./Header";
import List from "./List";
import Person from "./Person";

const App = () => {
  return (
    <div>
      <Person name={"peter"} age={99} />
      <Button
        text={"Hello"}
        onClick={() => {
          alert("Hello peter");
        }}
      />
      <Header title={"This is title"} />
      <List item={"item1"} />
    </div>
  );
};
export default App;
