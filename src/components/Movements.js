import React, { useState, useRef } from "react";

function Movements({ data, movements }) {
  const [movementsData, setMovementsData] = useState(movements);
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

  const handleDragEnterOnMovements = (e, params) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setMovementsData((oldMovements) => {
        let newMovements = JSON.parse(JSON.stringify(oldMovements));
        console.log(newMovements);
        newMovements[params.movementI].items.splice(
          params.itemI,
          0,
          newMovements[currentItem.movementI].items.splice(
            currentItem.itemI,
            1
          )[0]
        );
        dragItem.current = params;
        return newMovements;
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

  const getStylesMovements = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.groupI === params.movementI &&
      currentItem.itemI === params.itemMovementI
    ) {
      return "current movement-item";
    }
    return "movement-item";
  };

  return (
    <>
      <div className="main-container">
        <span className="title">Corrientes filos&oacute;ficas</span>
        <section className="movements-container">
          {movementsData.map((movement, movementI) => (
            <div
              key={movement.title}
              className="card"
              onDragEnter={
                dragging && !movement.items.length
                  ? (e) => {
                      handleDragEnterOnMovements(e, { movementI, itemI: 0 });
                    }
                  : null
              }
            >
              <span className="group-title">{movement.title}</span>
              {movement.items.map((item, itemMovementI) => (
                <div
                  draggable
                  onDragStart={(e) => {
                    handleDragStart(e, { movementI, itemMovementI });
                  }}
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnterOnMovements(e, {
                            movementI,
                            itemMovementI,
                          });
                        }
                      : null
                  }
                  key={movement.title + itemMovementI}
                  className={
                    dragging
                      ? getStylesMovements({ movementI, itemMovementI })
                      : "movement-item"
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
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
