import Table from "./Table";

function App() {
  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type">
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        <Table />
      </div>
    </div>
  );
}
