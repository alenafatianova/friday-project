import React, { useState } from 'react'

export const Pagination = () => {
//     <TablePagination
//     rowsPerPageOptions={pageOptions}
//     component='div'
//     count={rows.length} 
//     rowsPerPage={packsPerPage}
//     page={pageSize}
//     onChangePage={() => handleChangePage}
//     onChangeRowsPerPage={handleRowsPerPage}
//    />
// const pageOptions = [5, 10, 25]

// const handleChangePage = (newPage: number) => {
//     setCurrentPageAC(newPage)
// } 
// const handleRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => { 
//     dispatch(setPacksSizeAC(parseInt(e.currentTarget.value)))
//     dispatch(setCurrentPageAC(packsPerPage)) 
// }
    const [options, setOptions] = useState([5, 10,25])
    return (
        <div>
          <select>
              <option>{options}</option>
          </select>
        </div>
    )
}

