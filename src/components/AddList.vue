<template>
    <div class="PlantList">
        <div v-for="plant in data" :key="plant.name">
            <div class="plantHolder">
                <img class="image" v-bind:src="'/images/' + plant.image"/>
                <div class="words">
                    <p class="name">{{plant.name}}</p>
                    <p class="family">{{plant.family}}</p>
                    <button v-on:click="addPlant(plant)">Add Plant</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddList',
    props: {
        data: Array
    },
    methods: {
        addPlant(plant) {
            if (this.$root.$data.username in this.$root.$data.userPlants) {
                if (this.$root.$data.userPlants[this.$root.$data.username].indexOf(plant) === -1) {
                    this.$root.$data.userPlants[this.$root.$data.username].push(plant)
                }
                // else {
                //     console.log("already added" + plant)
                // }
            }
            else {
                this.$root.$data.userPlants[this.$root.$data.username] = [plant]
            }
        }
    }
}
</script>

<style scoped>
.PlantList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.plantHolder {
    width: 30rem;
    display: flex;
    flex-direction: row;
    margin: 2rem;
}

.name {
    font-size: larger;
    font-style: oblique;
}

.family {
    font-size: medium;
}

.image {
    max-height: 10rem;
    margin-right: 2rem;
}

@media only screen and (max-width: 650px) {
    .plantHolder {
        width: 100%;
        margin-left: 0;
    }
}
</style>