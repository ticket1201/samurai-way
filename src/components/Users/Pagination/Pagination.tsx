import React from 'react';
import s from '../users.module.scss';


type PaginationPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber:number) => void
}

export const Pagination = (props: PaginationPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }

    return (
        <div className={s.pagination}>
            {pages.map((p,i )=> {
                return <span key={i} className={props.currentPage === p ? s.selected : ''}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
    )
};

