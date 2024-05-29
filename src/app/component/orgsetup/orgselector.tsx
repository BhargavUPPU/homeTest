'use client';
import React, { useRef, useState, useEffect } from 'react'
import { OrganizationSwitcher } from '@clerk/nextjs';

function OrgSelector() {
    return (
        <>
          <OrganizationSwitcher/>
        </>
    )
}

export default OrgSelector