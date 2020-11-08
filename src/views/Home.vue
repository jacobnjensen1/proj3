<template>
  <div class="home">
    <h1>Home</h1>
    <div id="welcome">
      <h3>Hi there, welcome to MyPlantList.<br/>Take a look around and make the list of plants you want or have.
      <br/>Here are all of the plants that have already been added!</h3>
    </div>
    <PlantList :data="allPlants"/>
   
  </div>
</template>

<script>
import PlantList from "../components/PlantList.vue"

export default {
  name: 'Home',
  components: {
    PlantList
  },
  computed: {
    allPlants() {
      return this.$root.$data.base.concat(this.$root.$data.added)
    }
  }
}
</script>
