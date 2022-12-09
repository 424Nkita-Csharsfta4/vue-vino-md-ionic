<template>
  <div id="container">
    <ion-content class="ion-padding">
    <h1>Вино в MD</h1>
    <img src="https://myliquorhub.com/wp-content/uploads/2020/08/Red-Wine-Truths.jpg" alt="">
  </ion-content>
  </div>
</template>

<script lang="ts">
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent }
});
</script>

<style scoped>
h1{
  color: red;
}
</style>
