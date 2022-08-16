import "./App.css";
import { Typography, Divider } from "antd";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div
      className="App"
      style={{
        width: 500,
        margin: "10px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Typography.Title style={{ textAlign: "center" }}>
        TODO APP with REDUX
      </Typography.Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
