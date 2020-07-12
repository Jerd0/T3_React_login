import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

export default function PaginationNavigation(props) {
    const {count, page, rowsPerPage, onChangePage} = props;
    const setFirstPage = (event) => {
        onChangePage(event, 0);
    };

    const decrementPageNumber = (event) => {
        onChangePage(event, page - 1);
    };

    const incrementPageNumber = (event) => {
        onChangePage(event, page + 1);
    };

    const setLastPage = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div style={{flexShrink: 0}}>
            <IconButton onClick={setFirstPage} disabled={page === 0} aria-label='первая страница'>
                <FirstPageIcon/>
            </IconButton>
            <IconButton onClick={decrementPageNumber} disabled={page === 0} aria-label='предыдущая страница'>
                <KeyboardArrowLeft/>
            </IconButton>
            <IconButton onClick={incrementPageNumber} disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                        aria-label='следующая страница'>
                <KeyboardArrowRight/>
            </IconButton>
            <IconButton onClick={setLastPage} disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                        aria-label='последняя страница'>
                <LastPageIcon/>
            </IconButton>
        </div>
    )
}
