import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import { AppRootStateType } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { TableHead, TableSortLabel } from '@material-ui/core'
import { addCardsThunk, deleteCardsThunk, getCardsThunk } from '../../redux/reducers/card-reducer'
import { ResponseTypeCardsData } from '../../api/card-api'
import { Pagination } from './Pagination'
import { AddPackModalContainer } from '../Modal/AddPackModalContainer'
import { AddNewCardModal } from '../Modal/AddNewCardModal'



export const TableCardsComponent = () => {
   
    const cards = useSelector<AppRootStateType, ResponseTypeCardsData[]>(state => state.cards.cards)
   
    //----- initial state for table headers ------
    const cardsCells = [
        {id: 'question', label: 'Question', disableSorting: true},
        {id: 'answer', label: 'Answer', disableSorting: false},
        {id: 'grade', label: 'Grade', disableSorting: true},
        {id: 'updated', label: 'updated',  disableSorting: true},
        {id: 'url', label: 'URL', disableSorting: true},
        {id: '', label: '',  disableSorting: true},
    ]

    const [order, setOrder] = useState<any>()
    const [orderBy, setOrderBy] = useState<any>()

    //--- overriding default table styles ------
    const useStyles = makeStyles(theme => ({
        table: {
            marginTop: theme.spacing(6),
            '& thead th': {
                fontWeight: '600',
                color: '#7f8594' ,  
                backgroundColor:  '#e8fff6', 
            },
            '& tbody td': {
                fontWeight: '300',
            },
            '& tbody tr:hover': {
                backgroundColor: '#ededed',
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
 
//    const rowsAfterSorting = () => {
//        return stableSort(cards, getComparator(order, orderBy))
//    }
    const handleSortRequest = (cellID: string) => {
        const isAsc = orderBy === cellID && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc') 
        setOrderBy(cellID)
    }
   
    const dispatch = useDispatch()
    
    const newCard = useCallback((cardsPack_id: string, question: string, answer: string) => {
        dispatch(addCardsThunk(cardsPack_id, question, answer))
    }, [dispatch])

    
    const onDeleteCard = (cardsPack_id: string,_id: string) => {
        dispatch(deleteCardsThunk(cardsPack_id, _id))
    }
    
    return ( 
        <div>
           <TableContainer>
               <Table className={classes.table} >
               <TableHead>
                       {
                        cardsCells.map(cardsCell => (
                           <TableCell key={cardsCell.id}>
                               <TableSortLabel 
                                active={orderBy === cardsCell.id}
                                direction={orderBy === cardsCell.id ? order : 'asc'}
                                onClick={() => handleSortRequest(cardsCell.id)}
                                > 
                                {cardsCell.label}
                               </TableSortLabel> 
                           </TableCell>)) 
                       }
                      <TableCell> 
                         
                       
                       {/* create a container to add card */}

                    </TableCell>
               </TableHead>
                   <TableBody> 
                        {cards.map((card => <TableRow> 
                            <TableCell key='name' >{card.question}</TableCell>
                            <TableCell key='cards-count'>{card.answer}</TableCell>
                            <TableCell key='grade'>{card.grade}</TableCell>
                            <TableCell key='updated'>{card.updated}</TableCell>
                            <TableCell key='url'></TableCell>
                            <TableCell><button>Update</button></TableCell>
                            <TableCell>
                            
                            {/* create a func for deleting  */}

                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>))} 
                   </TableBody>
               </Table>
           </TableContainer>    
           <Pagination /> 
        </div>
    )
}
 