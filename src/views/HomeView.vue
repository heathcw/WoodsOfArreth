<template>
  <div class="home">
    <div class="header">
      <h1>Find the Magic in the Woods</h1>
    </div>
    <div class="image-grid">
      <div class="image">
        <img
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/gryphon-stanley-morrison.jpg"
        />
      </div>
      <div class="image">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1901e53f-2da2-49e7-9cd7-a7ca6fe0bff5/d1p4n6x-d4dec372-fc31-4baf-8074-69b0fdc05da4.jpg/v1/fill/w_724,h_1104,q_70,strp/centauress_by_xiwik_d1p4n6x-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM3MyIsInBhdGgiOiJcL2ZcLzE5MDFlNTNmLTJkYTItNDllNy05Y2Q3LWE3Y2E2ZmUwYmZmNVwvZDFwNG42eC1kNGRlYzM3Mi1mYzMxLTRiYWYtODA3NC02OWIwZmRjMDVkYTQuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Z4_q4wwIBfxqrt_4ORm-5DflM-7QVN_-eC0Oq4hbjyE"
        />
      </div>
      <div class="image">
        <img
          src="https://www.cuded.com/wp-content/uploads/2013/10/peaceful_kingdom_by_andreasrocha600_869.jpg"
        />
      </div>
      <div class="image">
        <img src="https://i.imgur.com/2UPvB2O.jpeg" />
      </div>
      <div class="image">
        <img
          src="https://img.wattpad.com/0e855f9a2c9fd48abc76791ca91725cee1184727/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f467951385738313250324e3841513d3d2d3439353534393430302e313466373737613832616338386131633330343239383430303237342e6a7067?s=fit&w=720&h=720"
        />
      </div>
      <div class="image">
        <img src="https://i.imgur.com/cBewOtB.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background-color: #e0c4ba;
  padding: 20px;
}

.image img {
  width: 100%;
  border: 2px solid black;
}
</style>
