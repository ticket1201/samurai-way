import React from 'react';
import s from '../users.module.scss';


type PaginationPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = ({totalUserCount, pageSize, currentPage, onPageChanged}: PaginationPropsType) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }

    return (
        <div className={s.pagination}>
            {pages.map((p, i) => {
                return <span key={i} className={currentPage === p ? s.selected : ''}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
        </div>
    )
};

