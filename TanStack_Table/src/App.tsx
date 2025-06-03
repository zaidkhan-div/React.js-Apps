import Table from "./Components/Table"
import GetFilteredRowModelTable from "./Components/GetFilteredRowModelTable"

const App = () => {
  return (
    <div>
      <Table />
      {/* Another Filtered Table */}
      <GetFilteredRowModelTable />
    </div>
  )
}

export default App