<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Регистрация</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">

      
      <ion-item class="con">
    <ion-label position="floating">Имя</ion-label>
    <ion-input placeholder="Имя"></ion-input>
  </ion-item>

  <ion-item fill="solid" class="con">
    <ion-label position="floating">Фамилия</ion-label>
    <ion-input placeholder="Фамилия"></ion-input>
  </ion-item>

  <ion-item fill="outline" class="con">
    <ion-label position="floating">Номер</ion-label>
    <ion-input placeholder="Номер"></ion-input>
  </ion-item>
</div>
<ion-card-subtitle class="btn">Зарегистрироваться</ion-card-subtitle>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Регистрация</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<style scoped>
.con{
  margin-top: 1em;
}
.container{
  margin-top: 2em;
}

.btn{
  margin-top: 2em;
  margin-left: 5em;
  color: rgb(30, 79, 121);
  border: 1px solid rgb(152, 80, 80);
  border-radius: 4px;
  background-color: rgba(255, 188, 63, 0.999);
  width: 170px;
  height: 35px;
  align-items: center;
  padding-left: 1em;
}
.btn:hover{
  background: rgb(55, 84, 128);
  color:rgba(242, 180, 64, 0.91) ;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonInput, IonItem, IonLabel  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonInput, IonItem, IonLabel  }
});
</script>
