import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableFooter from '@material-ui/core/TableFooter'
import { AppRootStateType } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { TableHead, TableSortLabel } from '@material-ui/core'
import { getCardsThunk } from '../../redux/reducers/card-reducer'
import { ResponseTypeCardsData } from '../../api/card-api'



export const TableCardsComponent = () => {
   
    const [cardsHeadCells, setCardsHeadCells] = useState([
        {id: 'question', label: 'Question', disableSorting: true},
        {id: 'answer', label: 'Answer'},
        {id: 'grade', label: 'Grade', disableSorting: true},
        {id: 'updated', label: 'Updated', disableSorting: true},
        {id: 'url', label: 'URL',  disableSorting: true},
        {id: 'actions', label: 'Actions',  disableSorting: true}
    ])


    const cardsSize = useSelector<AppRootStateType, number>(state => state.cards.pageSize)
    const currentPage = useSelector<AppRootStateType, number>(state => state.cards.pageCurrent)
    
    const dispatch = useDispatch()
    
    // useEffect(() => {
    //     dispatch(getCardsThunk(cardsSize, currentPage, cardsPack_id))   
    // }, [])

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
           {/* <TablePagination
                    rowsPerPageOptions={pageOptions}
                    component='div'
                    count={rows.length} 
                    rowsPerPage={packsPerPage}
                    page={pageSize}
                    onChangePage={() => handleChangePage}
                    onChangeRowsPerPage={handleRowsPerPage}
                   /> */}
               <Table className={classes.table} >
               {/* <TableHead>
                       {cardsHeadCells.map(cardHeadcell => (
                           <TableCell key={cardHeadcell.id}>
                               <TableSortLabel 
                                active={orderBy === cardHeadcell.id}
                                direction={orderBy === cardHeadcell.id ? order : 'asc'}
                                onClick={() => handleSortRequest(cardHeadcell.id)}
                                > 
                                {cardHeadcell.label}
                               </TableSortLabel> 
                           </TableCell>)) 
                       }
               </TableHead> */}
                   {/* <TableBody> 
                        {rowsAfterSorting().map((row => <TableRow>
                            <TableCell key='name'>{row.name}</TableCell>
                            <TableCell key='cards-count'>{row.cardsCount}</TableCell>
                            <TableCell key='updated'>{row.updated}</TableCell>
                            <TableCell key='url'></TableCell>
                            <TableCell><button>Update</button></TableCell>
                            <TableCell><button>Delete</button></TableCell>
                        </TableRow>))} 
                   </TableBody> */}
               </Table>
           </TableContainer>
        </div>
    )
}
