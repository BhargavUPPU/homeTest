import React, { useRef, useState } from 'react'
import { Button } from 'primereact/button';
import { Field } from 'react-final-form';
import { classNames } from 'primereact/utils';
import { Form } from "react-final-form";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { InputSwitch } from 'primereact/inputswitch';
import { RadioButton } from 'primereact/radiobutton';

const OrgSettings = () => {

    const [card, setCard] = useState("absorb");
    const [achcard, setAchcard] = useState("absorb_ACH");
    const [returnAddress, setReturnAddress] = useState(true);

    // Upload image
    const onUpload = () => {
        console.log('uplaoded');
    }


    // Facial Period Start
    const facialperioditems = [
        { label: "January", value: "january" },
        { label: "February", value: "february" },
        { label: "March", value: "march" },
        { label: "April", value: "april" },
        { label: "May", value: "may" },
        { label: "June", value: "june" },
        { label: "July", value: "july" },
        { label: "August", value: "august" },
        { label: "September", value: "september" },
        { label: "October", value: "october" },
        { label: "November", value: "november" },
        { label: "December", value: "december" },
    ]

    const timezoneItems = [
        { label: "(UTC-11:00) Midway Island", value: "Pacific_Midway" },
        { label: " (UTC-11:00) Samoa ", value: "Pacific_Samoa" },
        { label: " (UTC-10:00) Hawaii ", value: "Pacific_Honolulu" },
        { label: " (UTC-09:00) Alaska ", value: "US_Alaska" },
        { label: " (UTC-08:00) Pacific Time (US & Canada) ", value: "America_Los_Angeles" }
    ]


    const stateproviceitems = [
        { label: "State title", value: "state_title" },
        { label: "State title", value: "state_title" },
        { label: "State title", value: "state_title" },
        { label: "State title", value: "state_title" },
        { label: "State title", value: "state_title" }
    ]


    // Validate
    const validate = (data: OrgInfoData & MailAddressData) => {
        let errors: Partial<OrgInfoData & MailAddressData> = {};
        if (!data.group_name) {
            errors.group_name = "Group name is required.";
        }
        if (!data.address_line_1) {
            errors.address_line_1 = "Address is required."
        }
        if (!data.city) {
            errors.city = "City is required."
        }
        if (!data.state_provice) {
            errors.state_provice = "Please select state/provice is required."
        }
        if (!data.zip_code) {
            errors.zip_code = "Zip code is required."
        }
        if (!returnAddress) {
            if (!data.return_address_line_1) {
                errors.return_address_line_1 = "Address is required."
            }
            if (!data.return_city) {
                errors.return_city = "City is required."
            }
            if (!data.return_state_provice) {
                errors.return_state_provice = "Please select state/provice is required."
            }
            if (!data.return_zip_code) {
                errors.return_zip_code = "Zip code is required."
            }
        }
        return errors;
    }

    const initialValues = {
        group_name: 'Asim Hoa',
        ein: '',
        organization_email: '',
        organization_account_id: '191023',
        phone: '',
        fax: '',
        facial_period_start: '',
        timezone: ''
    }

    const addressInitialValues = {
        address_line_1: '',
        address_line_2: '',
        city: '',
        state_provice: '',
        zip_code: '',
        return_address_line_1: '',
        return_address_line_2: '',
        return_city: '',
        return_state_provice: '',
        return_zip_code: '',
    }

    // Fee Org Information Handler
    interface OrgInfoData {
        group_name: string;
        ein: string;
        organization_email: string;
        organization_account_id: string;
        phone: string;
        fax: string;
        facial_period_start: string;
        timezone: string;
    }

    const orgInfoHandler = (data: OrgInfoData, form: any) => {
        console.log(data);
        form.restart();
    }


    interface MailAddressData {
        address_line_1: string;
        address_line_2: string;
        city: string;
        state_provice: string;
        zip_code: string;
        return_address_line_1: string;
        return_address_line_2: string;
        return_city: string;
        return_state_provice: string;
        return_zip_code: string;
    }

    const mailAddressHandler = (data: MailAddressData, form: any) => {
        console.log('form working fine');
        console.log(data);
        form.restart();
    }



    // Fee Structure Handler
    interface FeeSettingData {
        fee: number;
        discount: number;
        tax: number;
    }

    const feesettingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const isFormFieldValid = (meta: any): boolean => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta: any): JSX.Element | null => {
        return isFormFieldValid(meta) ? <small className="p-error">{meta.error}</small> : null;
    };



    return (
        <div className='grid grid-cols-2 gap-7'>
            <div className='spacing-y-4'>
                <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                    <h5 className="text-base font-semibold p-4 border-b border-gray-200">Organization Information</h5>
                    <Form onSubmit={orgInfoHandler} initialValues={initialValues} validate={validate} render={({ handleSubmit }) => (
                        <form className="p-4" action="#" onSubmit={handleSubmit}>
                            <div className="mb-8">
                                <FileUpload name="demo[]" url="../" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                                    emptyTemplate={<p className="m-0">Drag and drop image here or upload</p>} />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <Field name="group_name" render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="group_name"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                        >
                                            GROUP NAME *
                                        </label>
                                        <InputText
                                            {...input}
                                            type="text"
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="group_name" />

                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='ein' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="ein"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                            EIN:
                                        </label>
                                        <InputText
                                            {...input}
                                            type="text"
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="ein" />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <Field name="organization_email" render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="organization_email"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                        >
                                            ORGANIZATION EMAIL
                                        </label>
                                        <InputText
                                            {...input}
                                            type="email"
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="organization_email" />

                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='organization_account_id' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="organization_account_id"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                            ORGANIZATION ACCOUNT ID:
                                        </label>
                                        <InputText
                                            {...input}
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            readOnly
                                            type="text"
                                            id="organization_account_id" />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />

                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <Field name="phone" render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="phone"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                        >
                                            PHONE
                                        </label>
                                        <InputText
                                            {...input}
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="phone" />

                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='fax' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="fax"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>

                                            FAX (OPTIONAL)
                                        </label>
                                        <InputText
                                            {...input}
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="fax" />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />

                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <Field name="facial_period_start" render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="facial_period_start"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                        >
                                            FISCAL PERIOD START
                                        </label>
                                        <Dropdown
                                            {...input}
                                            className={`w-full ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            options={facialperioditems}
                                            id="facial_period_start" />

                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='timezone' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="timezone"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>

                                            TIMEZONE
                                        </label>
                                        <Dropdown
                                            {...input}
                                            className={`w-full ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            options={timezoneItems}
                                            id="timezone"
                                            placeholder='Please select a timezone'
                                        />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />

                            </div>
                            <div className="flex gap-x-3 justify-end">
                                <Button
                                    label="Update"
                                    className="w-28"
                                    type="submit"
                                />
                            </div>
                        </form>
                    )} />
                </div>
                <div className="w-full bg-white rounded-lg  shadow-md">
                    <h5 className="text-base font-semibold p-4 border-b border-gray-200">Your Sign Up Link</h5>
                    <div className='p-4'>
                        <p className='text-sm mb-4'>Include this url in communications to your members to allow them to easily sign up for their own accounts on Inquhub. Clicking the link will copy it to your clipboard.</p>
                        <a href='#' className='text-sm text-gray-600 flex items-center'><i className='pi pi-copy mr-3'></i> https://app.Inquhub.com/auth/join/19102-hoaaasim</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                    <h5 className="text-base font-semibold p-4 border-b border-gray-200">Fee Settings</h5>
                    <div className='p-4'>
                        <p className='text-sm mb-4'>A processing fee is added to each payment made through Inquhub.com. You may choose to absorb these fees or to push these fees on to your members.</p>
                        <form className="p-4" action="#" onSubmit={feesettingSubmit}>
                            <div className='grid grid-cols-2 gap-4 mb-8'>
                                <div>
                                    <p className='text-sm mb-4'><span className='font-semibold'>Credit card:</span> A 2.9% + 30¢ processing fee is added to each credit card payment.</p>
                                    <div className="flex items-start mb-2">
                                        <RadioButton value="absorbcredit" name="city" onChange={() => setCard('absorb')} checked={card === 'absorb'} />
                                        <label htmlFor="absorbcredit" className="p-checkbox-label text-sm ml-2">Absorb credit card processing fees
                                        </label>
                                    </div>
                                    <div className="flex items-start">
                                        <RadioButton inputId="pushcredit" value="push" name="city" onChange={() => setCard('push')} checked={card === 'push'} />
                                        <label htmlFor="pushcredit" className="p-checkbox-label text-sm ml-2">Push credit card processing fees to the payor</label>
                                    </div>



                                </div>
                                <div>
                                    <p className='text-sm mb-4'><span className='font-semibold'>ACH payment:</span>  A $1.00 processing fee is added to each ACH payment.</p>
                                    <div className="flex items-start mb-2">
                                        <RadioButton value="absorbcredit" name="city" onChange={() => setAchcard('absorb_ACH')} checked={achcard === 'absorb_ACH'} />
                                        <label htmlFor="absorbcredit" className="p-checkbox-label text-sm ml-2">Absorb ACH processing fees

                                        </label>
                                    </div>
                                    <div className="flex items-start">
                                        <RadioButton inputId="pushcredit" value="push" name="city" onChange={() => setAchcard('push_ACH')} checked={achcard === 'push_ACH'} />
                                        <label htmlFor="pushcredit" className="p-checkbox-label text-sm ml-2">Push ACH processing fees to the payor</label>
                                    </div>



                                </div>
                            </div>
                            <div className="flex gap-x-3 justify-end">
                                <Button
                                    label="Update"
                                    className="w-28"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg mb-5 shadow-md">
                    <div className=' p-4 border-b border-gray-200 flex items-center justify-between'>
                        <h5 className="text-base font-semibold">Mailing Address</h5>
                        <div className='flex items-center'>
                            <InputSwitch inputId="same_address" checked={returnAddress} onChange={(e) => setReturnAddress(e.value)} />
                            <label htmlFor="same_address" className="p-checkbox-label text-sm ml-2">Use mailing address as return address</label>
                        </div>
                    </div>

                    <Form onSubmit={mailAddressHandler} initialValues={addressInitialValues} validate={validate} render={({ handleSubmit }) => (
                        <form className="p-4" action="#" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <Field name="address_line_1" render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="address_line_1"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                        >
                                            ADDRESS LINE 1 *
                                        </label>
                                        <InputText
                                            {...input}
                                            type="text"
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="address_line_1" />

                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='address_line_2' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="address_line_2"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                            ADDRESS LINE 2
                                        </label>
                                        <InputText
                                            {...input}
                                            type="text"
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="address_line_2" />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <Field name="city" render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="city"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                        >
                                            CITY *
                                        </label>
                                        <InputText
                                            {...input}
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="city" />

                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='state_provice' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="state_provice"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                            STATE/PROVINCE *
                                        </label>
                                        <Dropdown
                                            {...input}
                                            className={`w-full ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            options={stateproviceitems}
                                            id="state_provice" />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                                <Field name='zip_code' render={({ input, meta }) => (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="zip_code"
                                            className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                            ZIP CODE *
                                        </label>
                                        <InputText
                                            {...input}
                                            className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                            id="zip_code" />
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />

                            </div>


                            {/* Return Address */}
                            {!returnAddress &&
                                <div className=''>
                                    <h5 className="text-base font-semibold pt-4 border-t border-gray-200">Mailing Address</h5>
                                    <p className='text-sm mt-2 mb-5'>Specify a return address to be printed on invoices and mail sent by your organization. Defaults to the organization mailing address.</p>
                                    <div className="grid grid-cols-2 gap-6">
                                        <Field name="return_address_line_1" render={({ input, meta }) => (
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="return_address_line_1"
                                                    className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                                >
                                                    ADDRESS LINE 1 *
                                                </label>
                                                <InputText
                                                    {...input}
                                                    type="text"
                                                    className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                                    id="return_address_line_1" />

                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <Field name='return_address_line_2' render={({ input, meta }) => (
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="return_address_line_2"
                                                    className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                                    ADDRESS LINE 2
                                                </label>
                                                <InputText
                                                    {...input}
                                                    type="text"
                                                    className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                                    id="return_address_line_2" />
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                    </div>

                                    <div className="grid grid-cols-3 gap-6">
                                        <Field name="return_city" render={({ input, meta }) => (
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="return_city"
                                                    className={`mb-2 block uppercase text-xs font-semibold 
                                ${classNames({ 'p-error': isFormFieldValid(meta) })}`}
                                                >
                                                    CITY *
                                                </label>
                                                <InputText
                                                    {...input}
                                                    className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                                    id="return_city" />

                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <Field name='return_state_provice' render={({ input, meta }) => (
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="return_state_provice"
                                                    className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                                    STATE/PROVINCE *
                                                </label>
                                                <Dropdown
                                                    {...input}
                                                    className={`w-full ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                                    options={stateproviceitems}
                                                    id="return_state_provice" />
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />
                                        <Field name='return_zip_code' render={({ input, meta }) => (
                                            <div className="mb-8">
                                                <label
                                                    htmlFor="return_zip_code"
                                                    className={`mb-2 block uppercase text-xs font-semibold 
                                            ${classNames({ 'p-error': isFormFieldValid(meta) })}`}>
                                                    ZIP CODE *
                                                </label>
                                                <InputText
                                                    {...input}
                                                    className={`w-full h-12 ${classNames({ 'p-invalid': isFormFieldValid(meta) })}`}
                                                    id="return_zip_code" />
                                                {getFormErrorMessage(meta)}
                                            </div>
                                        )} />

                                    </div>
                                </div>
                            }
                            <div className="flex gap-x-3 justify-end">
                                <Button
                                    label="Update"
                                    className="w-28"
                                    type="submit"
                                />
                            </div>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    )
}

export default OrgSettings