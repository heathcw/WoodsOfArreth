<template>
  <div class="author">
    <div class="header">
      <h1>About the Author</h1>
    </div>

    <div class="content">
      <p>
        Matt Woodruff's love for telling stories began when he was a child,
        inventing stories to entertain his stuffed animals. He began writing his
        stories down when he was ten and has never really stopped. Born and
        raised in Salinas, California, he currently lives with his wife,
        children, cat, and dog in Maryland.
      </p>
      <div class="author-image">
        <img
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/96079275_10223497298848716_5405717448735326208_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=yo_nzRHrIV4AX8Q_tMS&tn=X4elm4k1t0YVUfjW&_nc_ht=scontent-sea1-1.xx&oh=00_AT-RVzcU7wc5KWSs2jSeZBB7C5jZtcXslAL8ZVb0muKl2w&oe=6254A959"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorView",
};
</script>

<style scoped>
.content {
  display: flex;
  padding: 100px;
  font-family: "Sedgwick Ave", cursive;
  background-color: #e0c4ba;
}
.author-image img {
  border-radius: 50%;
  width: 333px;
  height: auto;
}
</style>
