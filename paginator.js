function paginatorCreator({ totalPage: 1, currentPage: 1, countIter: 2 }) {
   const paginatorLive = []
   if (totalPage > 1) {
     if (currentPage - 3 > 0) paginatorLive.push(1)
     if (currentPage - 4 === 1) paginatorLive.push(currentPage - 3)
     if (currentPage - 4 > 1) paginatorLive.push('...')
     if (currentPage < 5) countIter += 5 - currentPage
     if (totalPage - currentPage < 4) {
       countIter += 4 - (totalPage - currentPage)
     }
     for (let i = currentPage - countIter; i <= currentPage + countIter; i++) {
       if (i < 1) continue
       if (i > totalPage) break
       if (!paginatorLive.includes(i)) paginatorLive.push(i)
     }
     if (totalPage === currentPage + 4 && !paginatorLive.includes(currentPage + 3)) paginatorLive.push(currentPage + 3)
     if (totalPage - (currentPage + 3) > 1) paginatorLive.push('...')
     if (totalPage - (currentPage + 2) > 0 && !paginatorLive.includes(totalPage)) paginatorLive.push(totalPage)
   }
   return paginatorLive
}   
