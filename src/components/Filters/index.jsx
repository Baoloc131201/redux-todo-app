import { Col, Radio, Row, Select, Tag, Typography } from "antd";
import Search from "antd/lib/transfer/search";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  PrioritiesFilterChange,
  searchFilterChange,
  statusFilterChange,
} from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [filterStatus, setFiltersStatus] = useState("All");
  const [filterPriorities, setFilterPriorities] = useState([]);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const handleStatusChange = (e) => {
    setFiltersStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setFilterPriorities(value);
    dispatch(PrioritiesFilterChange(value));
  };
  return (
    <Row>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriorities}
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
      </Col>
    </Row>
  );
};

export default Filters;
