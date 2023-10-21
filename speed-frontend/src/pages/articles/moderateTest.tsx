// pages/index.tsx
import React, { useState, useEffect } from 'react';
import DataTable from '../../components/moderateStuff/DataTable';
import EditForm from '../../components/moderateStuff/EditForm';

const Home: React.FC = () => {
  const [data, setData] = useState<Array<{ id: number; name: string; quantity: number }>>([]);
  const [selectedItem, setSelectedItem] = useState<{ id: number; name: string; quantity: number } | null>(
    null
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  const handleEdit = (id: number) => {
    const selectedItem = data.find((item) => item.id === id);
    setSelectedItem(selectedItem || null);
  };

  const handleChange = (field: string, value: string | number) => {
    setSelectedItem((prevItem) =>
      prevItem
        ? {
            ...prevItem,
            [field]: value,
          }
        : null
    );
  };

  const handleSave = async () => {
    if (selectedItem) {
      const response = await fetch(`/api/data/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedItem),
      });
      const updatedData = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item.id === updatedData.id ? updatedData : item))
      );
      setSelectedItem(null);
    }
  };

  return (
    <div>
      <h1>Data Table</h1>
      <DataTable data={data} onEdit={handleEdit} />
      {selectedItem && (
        <div>
          <h2>Edit Item</h2>
          <EditForm item={selectedItem} handleChange={handleChange} onSave={handleSave} />
        </div>
      )}
    </div>
  );
};

export default Home;
