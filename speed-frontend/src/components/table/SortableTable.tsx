import React from "react";
interface SortableTableProps {
    headers: { key: string; label: string }[];
    data: any[];
    }

    const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
        <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th style={{ border: '1px solid #ccc', padding: '8px' }} key={header.key}>{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {headers.map((header) => (
                  <td style={{ border: '1px solid #ccc', padding: '8px' }} key={header.key}>{row[header.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      

    export default SortableTable;