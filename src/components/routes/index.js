import Login from './../auth/login.component';
import Home from './../home/home.component';

export default {
  auth: {
    login: {
      title: 'Login',
      path: '/auth/login',
      component: <Login />,
    },
    // papers: {
    //   title: 'Kafka Admin',
    //   path: '/kafka-admin',
    //   component: <Home />,
    // },
  },
};
