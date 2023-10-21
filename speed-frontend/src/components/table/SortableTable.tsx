import React from "react";

interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: any[];
  visibleColumns: string[]; // Add this line to declare the visibleColumns prop
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data, visibleColumns }) => (
  <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        {headers
          .filter((header) => visibleColumns.includes(header.key)) // Filter headers based on visibility
          .map((header) => (
            <th style={{ border: '1px solid #ccc', padding: '8px' }} key={header.key}>{header.label}</th>
          ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {headers
            .filter((header) => visibleColumns.includes(header.key)) // Filter data based on visibility
            .map((header) => (
              <td style={{ border: '1px solid #ccc', padding: '8px' }} key={header.key}>{row[header.key]}</td>
            ))
          }
        </tr>
      ))}
    </tbody>
  </table>
);

export default SortableTable;
