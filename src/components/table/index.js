import React from "react";
import "./index.css";

export const Table = (props) => {
  const [checkedAll, setCheckedAll] = React.useState(false);
  const populateTable = (headers, data) => {
    return (
      <table className="table">
        <tr>
          <th>
            <input
              onChange={() => {
                setCheckedAll(!checkedAll);
                Array.from([
                  ...document.getElementsByClassName("checkBox"),
                ]).forEach((item) => {
                  item.checked = !checkedAll;
                });
              }}
              checked={checkedAll}
              type="checkbox"
            />
          </th>

          {headers.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="checkbox-td">
                  <input className="checkBox" type="checkbox" />
                </td>
                {item.map((text, index) => {
                  return <td key={index}>{text}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return populateTable(props.headers, props.data);
};
