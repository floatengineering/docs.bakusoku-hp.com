import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>爆速ホームページのドキュメント</span>,
  project: {
    link: 'https://github.com/floatengineering/bakusoku-hp',
  },
  docsRepositoryBase: 'https://github.com/floatengineering/docs.bakusoku-hp.com',
  footer: {
    text: '爆速ホームページ',
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: 'Issueを報告する'
  },
}

export default config
