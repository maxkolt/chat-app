import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import contactList from '../components/contacts/contact-list.vue'
import contactUserInfo from '../components/contacts/contact-user-info.vue'
import usersList from '../components/users/users-list.vue'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: contactList
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactUserInfo
    },
    {
      path: '/chats',
      name: 'chats',
      component: usersList
    },
  ]
})

export default router;
