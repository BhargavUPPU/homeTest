import React, { useState } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Accounts() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Accounts</div>
      </div>
      <div className="card-body"> 
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
export default Accounts;

