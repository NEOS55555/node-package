const router = [{
        path: '/route1',
        name: 'Comp0',
        component() { return import(/* webpackChunkName:'Comp0' */ '@/views/Comp0')},
      },
{
        path: '/route2',
        name: 'Comp1',
        component() { return import(/* webpackChunkName:'Comp1' */ '@/views/Comp1')},
      },
{
        path: '/',
        name: 'Comp2',
        component() { return import(/* webpackChunkName:'Comp2' */ '@/views/Comp2')},
      }]
  
  export default router
  