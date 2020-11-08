<template>
    <div class="PlantList">
        <div v-for="plant in data" :key="plant.name">
            <div class="plantHolder">
                <img class="image" v-bind:src="'/images/' + plant.image"/>
                <div class="words">
                    <p class="name">{{plant.name}}</p>
                    <p class="family">{{plant.family}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlantList',
    props: {
        data: Array
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