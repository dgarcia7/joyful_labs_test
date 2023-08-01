import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './style/base_table.css';

const BaseTable = ({title, columns, data, imp=false, exp=false}) => {

  const [propData] = useState(data);
  const [inputValue, setInputValue] = useState('');
  const [tableData, setTableData] = useState(propData);

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
    searchTable(value);
  };

  
  const searchTable = (searchValue) => {
    const filteredData = propData.filter(item =>
      Object.values(item).some(value => value.toLowerCase().includes(searchValue.toLowerCase()))
    );
    setTableData(filteredData);
  }

  return (
    <div className="base-table">
      <div className="base-table-header">
        <div className="base-table-search">
          <input type="text" placeholder={"Search for " + title.toLowerCase()} value={inputValue} onChange={handleInput} />
        </div>
        <div className="base-table-btn">
          {imp && <a><i className="fa fa-upload" aria-hidden="true"></i> Import</a>}
          {exp && <a><i className="fa fa-download" aria-hidden="true"></i> Export</a>}
          <button><i className="fa fa-plus" aria-hidden="true"></i> New {title}</button>
        </div>
      </div>
      <div className="base-table-content">
        <DataTable columns={columns} data={tableData} selectableRows pagination />
      </div>
    </div>
  );
}

export default BaseTable
