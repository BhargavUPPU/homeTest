// create a react component with HOA features sections
// let's create a react component with HOA features sections
// create a link that navigates to a section on the page
// let's create a link that navigates to a section on the page
// create a react component with HOA features sections
// let's create a react component with HOA features sections
// create a link that navigates to a section on the page
// let's create a link that navigates to a section on the page
import React from "react";
const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container my-5 px-6 mx-auto">
                <div className="container my-24 px-6 mx-auto">
                    <section className="mb-32 text-gray-800">
                        <div className="flex justify-center">
                            <div className="text-center max-w-[700px]">
                                <p className="uppercase text-blue-600 font-bold mb-6">Features</p>
                                <p className="text-gray-500 mb-12">
                                    Streamlining communication and decision-making with our advanced features.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
                            <div className="mb-12">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Communication</p>
                                        <p className="text-gray-500 my-2">Email and text message notifications for important events or updates</p>
                                        <p className="text-gray-500 my-2">Document sharing and storage for easy access to community guidelines, meeting minutes, and other important information</p>
                                        <p className="text-gray-500 my-2">Online voting and survey tools for residents to provide feedback or vote on community decisions</p>
                                        <p className="text-gray-500 my-2">Communication portals for residents to contact board members or management directly</p>
                                        <p className="text-gray-500 my-2">Emergency notification systems to quickly alert residents of any urgent issues</p>
                                        <p className="text-gray-500 my-2">Calendar and event scheduling for community meetings and events.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Budget development and tracking</p>
                                        <p className="text-gray-500 my-2"> Creating and updating a budget for the community</p>
                                        <p className="text-gray-500 my-2">Setting and tracking income and expenses</p>
                                        <p className="text-gray-500 my-2">Generating financial reports such as balance sheets and income statements</p>
                                        <p className="text-gray-500 my-2">Allowing board members and community members to access and view the budget</p>
                                        <p className="text-gray-500 my-2">Creating and sending out invoices for community fees and dues</p>
                                        <p className="text-gray-500 my-2">Tracking payments and managing delinquent accounts</p>
                                        <p className="text-gray-500 my-2">Integrating with accounting software to import and export financial data.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Accounts payable and accounts receivable management</p>
                                        <p className="text-gray-500 my-2">Recording and tracking vendor invoices and bills</p>
                                        <p className="text-gray-500 my-2">Automating payment schedules and reminders </p>
                                        <p className="text-gray-500 my-2">Recording and tracking payments from community members </p>
                                        <p className="text-gray-500 my-2">Managing and tracking delinquent accounts</p>
                                        <p className="text-gray-500 my-2">Generating statements and invoices for community fees and dues</p>
                                        <p className="text-gray-500 my-2">Integrating with accounting software to import and export financial data</p>
                                        <p className="text-gray-500 my-2">Creating and managing purchase orders and tracking inventory</p>
                                        <p className="text-gray-500 my-2">Allowing board members and community members to view financial information such as their account balance and payment history.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Ticket Management</p>
                                        <p className="text-gray-500 my-2">Creating and submitting maintenance, architectural, and general requests</p>
                                        <p className="text-gray-500 my-2">Tracking the status of requests and their completion</p>
                                        <p className="text-gray-500 my-2">Assigning requests to specific members or vendors</p>
                                        <p className="text-gray-500 my-2">Keeping records of past requests and their outcomes</p>
                                        <p className="text-gray-500 my-2">Notifying community members and board members of new requests or updates</p>
                                        <p className="text-gray-500 my-2">Allowing community members and board members to view and approve requests</p>
                                        <p className="text-gray-500 my-2">Creating and managing work orders</p>
                                        <p className="text-gray-500 my-2">Scheduling and tracking preventative maintenance tasks</p>
                                        <p className="text-gray-500 my-2">Providing access to documents and guidelines related to architectural and general requests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Features;