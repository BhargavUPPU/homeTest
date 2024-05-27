import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from 'react';

function FiscalYear({ setTimeperiod }: { setTimeperiod: any }) {
    const [_timeperiod, _setTimeperiod] = useState("month");
    useEffect(() => {
        console.log(_timeperiod);
    }, [])

    const timePeriods = [
        { label: 'This Month', value: 'month' },
        { label: 'Last Month', value: 'last_month' },
        { label: 'This Fiscal Year', value: 'fiscal_year' },
        { label: 'Last Fiscal Year', value: 'last_fiscal_year' },
        { label: 'This Year', value: 'calander_year' },
        { label: 'Last Year', value: 'last_calander_year' }
    ];

    return <Dropdown className='text-xs p-inputtext-sm ' value={_timeperiod} options={timePeriods} onChange={(e) => { _setTimeperiod(e.value); setTimeperiod(e.value) }} />
}

export default FiscalYear