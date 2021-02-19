import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableFooter from '@material-ui/core/TableFooter'
import { AppRootStateType } from '../../redux/store'
import { useSelector } from 'react-redux'



export const TableCardsComponent = () => {
   
    const [cardsHeadCells, setCardsHeadCells] = useState([
        {id: 'question', label: 'Question', disableSorting: true},
        {id: 'answer', label: 'Answer'},
        {id: 'grade', label: 'Grade', disableSorting: true},
        {id: 'updated', label: 'Updated', disableSorting: true},
        {id: 'url', label: 'URL',  disableSorting: true},
        {id: 'actions', label: 'Actions',  disableSorting: true}
    ])

    const cards = useSelector(state => state)
    const rowsAfterSorting = () => {
        //return stableSort(cards, getComparator(order, orderBy)).slice(page * cardsPerPage, (page + 1) * cardsPerPage)
    }

    const cardsRows = useSelector(state => state)

     //--- overriding default table styles ------
     const useStyles = makeStyles(theme => ({
        table: {
            marginTop: theme.spacing(3),
            '& thead th': {
                fontWeight: '600',
                color: theme.palette.primary.contrastText,  
                backgroundColor: theme.palette.primary.light
            },
            '& tbody td': {
                fontWeight: '300',
            },
            '& tbody tr:hover': {
                backgroundColor: '#fffbf2',
                cursor: 'pointer'
            },
        },
    }))
    const classes = useStyles();

    return (
        <div>
             <TableContainer>
               <Table className={classes.table}>
                   <TableBody> 
                        {/* {rowsAfterSorting().map((row => <TableRow>
                            <TableCell key='name'>{row.name}</TableCell>
                            <TableCell key='cards-count'>{row.cardsCount}</TableCell>
                            <TableCell key='updated'>{row.updated}</TableCell>
                            <TableCell key='url'>URL</TableCell>
                            <TableCell><button>Update</button></TableCell>
                            <TableCell><button>Delete</button></TableCell>
                        </TableRow>))}  */}
                   </TableBody>
               </Table>
           </TableContainer>
           <TableFooter>
                 <TableRow>
                 {/* <TablePagination 
                    //component="div" 
                    //rowsPerPageOptions={pages} 
                    //rowsPerPage={rowsPerPage}
                    //page={page}
                    //count={rows.length}
                    //onChangePage={() => handlerChangePage}
                    //onChangeRowsPerPage={handlerChangeRowsPerPage} 
                    /> */}
                 </TableRow> 
             </TableFooter>
        </div>
    )
}
