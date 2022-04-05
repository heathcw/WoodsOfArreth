<template>
  <div class="community">
    <div class="header">
      <h1>
        Submit your artwork as a fan of the Woods of Arreth books to share with
        the community!
      </h1>
    </div>
    <section class="image-grid">
      <div class="image" v-for="item in items" :key="item.id">
        <img :src="item.path" />
        <h2>{{ item.title }} posted by {{ item.artist }}</h2>
      </div>
    </section>
    <div class="content">
      <div class="form">
        <input v-model="title" placeholder="Title" />
        <input v-model="artist" placeholder="Artist" />
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <button @click="upload">Upload</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CommunityView",
  data() {
    return {
      title: "",
      artist: "",
      file: null,
      addItem: null,
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },

    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/items", {
          title: this.title,
          artist: this.artist,
          path: r1.data.path,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.image-grid {
  border: 5px solid #669147;
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background-color: #e0c4ba;
  padding: 20px;
}
.image img {
  width: 75%;
  border: 2px solid black;
}
</style>
