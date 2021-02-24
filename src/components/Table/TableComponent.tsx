import React, { ChangeEvent, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import {getPacksThunk, setCurrentPageAC, setPacksSizeAC } from '../../redux/reducers/cards-pack-reducer' 
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../redux/store'
import TableHead from '@material-ui/core/TableHead'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import { TablePagination } from '@material-ui/core'
import { CardsPackResponseType } from '../../api/packs-api'
import { Pagination } from './Pagination'
import { Pages } from '@material-ui/icons'


export const TableComponent = () => {
   
    const pageSize = useSelector<AppRootStateType, number>(state => state.packs.page)
    const packsPerPage = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const rows = useSelector<AppRootStateType, Array<CardsPackResponseType>>(state => state.packs.cardPacks)
    const user_id = useSelector<AppRootStateType, string>(state => state.profile._id)
    const dispatch = useDispatch()
    
    
        useEffect(() => {
            dispatch(getPacksThunk(pageSize, packsPerPage, user_id))
        }, [])
   
   
     
    //----- initial state for table headers ------
    const [headcells, setHeadCells] = useState([
        {id: 'name', label: 'Name', disableSorting: true},
        {id: 'cardsCount', label: 'Cards Count', disableSorting: false},
        {id: 'updated', label: 'Updated', disableSorting: true},
        {id: 'url', label: 'URL', disableSorting: true},
        {id: 'actionUpdate', label: 'Actions',  disableSorting: true},
        {id: '', label: '',  disableSorting: true}
    ])

    const [order, setOrder] = useState<any>()
    const [orderBy, setOrderBy] = useState<any>()

    //--- overriding default table styles ------
    const useStyles = makeStyles(theme => ({
        table: {
            marginTop: theme.spacing(6),
            '& thead th': {
                fontWeight: '600',
                color: theme.palette.primary.contrastText,  
                backgroundColor: theme.palette.primary.light,
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
    const handleSortRequest = (cellID: string) => {
        const isAsc = orderBy === cellID && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc') 
        setOrderBy(cellID)
    }

    return ( 
        <div>
           <TableContainer>
           <Pagination />
               <Table className={classes.table} >
               <TableHead>
                       {headcells.map(headcell => (
                           <TableCell key={headcell.id}>
                               <TableSortLabel 
                                active={orderBy === headcell.id}
                                direction={orderBy === headcell.id ? order : 'asc'}
                                onClick={() => handleSortRequest(headcell.id)}
                                > 
                                {headcell.label}
                               </TableSortLabel> 
                           </TableCell>)) 
                       }
               </TableHead>
                   <TableBody> 
                        {rowsAfterSorting().map((row => <TableRow>
                            <TableCell key='name'>{row.name}</TableCell>
                            <TableCell key='cards-count'>{row.cardsCount}</TableCell>
                            <TableCell key='updated'>{row.updated}</TableCell>
                            <TableCell key='url'></TableCell>
                            <TableCell><button>Update</button></TableCell>
                            <TableCell><button>Delete</button></TableCell>
                        </TableRow>))} 
                   </TableBody>
               </Table>
           </TableContainer>
        </div>
    )
}




