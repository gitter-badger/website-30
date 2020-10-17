import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr: {},
  exportStatic: {},
  title: "codebug",
  routes: [
    { path: '/', component: '@/pages/main' },
    { path: '/home', component: '@/pages/home' }
  ],
});
