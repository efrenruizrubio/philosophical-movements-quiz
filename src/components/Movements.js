import React, { useState, useRef } from "react";

function Movements({ data, movements }) {
<<<<<<< HEAD
  /* const [movementsData, setMovementsData] = useState(movements); */
=======
  /*const [movementsData, setMovementsData] = useState(movements);*/
>>>>>>> 181ae669526bf0a27ab0eb8a5dc5c18f4f655815
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.groupI].items.splice(
          params.itemI,
          0,
          newList[currentItem.groupI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.groupI === params.groupI &&
      currentItem.itemI === params.itemI
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };

  return (
    <>
      <div className="main-container">
        <span className="title">Corrientes filos&oacute;ficas</span>
        <section className="movements-container">
          <div className="card">
            <span>1</span>
          </div>
          <div className="card">
            <span>2</span>
          </div>
          <div className="card">
            <span>3</span>
          </div>
          <div className="card">
            <span>4</span>
          </div>
          <div className="card">
            <span>5</span>
          </div>
          <div className="card">
            <span>6</span>
          </div>
        </section>

        <div className="drag-n-drop">
          {list.map((group, groupI) => (
            <div
              key={group.title}
              className="dnd-group"
              onDragEnter={
                dragging && !group.items.length
                  ? (e) => {
                      handleDragEnter(e, { groupI, itemI: 0 });
                    }
                  : null
              }
            >
              <div className="group-title">{group.title}</div>
              {group.items.map((item, itemI) => (
                <div
                  draggable
                  onDragStart={(e) => {
                    handleDragStart(e, { groupI, itemI });
                  }}
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnter(e, { groupI, itemI });
                        }
                      : null
                  }
                  key={item}
                  className={
                    dragging ? getStyles({ groupI, itemI }) : "dnd-item"
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movements;
