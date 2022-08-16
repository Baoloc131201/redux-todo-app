import { Checkbox, Row, Tag } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus } from "../../redux/actions";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
const Todo = ({ name, prioriry, completed, id }) => {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]}>{prioriry}</Tag>
    </Row>
  );
};

export default Todo;
