// src/entry-client.tsx
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { createPageClient } from 'vite-plugin-ssr/client/router'
import { PageContextClient } from 'vite-plugin-ssr/types'
import App from './App' // OR your top-level routing entry

// The `render` we pass to createPageClient will hydrate new pages on navigation.
// This is the simplest possible integration: hydrate the Page into #root.
createPageClient({
  render: async ({ Page, pageProps }: PageContextClient) => {
    hydrateRoot(document.getElementById('root')!, <Page {...pageProps} />)
  }
})
