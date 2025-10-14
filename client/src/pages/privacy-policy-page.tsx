import PrivacyPolicy from '@/components/privacy-policy'
import SiteFooter from '@/components/site-footer'
import React from 'react'


const PrivacyPolicyPage = () => {
  return (
    <div className="mt-20 min-h-screen flex flex-col">
      <main id="main-content" tabIndex={-1} className="flex-1">
        <PrivacyPolicy heading="Privacy Policy - DR.Neo" />
      </main>
      <SiteFooter />
    </div>
  );
}

export default PrivacyPolicyPage
