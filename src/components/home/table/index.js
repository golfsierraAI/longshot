import React from "react";
import { intentMap } from "../../../helpers/helpers";
import "./index.css";

export const Table = (props) => {
  const populateTable = (headers, data) => {
    return (
      <table className="table">
        <th>
          <input type="checkbox" />
        </th>
        {headers.map((item) => {
          return <th>{item}</th>;
        })}

        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td className="checkbox-td">
                  <input type="checkbox" />
                </td>
                {item.map((text) => {
                  return <td>{text}</td>;
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
