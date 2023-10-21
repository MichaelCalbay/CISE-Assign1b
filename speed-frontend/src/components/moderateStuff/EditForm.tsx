// components/EditForm.tsx
interface EditFormProps {
    item: { id: number; name: string; quantity: number };
    handleChange: (field: string, value: string | number) => void;
    onSave: () => void;
  }
  
  const EditForm: React.FC<EditFormProps> = ({ item, handleChange, onSave }) => {
    return (
      <div>
        <label>
          Name:
          <input
            type="text"
            value={item.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleChange('quantity', parseInt(e.target.value, 10))}
          />
        </label>
        <button onClick={onSave}>Save</button>
      </div>
    );
  };
  
  export default EditForm;
  