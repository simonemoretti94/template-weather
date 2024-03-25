<script>

import { state } from '/state.js';
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';

export default {
  name: 'app',

  components: { //imported components 
    AppHeader,
    AppBody,

  },
  data() { //variables, bool, array, objects and so on

    return { state, }
  },

  mounted() {
    /*axios
    .get('')
    .then((response) => {
       console.log(response);
    } )*/
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppBody></AppBody>
</template>