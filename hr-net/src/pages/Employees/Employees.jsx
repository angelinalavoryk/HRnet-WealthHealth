import React from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import './_Employees.scss';
import { useColumns } from '../../utils/ColumnsTableEmployees';
import { useEmployeeContext } from '../../utils/EmployeeContext.js';
import employeesList from '../../data/employeesList.js';

const Employees = () => {
  const { employees, addEmployee } = useEmployeeContext(); 

  React.useEffect(() => {
    if (employees.length === 0) {
      employeesList.forEach((employee) => {
        addEmployee(employee);
      });
    }
  }, [employees, addEmployee]);
  

  const columns = useColumns();
  const data = React.useMemo(() => {
    return employees.map((employee) => ({
      ...employee,
      startDate: new Date(employee.startDate).toLocaleDateString(),
      dateOfBirth: new Date(employee.dateOfBirth).toLocaleDateString(),
    }));
  }, [employees]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='employee'>
      <div className='employee-list'>
        {/* Barre de recherche */}
        <div className='search-bar'>
          <span>🔍</span>
          <input
            className='input-search-bar'
            type='text'
            placeholder='Search...'
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
        {/* Option de choix du nombre d'employés affichés */}
        <div className='display-options'>
          Showing
          <select
            className='select'
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          entries
        </div>
        {/* Tableau avec flèches pour trier les colonnes */}
        <table {...getTableProps()} className='display responsive-table'>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''
                    }
                  >
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span>&darr;</span>
                      ) : (
                        <span>&uarr;</span>
                      )
                    ) : (
                      ''
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Showing Entries */}
        <div className='container-bottom-list'>
          <div>
            <span className='showing-entries-txt'>
              Showing {pageIndex * pageSize + 1} to{' '}
              {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length} entries
            </span>
          </div>
          {/* Pagination */}
          <div className='pagination'>
            <button
              className='button-navigation-page'
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Précédent
            </button>
            <span>
              {pageIndex + 1} / {pageOptions.length}
            </span>
            <button
              className='button-navigation-page'
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;