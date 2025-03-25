
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5706, hash: '824502cb800810b64725656d6d3a45f946fee81da8e9455b1a6fc67ecf8159f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1723, hash: '084d96dc733551042b2e95d6e56ef88e7704600e0649f65dba89261389bd7eba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GEWMEF3D.css': {size: 315370, hash: 'Pw9Bwcuu9Pk', text: () => import('./assets-chunks/styles-GEWMEF3D_css.mjs').then(m => m.default)}
  },
};
