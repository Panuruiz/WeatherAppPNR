<template>
<div>
    <header v-if="addCityActive" class="container add-city">
      <nav>
          <span>Add City</span>
          <div class="right">
              <i @click="editCities" ref="editCities" class="far fa-edit"></i>
              <i @click="reloadApp" class="fas fa-sync"></i>
              <i @click="addCity" class="fas fa-plus"></i>
          </div>
      </nav>
    </header>
    <header v-else class="container" :class="{day: isDay, night: isNight}" >
      <nav>
          <router-link class="router-link" :to="{name: 'AddCity'}">
              <i class="fas fa-arrow-left"></i>
          </router-link>
          <span>
              {{ new Date().toLocaleString("en-us", {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12:"false"}) }}
          </span>
          <span>&deg; C</span>
      </nav>
    </header>
</div>
</template>

<script>
export default {
    name: "Navigation",
    props: ["addCityActive", "isDay", "isNight", "time"],
    created() {
        /*console.log(new Date(this.time.dt * 1000).toLocaleString("en-US", { hour: "numeric" }));*/
    },
    methods: {
        addCity() {
            this.$emit('add-city');
        },
        reloadApp() {
            location.reload();
        },
        editCities() {
            this.$refs.editCities.classList.toggle("edit-active");
            this.$emit("edit-city");
        },
    },
};
</script>

<style lang="scss" scoped>
.add-city {
    background-color: #313640;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

header {
    z-index: 99;
    max-width: 1024px;
    width: 100%;
    padding: 0 20px;
    
    nav {
        display: flex;
        color: white;
        padding: 30px 0;
        justify-content: space-between;
    }
    .edit-active {
        color: rgb(209, 75, 75);
    }
    .router-link {
        color: white;

    }
    .right {
        i {
            font-size: 20px;
        }
        i:nth-child(2),
        i:nth-child(3) {
            margin-left: 16px;
        }
    }
    span {
        font-weight: 600;
    }
}
</style>