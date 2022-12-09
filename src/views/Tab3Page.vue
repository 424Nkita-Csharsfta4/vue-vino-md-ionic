<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Карта</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5458.671618566047!2d29.505416303873083!3d46.83707893099834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9041249db692d%3A0xee7012ddbf30ff57!2z0JLQuNC60YLQvtGA0LjRjw!5e0!3m2!1sru!2s!4v1670608701904!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
//import { GoogleMap } from '@capacitor/google-maps';
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }

});
</script>
