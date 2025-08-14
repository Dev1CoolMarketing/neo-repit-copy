// renderer/_default.page.server.tsx
import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import type { PageContextServer as VPSPageContextServer } from 'vite-plugin-ssr/types'

// Local extended type (no global augmentation)
type DocumentProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  [k: string]: any
}

type PageContextServer = VPSPageContextServer & {
  Page?: any
  pageProps?: Record<string, any>
  urlOriginal?: string
  documentProps?: DocumentProps
  [k: string]: any
}

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  const appHtml = Page ? renderToString(React.createElement(Page, pageProps ?? {})) : ''

  const title = pageContext.documentProps?.title ?? 'Dr. Neo®'
  const description = pageContext.documentProps?.description ?? 'Dr. Neo Hair Restoration'
  const image = pageContext.documentProps?.image ?? 'https://yourdomain.com/default-og.jpg'
  const url = pageContext.documentProps?.url ?? `https://yourdomain.com${pageContext.urlOriginal ?? '/'}`

  const html = escapeInject`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(appHtml)}</div>
    <script type="module" src="/src/entry-client.tsx"></script>
  </body>
</html>`

  return { documentHtml: html }
}
