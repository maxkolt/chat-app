<template>
<div class="contact-list">
  <contact-user
      v-for="contact in contacts"
      :key="contact.id"
      :contact_data="contact"
      @to-contact-info="toContactInfo(contact)"
  />
</div>
</template>

<script>

import contactUser from './contact-user.vue'
import {mapActions, mapState} from "vuex";

export default {
  name: 'contact-list',
  components: {
    contactUser
  },
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_CONTACTS',
      'SET_USER_TO_HEADER'
    ]),
    toContactInfo(contact) {
      this.$router.push({
        name: 'contact',
        query: {'id': contact.id}
      })
          this.SET_USER_TO_HEADER(contact)
    }
  },
  mounted() {
    this.FETCH_CONTACTS()
  }
}
</script>

<style>
</style>