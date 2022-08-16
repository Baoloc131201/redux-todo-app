import { Button, Col, Input, Row, Select, Tag } from "antd";
import React, { useState } from "react";
import Todo from "../Todo";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import {
  // todoListSelectors,
  // searchTextSelector,
  todosRemaining,
} from "../../redux/selectors";
const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemaining);
  // const searchText = useSelector(searchTextSelector);
  console.log({ todoList: todoList });
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)", marginTop: "10px" }}>
      <Col span={24} style={{ overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((item, index) => {
          return (
            <Todo
              id={item.id}
              key={item.index}
              name={item.name}
              prioriry={item.priority}
              completed={item.completed}
            />
          );
        })}
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};

export default TodoList;
