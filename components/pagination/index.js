import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { usePaginationStyles } from './style';

export function Pagination() {
    const classes = usePaginationStyles()
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            className={classes.root}
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={10}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
}
