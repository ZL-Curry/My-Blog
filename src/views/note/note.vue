<template>
  <div class="note">
    <blockquote>
      <p class="weight">记录生活,定格瞬间</p>
    </blockquote>
    <notes class="noteChild" ref="note"/>
  </div>
</template>

<script>
import notes from "./note_child";

export default {
  data() {
    return {};
  },
  components: {
    notes,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
<<<<<<< HEAD
/* .note /deep/ .box-card {
  background: #ccc;
} */
.note {
=======
.note{
  
}
.note /deep/ .box-card {
  background: rgb(70, 195, 218);
}
.noteChild {
  width: 70%;
>>>>>>> 2cd2b6f364abcd587be5b3691753a940af03a818
}
.weight{
  font-weight: 600px;
  font-size: 20px;
  margin: 10px 5px;
}
</style>
