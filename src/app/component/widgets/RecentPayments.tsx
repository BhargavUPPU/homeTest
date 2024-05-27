'use client';
import React, { useState } from "react";
import FiscalYear from '../core/FiscalYear';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function RecentPayments() {
  const [timeperiod, setTimeperiod] = useState();
  const [value3, setValue3] = useState('');

  return (
    <div className="w-full bg-white  mb-5 p-5 shadow-md">
      <div className='flex items-center gap-x-5 justify-between'>
        <h5 className="text-lg font-semibold">Recent Payments</h5>
        <Button label="Record Payment" className="p-button-sm float-right text-xs" icon="pi pi-plus" />
      </div>
      <Divider />
      <div className='flex items-center gap-x-5 justify-between'>
        <span className="text-xs p-input-icon-left">
          <i className=" text-xs pi pi-search" />
          <InputText className="p-inputtext-sm mb-2" value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" />
        </span>
        <FiscalYear  setTimeperiod={setTimeperiod} />
      </div>
      <div className="pt-3">
      <DataTable>
        <Column
          headerStyle={{ width: "3em" }}
        ></Column>
        <Column field="name" header="Name"></Column>
        <Column field="address1" header="Last Deposit"></Column>
        <Column header="Balance" field="Balance" dataType="numeric" />
        <Column field="tags" header="Upcoming Deposits"></Column>
      </DataTable>
      </div>
    </div>
  );
}

export default RecentPayments;
