import "./index.css";
export const DragDrop = ({ ...props }) => {
  return (
    <ul id="columns">
      {props.data.map((item, index) => {
        return (
          <li
            id={index}
            onDragStart={(e) => props.dragStart(e, index)}
            onDragEnter={(e) => props.dragEnter(e, index)}
            onDragEnd={props.drop}
            draggable="true"
            className="column"
          >
            <header>{item[0]}</header>
          </li>
        );
      })}
    </ul>
  );
};
