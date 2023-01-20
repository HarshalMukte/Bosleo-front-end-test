
// import MaterialTable from 'material-table'
import React from 'react'
import DataTable from 'react-data-table-component'



const Table = ({columns, data}) => {
  return (
    <div className='Table'>
      <DataTable 
        columns={columns}
        data={data}
      />
    </div>
  )
}

export default Table