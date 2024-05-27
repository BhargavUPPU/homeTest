import React from 'react'
import Widgets from "../widgets";
import Collections from "../widgets/Collections";
import Expenses from "../widgets/Expense";
import RecentPayments from "../widgets/RecentPayments";
import Accounts from "../Accounts";
function Dashboard() {
  return (
      <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
              <Widgets />
          </div>
          <div className="col-span-6">
              <Collections></Collections>
          </div>
          <div className="col-span-6">
              <Expenses></Expenses>
          </div>
          <div className="col-span-6">
              <RecentPayments></RecentPayments>
          </div>
          <div className="col-span-6">
              <Accounts></Accounts>
          </div>
          <div className="col-span-2">
          </div>
      </div>
  )
}
export default Dashboard