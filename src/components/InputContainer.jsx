function InputContainer({ inputData, setInputData, onInput, onAdd }) {
  return (
    <div className="input-container">
      <input
        placeholder="Nhập mô tả"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        onKeyDown={onInput}
      />
      <button className="button-add" onClick={onAdd}>
        Thêm
      </button>
    </div>
  );
}

export default InputContainer;
