getOffSet = (currentPage = 1, listPerPage) => (currentPage - 1) * [listPerPage];

emptyOrRows = (rows) => (!rows ? [] : rows);

module.exports = { getOffSet, emptyOrRows };
