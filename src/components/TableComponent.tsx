import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'



export const TableComponent = () => {


    const createData = (name: string, cardsCount: number, updated: string, url: string) => {
        return { name, cardsCount, updated, url }
    }

    const rows = [
        createData('No name', 0, '2020-05-09T15:40:40.339Z', 'some-url' )
    ]

    return (
        <div>
          <TableContainer component={Paper}>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align='right'>Cards Count</TableCell>
                        <TableCell align='right'>Updated</TableCell>
                        <TableCell align='right'>URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>{row.name}</TableCell>
                            <TableCell align='right'>{row.cardsCount}</TableCell>
                            <TableCell align='right'>{row.updated}</TableCell>
                            <TableCell align='right'>{row.url}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>  
        </div>
    )
}
