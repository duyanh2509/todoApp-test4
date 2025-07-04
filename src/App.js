import "./App.css";
import { useState } from "react";
import InputBarContainer from "./components/InputContainer";
import ListItems from "./components/ListItems";

function App() {
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState([]);

  function handleAdd() {
    if (inputData.trim() !== "") {
      const currentTime = new Date();
      const newItem = {
        description: inputData,
        date: currentTime.toLocaleDateString(),
        time: currentTime.toLocaleTimeString(),
      };
      setList([newItem, ...list]);
      setInputData("");
    }
  }

  function handleDelete(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function handleInput(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <>
      <h1 className="text-lg">Bảng Việc Làm</h1>
      <div className="body">
        <div className="content-container">
          <InputBarContainer
            inputData={inputData}
            setInputData={setInputData}
            onInput={handleInput}
            onAdd={handleAdd}
          />
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mô tả</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <ListItems
                  key={index}
                  index={index + 1}
                  item={item}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
