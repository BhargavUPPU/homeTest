'use client'
import React, { useState, useEffect } from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import OrgSettings from '../../component/orgsetting/Index'
import Preferences from '../../component/orgsetting/Peferences';
import Billing from '../../component/orgsetting/Billing';
import Permissions from '../../component/orgsetting/Permissions';
import BankAccountsList from '../../component/accounts/BankAccountsList';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

const OrgHome = (props: any) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const tabIndex = parseInt(searchParams.get('tab') || '0', 10);
        if (!isNaN(tabIndex)) {
            setActiveIndex(tabIndex);
        }
    }, [router]);

    return (
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="contentTransparent">
            <TabPanel header="Organization Settings">
                <OrgSettings />
            </TabPanel>
            <TabPanel header="Preferences">
                <Preferences />
            </TabPanel>
            <TabPanel header="Billing">
                <Billing {...props} />
            </TabPanel>
            <TabPanel header="Bank Accounts">
                <BankAccountsList mode="org" title="Organization Bank Accounts" />
            </TabPanel>
            <TabPanel header="Permissions">
                <Permissions />
            </TabPanel>
        </TabView>
    )
}

export default OrgHome