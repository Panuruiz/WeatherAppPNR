<template>
  <div @click="goToWeather" class="city">
      <i
        v-if="edit"
        @click="removeCity"
        class="far fa-trash-alt edit"
        ref="edit"
      ></i>
      <span>{{this.city.city}}</span>
      <div class="weather">
          <span>{{Math.round(this.city.currentWeather.main.temp) }}&deg;</span>
          <img
            :src="require(`../../public/conditions/${this.city.currentWeather.weather[0].icon}.svg`)"
            alt="">
      </div>
      <div class="video">
          <video 
          autoplay 
          loop muted 
          :src="require(`../../public/videos/${this.city.currentWeather.weather[0].icon}.mp4`)"></video>
          <div class="bg-overlay"></div>
      </div>
      
  </div>
</template>

<script>
import db from '../firebase/firebaseinit';
export default {
    name: "city",
    props: ['city', 'edit'],
    created() {
        console.log(this.city);
    },
    data () {
        return {
            id: null,
        }
    },
    methods: {
        removeCity() {
            db.collection('cities').where('city', '==', `${this.city.city}`).get().then(docs => {
                docs.forEach(doc => {
                    this.id = doc.id;
                });
            }).then(() => {
                db.collection('cities').doc(this.id).delete();
            }).then(() => {
                location.reload();
            });
        },
        goToWeather(e) {
            if (e.target === this.$refs.edit) {
                //
            } else {
                this.$router.push({name: "Weather", params: {city: this.city.city}});
            }
        },
    },
};
</script>

<style lang="scss" scoped>

.city {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 20px;
    min-height: 250px;
    color: white;
    box-shadow: 0 1px 2px 0 rgba($color: black, $alpha: 0.05);
    .edit {
        border-radius: 0 15px 0 0;
        border: 10px solid rgb(77, 77, 77);
        background-color: rgb(77, 77, 77);
        z-index: 6;
        font-size: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    span {
        padding-left: 15px;
        z-index: 1;
        text-transform: capitalize;
        display: block;
        font-size: 25px;
        font-weight: 600;
        background-image: linear-gradient(90deg, rgba(black, 1), rgba(black, 0));
        border-radius: 15px 0 0 15px;
    }
    .weather {
        display: flex;
        z-index: 1;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1;
        span {
            font-size: 35px;
            margin-right: 8px;
        }
        img {
            height: 20px;
            width: auto;
        }
    }
    .video {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        video {
            height: 100%;
            @media (min-width: 900px) {
                height: auto;
                width: 100%;
            }
        }
    }
    .bg-overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        background-color: rgba($color: black, $alpha: 0.2);

    }
}

</style>