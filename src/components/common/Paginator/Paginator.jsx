import React, {useState} from "react";
import s from "./Paginator.module.css"

const Paginator = (totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortioinPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortioinPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages
            .filter(p => p >= leftPortioinPageNumber && p <= rightPortioinPageNumber)
            .map((p) => {
                return <span className={ ({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}
export default Paginator;