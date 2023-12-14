
import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import './_Employees.scss';


const Employees = ({ employees }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        sortType: 'basic',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        sortType: 'basic',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        sortType: 'basic',
      },
      {
        Header: 'Department',
        accessor: 'department',
        sortType: 'basic',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        sortType: 'basic',
      },
      {
        Header: 'Street',
        accessor: 'street',
        sortType: 'basic',
      },
      {
        Header: 'City',
        accessor: 'city',
        sortType: 'basic',
      },
      {
        Header: 'State',
        accessor: 'state',
        sortType: 'basic',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
        sortType: 'basic',
      },
    ],
    []
  );

  // const data = useMemo(() => employees, [employees]);
  const data = useMemo(() => {
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
        <span> 🔍 </span>
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
       <p>Showing</p>
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
        <p>entries</p>
      </div>

      {/* Tableau avec flèches pour trier les colonnes */}
      <table {...getTableProps()} className='display'>
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

      <div className='container-bottom-list'>
        {/* Showing Entries */}
        <div> 
      <span className='showing-entries-txt'>
        Showing {pageIndex * pageSize + 1} to {' '}
          {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length} entries
        </span>
        </div>
          {/* Pagination */}
          <div className='pagination'>
                  <button className='button-navigation-page' onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Précédent
                  </button>
                  <span>
                    {pageIndex + 1} / {pageOptions.length}
                  </span>
                  <button className='button-navigation-page' onClick={() => nextPage()} disabled={!canNextPage}>
                    Suivant
                  </button>
                </div>
      </div>

      
    </div>
    </div>
  );
};

export default Employees;

