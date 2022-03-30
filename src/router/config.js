const router = [{
        path: '/route1',
        name: 'Comp0',
        component() { return import(/* webpackChunkName:'Comp0' */ '@/views/Comp0')},
      },
{
        path: '/',
        name: 'Comp1',
        component() { return import(/* webpackChunkName:'Comp1' */ '@/views/Comp1')},
      }]
  
  export default router
  