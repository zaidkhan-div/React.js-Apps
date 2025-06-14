// For columns, you use:

// table.getHeaderGroups() → Gets column headers (structure).

// table.getAllColumns() → Gets column definitions (if you need metadata).

// Key Column Methods:
// Method	Purpose	Example Use Case
// getHeaderGroups()	Gets grouped headers (for rendering)	Inside <thead>
// getAllColumns()	Gets all column objects (e.g., hiding)	Toggle column visibility programmatically
// getVisibleColumns()	Gets only visible columns	Syncing with UI controls

// Column Pinning State
// column.getCanPin: Use to determine if a column can be pinned.
// Column Sizing
// ColumnResizeMode:"onChange",
// ColumnResizeMode: "onChange",
// EnableColumnResizing: true,

// Column Filtering Guide  


// Column Visibility (enableHiding)

// The column visibility feature allows table columns to be hidden or shown dynamically. In previous versions of react-table, this feature was a static property on a column, but in v8, there is a dedicated columnVisibility state and APIs for managing column visibility dynamically.

// const [columnVisibility, setColumnVisibility] = useState({
//   columnId1: true,
//   columnId2: false, //hide this column by default
//   columnId3: true,
// });

// state:{
// columnVisibility   // this is the state
// } 
// onColumnVisibilityChange:setColumnVisibilty 