import React, {useState} from 'react';
import s from '../users.module.scss';


type PaginationPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination = ({totalUserCount, pageSize, currentPage, onPageChanged, portionSize = 12}: PaginationPropsType) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }


    let portionsCont =  Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(Math.ceil(currentPage/portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;



    return (
        <div className={s.pagination}>
            <div className={s.buttonsWrapper}>
                <button onClick={() => setPortionNumber(1)} disabled={portionNumber > 0 && portionNumber <= 1}>first
                </button>
                <button onClick={() => setPortionNumber((p) => p - 1)}
                        disabled={portionNumber > 0 && portionNumber <= 1}>pred
                </button>
            </div>
            <span className={s.numbers}>
                 {pages
                     .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                     .map((p) => {
                         return <span key={p} className={currentPage === p ? s.selected : s.nums}
                                      onClick={() => onPageChanged(p)}>{p}</span>
                     })}
            </span>
            <div className={s.buttonsWrapper}>
                <button onClick={() => setPortionNumber((p) => p + 1)} disabled={portionsCont === portionNumber}>next</button>
                <button onClick={() => setPortionNumber(portionsCont)} disabled={portionsCont === portionNumber}>last</button>
            </div>
        </div>
    )
};

