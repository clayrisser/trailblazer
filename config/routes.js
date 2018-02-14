export default [
  {
    method: 'GET',
    path: '/',
    handler: 'DefaultController.api'
  },
  {
    method: 'GET',
    path: '/api',
    handler: 'DefaultController.api'
  },
  {
    method: 'GET',
    path: '/api/v1',
    handler: 'DefaultController.v1'
  },
  {
    method: 'GET',
    path: '/api/v1/info',
    handler: 'DefaultController.info'
  }
];
