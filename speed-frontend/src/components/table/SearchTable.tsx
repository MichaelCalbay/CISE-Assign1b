import React from "react";

interface SearchTableProps {
  headers: { key: string; label: string }[];
  data: any[];
  visibleColumns: string[]; 
}

const SearchTable: React.FC<SearchTableProps> = ({ headers, data, visibleColumns }) => (
  <table style={{ border: '1px solid darkgrey', borderCollapse: 'collapse' }}>
    <thead style={{ backgroundColor: '#ad6b3a', color: 'white' }}>
      <tr>
        {headers
          .filter((header) => visibleColumns.includes(header.key)) // Filter headers based on visibility
          .map((header) => (
            <th style={{ border: '1px solid darkgrey', padding: '8px' }} key={header.key}>{header.label}</th>
          ))}
      </tr>
    </thead>
    <tbody style={{ backgroundColor: '#ded7cd' }}>
      {data.map((row, i) => (
        <tr key={i}>
          {headers
            .filter((header) => visibleColumns.includes(header.key)) // Filter data based on visibility
            .map((header) => (
              <td style={{ border: '1px solid darkgrey', padding: '8px' }} key={header.key}>{row[header.key]}</td>
            ))
          }
        </tr>
      ))}
    </tbody>
  </table>
);

export default SearchTable;
