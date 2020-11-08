<template>
<div>
    <h1>MyPlantList</h1>
    <h3>Assemble your crew!</h3>
    <h4>If your plant is missing, add it at the bottom of the page.</h4>
    <div class="signIn" v-if="$root.$data.username == ''">
        <form>
            <label for="getUsername">Username:</label><br/>
            <input type="text" id="getUsername" name="getUsername" v-model="$root.$data.tempname">
            <button v-on:click="signIn">Sign In</button>
        </form>
    </div>
    <div v-else>
        <h3>Signed in as: {{$root.$data.username}} </h3>
        <button v-on:click="signOut">Sign Out</button>
        <div class="yourPlants">
            <h3>Your plants:</h3>
            <PlantList :data="usernamePlants"/>
        </div>
        <div class="allPlants">
            <h3>All Plants:</h3>
            <AddList :data="allPlants"/>
        </div>
        <div class="addNew">
            <h3>Add a New Plant:</h3>
            <form>
                <label for="getName">Plant Name:</label><br/>
                <input type="text" id="getName" name="getName" v-model="newName"><br/>
                <label for="getFamily">Plant Name:</label><br/>
                <input type="text" id="getFamily" name="getFamily" v-model="newFamily"><br/>
                <button v-on:click.prevent="addNew">Add New Plant</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import PlantList from '../components/PlantList.vue'
import AddList from '../components/AddList.vue'
export default {
    name: "MyPlantList",
    components: {
        PlantList,
        AddList
    },
    data() {
        return {
            usernamePlants: this.$root.$data.userPlants[this.$root.$data.username],
            newName: "",
            newFamily: ""
        }
    },
    computed: {
        allPlants() {
            return this.$root.$data.base.concat(this.$root.$data.added)
        }
        // ,
        // usernamePlants() {
        //     console.log(this.$root.$data.userPlants[this.$root.$data.username])
        //     return this.$root.$data.userPlants[this.$root.$data.username]
        // }
    },
    methods: {
        signIn() {
            this.$root.$data.username = this.$root.$data.tempname
            if (!(this.$root.$data.username in this.$root.$data.userPlants)) {
                this.$root.$data.userPlants[this.$root.$data.username] = []
            }
            this.usernamePlants = this.$root.$data.userPlants[this.$root.$data.username]
        },
        signOut() {
            this.$root.$data.username = ""
        },
        addNew() {
            event.preventDefault()
            let newPlant = {
                name: this.newName,
                family: this.newFamily,
                image: "generic.png"
            }

            this.$root.$data.added.push(newPlant)
            this.$root.$data.userPlants[this.$root.$data.username].push(newPlant)
        }
    }
}
// let givenUsername = ""
</script>

<style scoped>
input {
    margin:.5rem;
}

.allPlants {
    margin-top: 5rem;
}

.addNew  {
    margin-top: 5rem;
}

.signIn {
    margin-bottom: 10rem;
}
</style>