import { ColDef, ColGroupDef } from 'ag-grid-community';
import { User } from '../types/Users';

import './../components/GridExample/GridExample.scss';

export const gridColumns: (ColDef<User, any> | ColGroupDef)[] = [
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Username', field: 'username' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Website', field: 'website' },
    {
        headerName: 'Address',
        headerClass: 'header',
        valueGetter: function (params) {
            const address = params.data?.address;
            if (address) {
                const { street, suite, city, zipcode } = address;
                return `${street}, ${suite}, ${city}, ${zipcode}`;
            }
            return '';
        },
        cellClass: 'blue-cell',
        flex: 1
    },
    {
        headerName: 'Company Name',field: 'company.name'}
];