import React, { useState } from 'react'
import { Form } from "react-final-form";
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { Field } from 'react-final-form';
import { RadioButton } from 'primereact/radiobutton';


const Preferences = () => {


    const initialValues = {
        request_forms: true,
        unit_violations: true,
        surveys: true,
        calendar: true,
        message_board: true,
        require_late_fee: false,
        send_monthly_statement: false,
        attach_pdf: false,
        payment_reminder: false,
        past_due: false,
        send_new_late_fee: false,
        send_daily_summary: false,
        prefered__accouting__method: "cash",
        prepaids_calculations: "active_date"

    }

    const preferneceHandler = (data: object, form: any) => {
        console.log(data);
    }



    return (
        <Form onSubmit={preferneceHandler} initialValues={initialValues} render={({ handleSubmit }) => (
            <form action="#" onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-7'>
                    <div className='spacing-y-4'>
                        <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                            <h5 className="text-base font-semibold p-4 border-b border-gray-200">Module Preferences</h5>
                            <div className="p-4">
                                <Field name="request_forms" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="request_forms" className="p-checkbox-label uppercase text-xs font-semibold">ENABLE REQUEST FORMS</label>
                                        <InputSwitch inputId="request_forms" {...input} checked={input.checked || false} />
                                    </div>
                                )} />
                                <Field name="unit_violations" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="unit_violations" className="p-checkbox-label uppercase text-xs font-semibold">ENABLE UNIT VIOLATIONS</label>
                                        <InputSwitch inputId="unit_violations" {...input} checked={input.checked||false}/>
                                    </div>
                                )} />
                                <Field name="surveys" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="surveys" className="p-checkbox-label uppercase text-xs font-semibold">ENABLE SURVEYS</label>
                                        <InputSwitch inputId="surveys" {...input} checked={input.checked||false}/>
                                    </div>
                                )} />
                                <Field name="calendar" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="calendar" className="p-checkbox-label uppercase text-xs font-semibold">ENABLE CALENDAR</label>
                                        <InputSwitch inputId="calendar" {...input} checked={input.checked||false} />
                                    </div>
                                )} />
                                <Field name="message_board" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="message_board" className="p-checkbox-label uppercase text-xs font-semibold">ENABLE MESSAGE BOARD</label>
                                        <InputSwitch inputId="message_board" {...input} checked={input.checked||false}/>
                                    </div>
                                )} />

                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                            <h5 className="text-base font-semibold p-4 border-b border-gray-200">Payment Preferences</h5>
                            <div className="p-4">
                                <Field name="require_late_fee" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="require_late_fee" className="p-checkbox-label uppercase text-xs font-semibold">REQUIRE LATE FEES TO BE PAID WITH OR BEFORE THEIR ORIGINATING INVOICE</label>
                                        <InputSwitch inputId="require_late_fee" {...input} checked={input.checked || false}/>
                                    </div>
                                )} />

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                            <h5 className="text-base font-semibold p-4 border-b border-gray-200">Email Preferences</h5>
                            <div className="p-4">
                                <Field name="send_monthly_statement" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="send_monthly_statement" className="p-checkbox-label uppercase text-xs font-semibold">SEND MONTHLY STATEMENT EMAILS</label>
                                        <InputSwitch inputId="send_monthly_statement" {...input} checked={input.checked || false} />
                                    </div>
                                )} />
                                <Field name="attach_pdf" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="attach_pdf" className="p-checkbox-label uppercase text-xs font-semibold">ATTACH PDF TO EMAILED INVOICES</label>
                                        <InputSwitch inputId="attach_pdf" {...input} checked={input.checked ?? false} />
                                    </div>
                                )} />
                                <Field name="payment_reminder" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="payment_reminder" className="p-checkbox-label uppercase text-xs font-semibold">SEND PAYMENT REMINDER EMAILS</label>
                                        <InputSwitch inputId="payment_reminder" {...input} checked={input.checked || false} />
                                    </div>
                                )} />
                                <Field name="past_due" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="past_due" className="p-checkbox-label uppercase text-xs font-semibold">SEND PAST DUE REMINDER EMAILS</label>
                                        <InputSwitch inputId="past_due" {...input} checked={input.checked || false}/>
                                    </div>
                                )} />
                                <Field name="send_new_late_fee" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="send_new_late_fee" className="p-checkbox-label uppercase text-xs font-semibold">SEND NEW LATE FEE CHARGE EMAILS</label>
                                        <InputSwitch inputId="send_new_late_fee" {...input} checked={input.checked || false}/>
                                    </div>
                                )} />
                                <Field name="send_daily_summary" type="checkbox" render={({ input, meta }) => (
                                    <div className="flex items-center justify-between mb-5">
                                        <label htmlFor="send_daily_summary" className="p-checkbox-label uppercase text-xs font-semibold">SEND DAILY SUMMARY EMAIL TO ADMINS</label>
                                        <InputSwitch inputId="send_daily_summary" {...input} checked={input.checked || false}/>
                                    </div>
                                )} />

                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                            <h5 className="text-base font-semibold p-4 border-b border-gray-200">Report Preferences</h5>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-5">
                                    <label className="p-checkbox-label uppercase text-xs font-semibold">PREFERRED ACCOUNTING METHOD:</label>
                                    <div className="flex items-center gap-4">
                                        <Field name="prefered__accouting__method" type="radio" value="cash" render={({ input }) => (

                                            <div className="flex items-center">
                                                <RadioButton {...input} inputId="cash" />
                                                <label htmlFor="cash" className="p-checkbox-label text-sm ml-2">Cash</label>
                                            </div>

                                        )} />

                                        <Field name="prefered__accouting__method" type="radio" value="accural" render={({ input }) => (
                                            <div className="flex items-center">
                                                <RadioButton {...input} inputId="accural" />
                                                <label htmlFor="accural" className="p-checkbox-label text-sm ml-2">Accural</label>
                                            </div>
                                        )} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mb-5">
                                    <label className="p-checkbox-label uppercase text-xs font-semibold">BASE PREPAIDS CALCULATIONS ON WHICH FIELD:</label>
                                    <div className="flex items-center gap-4">
                                        <Field name="prepaids_calculations" type="radio" value="active_date" render={({ input }) => (

                                            <div className="flex items-center">
                                                <RadioButton {...input} inputId="active_date" />
                                                <label htmlFor="active_date" className="p-checkbox-label text-sm ml-2">Charge Active Date</label>
                                            </div>

                                        )} />

                                        <Field name="prepaids_calculations" type="radio" value="due_date" render={({ input }) => (
                                            <div className="flex items-center">
                                                <RadioButton {...input} inputId="due_date" />
                                                <label htmlFor="due_date" className="p-checkbox-label text-sm ml-2">Charge Due Date</label>
                                            </div>
                                        )} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-3 justify-end">
                    <Button
                        label="Update Settings"
                        className="w-40"
                        type="submit"
                    />
                </div>
            </form>
        )} />
    )
}

export default Preferences