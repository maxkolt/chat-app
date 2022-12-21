import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import contactList from '../components/contacts/contact-list.vue'
import contactUserInfo from '../components/contacts/contact-user-info.vue'
import usersList from '../components/users/users-list.vue'
import userChat from '../components/users/chat/user-chat.vue'

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
    {
      path: '/user',
      name: 'user',
      component: userChat,
      props: true
    }
  ]
})

export default router;
