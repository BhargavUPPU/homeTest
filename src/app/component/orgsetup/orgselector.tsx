'use client';
import React, { useRef, useState, useEffect } from 'react'
import { SplitButton } from 'primereact/splitbutton';
import ActionModal from "../core/Modal";
import CreateOrganizationPage from '@/app/auth/create-organization/[[...create-oraganization]]/page';
import { Menu } from 'primereact/menu';
import { useRouter } from 'next/navigation';
import { useClerk } from "@clerk/clerk-react";
import { OrganizationSwitcher } from '@clerk/nextjs';
function OrgSelector() {
    return (
        <>
          <OrganizationSwitcher/>
        </>
    )
}

export default OrgSelector