import { defineConfig } from 'umi';

export default defineConfig({
  title: '小鸣导航',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [{ path: '/', component: '@/pages/homePage' }],
    },
  ],
});
