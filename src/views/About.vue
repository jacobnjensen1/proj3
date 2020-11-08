<template>
<div class="holder">
  <div class="about">
    <h1>About MyPlantList</h1>
    <p>MyPlantList is a site where you can keep track of the plants you have and/or the plants you want.
      You shouldn't have to keep a crumpled up piece of paper with water damage that reminds you what your plants are,
      this is the 21st century. <br/> Getting started is easy:
    </p>
    <ul>
      <li>Go to the MyPlantList tab</li>
      <li>Enter your name</li>
      <li>Add your plants</li>
    </ul>
    <p>You can also see what other people are growing to get inspiration.
      <br/>Happy Growing! 
    </p>
    <img src="/images/aconitum_napellus.jpg"/>
  </div>
</div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  margin-top: 0;
}

.about {
  max-width: 50rem;
}

p {
  font-size: large;
}

li {
  list-style: none;
  font-size: large;
}

img {
  margin-top: 3rem;
  max-width: 100%;
}
</style>