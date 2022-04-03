import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'Title',
        selector: (row:any) => row.title,
    },
    {
        name: 'Year',
        selector: (row:any) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];


export const TableComponent = () =>{

    return(
        <div>

        <h1>Tabla</h1>

        <DataTable
        
            columns={columns}
            data={data}
        />
        </div>
    )
}