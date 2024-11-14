import React from "react";
import { Select } from "antd";

const CustomSelect = ({ handleChange, id }) => (
  <Select
    defaultValue="Select category"
    style={{
      width: 200,
    }}
    id={id}
    onChange={handleChange}
    options={[
      {
        label: <span>All</span>,
        value: "",
      },
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
          {
            label: <span>Jewelery</span>,
            value: "jewelery",
          },
        ],
      },
      {
        label: <span>Accessories</span>,
        title: "accessory",
        options: [
          {
            label: <span>Electronics</span>,
            value: "electronics",
          },
        ],
      },
    ]}
  />
);
export default CustomSelect;
