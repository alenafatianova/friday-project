import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableFooter from '@material-ui/core/TableFooter'
import {getPacksThunk } from '../../redux/reducers/cards-pack-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { CardsPackType } from '../../api/packs-api'
import { AppRootStateType } from '../../redux/store'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import IconButton from '@material-ui/core/IconButton'




export const TableComponent = () => {

    const dispatch = useDispatch();
    

    const dispatchGetPacksThunk = (page: number, pageCount: number ) => {
        dispatch(getPacksThunk(page, pageCount))
    }
    
    const pagesCount = useSelector<AppRootStateType, number>(state => state.packs.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)

    useEffect(() => {
        dispatchGetPacksThunk(pagesCount, pageCount)
    }, [])
    
    const rows = useSelector<AppRootStateType, Array<CardsPackType>>(state => state.packs.cardPacks)
    //const page = useSelector<AppRootStateType,number>(state => state.packs.page)
    
  
    
   
    //const [rows, setRows] = useState(cardsPacks)


    //----- initial state for table headers ------
    const [headCells, setHeadCells] = useState([
        {id: 'name', label: 'Name', disableSorting: true},
        {id: 'cardsCount', label: 'Cards Count'},
        {id: 'updated', label: 'Updated', disableSorting: true},
        {id: 'url', label: 'URL', disableSorting: true},
        {id: 'actions', label: 'Actions',  disableSorting: true}
    ])

   
    const [page, setPage] = useState<number>(pagesCount);
    const pages = [5, 10, 25]
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])

    const [order, setOrder] = useState<any>()
    const [orderBy, setOrderBy] = useState<any>()

    
    
    
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

   const handlerChangePage = (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => {
        setPage(newPage)
   }
   const handlerChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, ) => {
        dispatchGetPacksThunk(pagesCount, parseInt(event.target.value, 10))
   }
  

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  type Order = 'asc' | 'desc';
  

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

   const rowsAfterSorting = () => {
       return stableSort(rows, getComparator(order, orderBy))
   }


    return (
        <div>
           <TableContainer>
               <Table className={classes.table}>
                   <TableBody> 
                        {rowsAfterSorting().map((row => <TableRow>
                            <TableCell key='name'>{row.name}</TableCell>
                            <TableCell key='cards-count'>{row.cardsCount}</TableCell>
                            <TableCell key='updated'>{row.updated}</TableCell>
                            <TableCell key='url'>URL</TableCell>
                            <TableCell><button>Update</button></TableCell>
                            <TableCell><button>Delete</button></TableCell>
                        </TableRow>))} 
                   </TableBody>
               </Table>
           </TableContainer>
           <TableFooter>
                 <TableRow>
                 <TablePagination 
                    component="div" 
                    rowsPerPageOptions={pages} 
                    rowsPerPage={pageCount}
                    page={pagesCount}
                    count={rows.length}
                    onChangePage={() => handlerChangePage}
                    onChangeRowsPerPage={handlerChangeRowsPerPage} 
                    /> 
                 </TableRow> 
             </TableFooter>
        </div>
    )
}




