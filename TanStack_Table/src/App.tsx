import Table from "./Components/Table"
// import GetFilteredRowModelTable from "./Components/GetFilteredRowModelTable"
import FilteredTable from './Components/FilteredTable'

const App = () => {
  return (
    <div>
      <Table />
      {/* Another Filtered Table */}
      {/* <GetFilteredRowModelTable /> */}
      <FilteredTable />
    </div>
  )
}

export default App