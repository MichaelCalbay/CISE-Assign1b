import React from "react";
import { useForm } from "react-hook-form";

interface SortableTableProps {
    headers: { key: string; label: string }[];
    data: any[];
    }
    const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
    <table>
    <thead>
    <tr>
    {headers.map((header) => (
    <th key={header.key}>{header.label}</th>
    ))}
    </tr>
    </thead>
    <tbody>
    {data.map((row, i) => (
    <tr key={i}>
    {headers.map((header) => (
    <td key={header.key}>{row[header.key]}</td>
    ))}
    </tr>
    ))}
    </tbody>
    </table>
    );

//    export default SortableTable;

    

export default function ModSubTable() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => JSON.stringify(data);

return (
<form onSubmit={handleSubmit(onSubmit)}>
<input {...register("title")} placeholder="Title" />
<p>
<input {...register("authors")} placeholder="Authors" />
</p>
<p>
<input {...register("source")} placeholder="Source" />
</p>
<p>
<input {...register("pubyear")} placeholder="Publication Year" />
</p>
<p>
<input {...register("doi")} placeholder="DOI" />
</p>
<select {...register("linked_discussion")}>
<option value="">Select SE practice...</option>
<option value="TDD">TDD</option>
<option value="Mob Programming">Mob Programming</option>
</select>
<input type="submit" />
</form>
);

}
