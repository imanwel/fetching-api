import React from "react";
import { Select } from "antd";

const CustomSelect = ({ handleChange }) => (
  <Select
    defaultValue="Select category"
    style={{
      width: 200,
    }}
    onChange={handleChange}
    options={[
      {
        label: <span>Clothing</span>,
        title: "clothing",
        options: [
          {
            label: <span>Men's clothing</span>,
            value: "men's clothing",
          },
          {
            label: <span>Women's clothing</span>,
            value: "women's clothing",
          },
        ],
      },
    ]}
  />
);
export default CustomSelect;
