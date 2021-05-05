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
.note{
  
}
.note /deep/ .box-card {
  /* background: rgba(103, 194, 58, 0.65); */
}
.noteChild {
  width: 70%;
}
.weight{
  font-weight: 600px;
  font-size: 20px;
  margin: 10px 5px;
}
@media all and (max-width: 768px) {
  .noteChild {
    width: 100%;
  }
}
</style>
