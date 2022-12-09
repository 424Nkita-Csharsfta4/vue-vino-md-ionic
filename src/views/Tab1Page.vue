<template>
  <ion-page>
    <ion-header>
    <ion-toolbar>
      <ion-title class="vino">
        Вино в ПМР
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true" class="ion-padding">
    <h1>Самое лучшее вино и вкусное в нашем регионе</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed tellus nec mauris auctor dignissim fermentum in risus. Sed nec convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id mattis. Fusce augue diam, sagittis nec posuere at, consectetur tempor lectus. Nulla at lectus eget mauris iaculis malesuada mollis sed neque. Curabitur et risus tristique, malesuada mauris finibus, elementum massa. Proin lacinia mauris quis ligula blandit ullamcorper. Donec ut posuere lorem. In volutpat magna vitae tellus posuere pulvinar. Nam varius ligula justo, nec placerat lacus pharetra ac. Aenean massa orci, tristique in nisl ut, aliquet consectetur libero. Etiam luctus placerat vulputate. Aliquam ipsum massa, porttitor at mollis ut, pretium sit amet mi. In neque mauris, placerat et neque vel, tempor interdum dolor. Suspendisse gravida malesuada tellus, vel dapibus nisl dignissim vel. Cras ut nulla sit amet erat malesuada euismod vel a nulla.</p>
   <h1>Все наши сорта вина</h1>
   <h2>Сухие</h2>
    <ion-card>
    <img alt="Silhouette of mountains" src="https://spb.wine-shopper.ru/image/cache/catalog/drinks/3ce1b38343422e2ad8d39ea746c726e2-600x600.jpg" />
    <ion-card-header>
      <ion-card-title>Каберне</ion-card-title>
      <ion-card-title>Качинское</ion-card-title>
      <ion-card-subtitle class="btn">Заказать</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Тут техт про вино оно вкусное закажи
    </ion-card-content>
  </ion-card>
  
  <ion-card>
    <img alt="Silhouette of mountains" src="https://spb.wine-shopper.ru/image/cache/catalog/drinks/3ce1b38343422e2ad8d39ea746c726e2-600x600.jpg" />
    <ion-card-header>
      <ion-card-title>Каберне</ion-card-title>
      <ion-card-title>Качинское</ion-card-title>
      <ion-card-subtitle class="btn">Заказать</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Тут техт про вино оно вкусное закажи
    </ion-card-content>
  </ion-card>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://spb.wine-shopper.ru/image/cache/catalog/drinks/3ce1b38343422e2ad8d39ea746c726e2-600x600.jpg" />
    <ion-card-header>
      <ion-card-title>Каберне</ion-card-title>
      <ion-card-title>Качинское</ion-card-title>
      <ion-card-subtitle class="btn">Заказать</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Тут техт про вино оно вкусное закажи
    </ion-card-content>
  </ion-card>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://spb.wine-shopper.ru/image/cache/catalog/drinks/3ce1b38343422e2ad8d39ea746c726e2-600x600.jpg" />
    <ion-card-header>
      <ion-card-title>Каберне</ion-card-title>
      <ion-card-title>Качинское</ion-card-title>
      <ion-card-subtitle class="btn">Заказать</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Тут техт про вино оно вкусное закажи
    </ion-card-content>
  </ion-card>
  <ion-card>
    <img alt="Silhouette of mountains" src="https://spb.wine-shopper.ru/image/cache/catalog/drinks/3ce1b38343422e2ad8d39ea746c726e2-600x600.jpg" />
    <ion-card-header>
      <ion-card-title>Каберне</ion-card-title>
      <ion-card-title>Качинское</ion-card-title>
      <ion-card-subtitle class="btn">Заказать</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Тут техт про вино оно вкусное закажи
    </ion-card-content>
  </ion-card>
  </ion-content>
  
    
      <ExploreContainer name="Tab 1 page" />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  }
});
</script>
<style scoped>
.btn{
  color: rgb(30, 79, 121);
  border: 1px solid rgb(152, 80, 80);
  border-radius: 7px;
  background-color: rgba(255, 188, 63, 0.999);
  width: 90px;
  height: 25px;
  align-items: center;
  padding-left: 1em;
}
.btn:hover{
  background: rgb(55, 84, 128);
  color:rgba(242, 180, 64, 0.91) ;
}
h1{
  color: rgb(198, 54, 54);
}
.vino{
  color: rgb(245, 220, 62);
}
h2{
  color: rgba(118, 225, 89, 0.856);
}
</style>
