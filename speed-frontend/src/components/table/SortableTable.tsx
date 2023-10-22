import React from "react";

interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: any[];
}

const SearchTable: React.FC<SortableTableProps> = ({ headers, data }) => (
  <table style={{ border: '1px solid darkgrey', borderCollapse: 'collapse' }}>
    <thead style={{ backgroundColor: '#a4703c', color: 'white' }}>
      <tr>
        {headers

          .map((header) => (
            <th style={{ border: '1px solid darkgrey', padding: '8px' }} key={header.key}>{header.label}</th>
          ))}
      </tr>
    </thead>
    <tbody style={{ backgroundColor: '#ded7cd' }}>
      {data.map((row, i) => (
        <tr key={i}>
          {headers
            .map((header) => (
              <td style={{ border: '1px solid darkgrey', padding: '8px' }} key={header.key}>
                {header.key === 'authors' && Array.isArray(row[header.key]) ? row[header.key].join(', ') : row[header.key]}
              </td>
            ))
          }
        </tr>
      ))}
    </tbody>
  </table>
);

export default SearchTable;
