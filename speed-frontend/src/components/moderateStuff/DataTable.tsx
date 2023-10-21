// components/DataTable.tsx
import { ReactNode } from 'react';

interface DataTableProps {
  data: Array<{ id: number; name: string; quantity: number }>;
  onEdit: (id: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => onEdit(item.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
