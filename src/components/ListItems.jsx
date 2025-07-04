function ListItems({ index, item, onDelete }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{item.description}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>
        <button onClick={() => onDelete(index - 1)}>Xóa</button>
      </td>
    </tr>
  );
}

export default ListItems;
