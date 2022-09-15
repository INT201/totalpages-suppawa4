const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (!(arrayItems === null || arrayItems === undefined)){
    if (!(rowsPerPage === 0 || rowsPerPage === undefined || rowsPerPage === null)){
      return Math.ceil(arrayItems.length / rowsPerPage)
    }
    return 1
  }
  return undefined
}
module.exports = totalPages
