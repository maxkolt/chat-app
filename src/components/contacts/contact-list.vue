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
    ]),
    toContactInfo(contact) {
      this.$router.push({
        name: 'contact',
        query: {'id': contact.id}
      })
    }
  },
  mounted() {
    this.FETCH_CONTACTS()
  }
}
</script>

<style scoped>

</style>