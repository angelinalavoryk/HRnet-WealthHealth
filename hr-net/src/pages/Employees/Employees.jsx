import React from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import './_Employees.scss';
import { useColumns } from '../../utils/EmployeeColumns.js';
import { useEmployeeContext } from '../../utils/EmployeeContext.js';
import employeesList from '../../data/employeesList.js';
import SearchBar from '../../components/Employees/SearchBar.jsx'
import DisplayOptions from '../../components/Employees/DisplayOptions.jsx'; // Importez le composant DisplayOptions
import Table from '../../components/Employees/Table.jsx';
import Pagination from '../../components/Employees/Pagination.jsx';

const Employees = () => {
  const columns = useColumns();
  const { employees, addEmployee } = useEmployeeContext(); 

  React.useEffect(() => {
    if (employees.length === 0) {
      employeesList.forEach((employee) => {
        addEmployee(employee);
      });
    }
  }, [employees, addEmployee]);

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
        <SearchBar  globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <DisplayOptions pageSize={pageSize} setPageSize={setPageSize} /> {/* Placez DisplayOptions ici */}
        <Table
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          prepareRow={prepareRow}
          page={page}
        />
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          pageOptions={pageOptions}
          nextPage={nextPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          setPageSize={setPageSize}
          dataLength={data.length}
        />
      </div>
    </div>
  );
};

export default Employees;
