<template>
  <div class="note">
    <blockquote>
      <p class="text-3xl">记录生活,定格瞬间</p>
    </blockquote>
    <notes class="noteChild" ref="note"/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    "notes": () => import('./note_child')
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.note{
  
}
.note /deep/ .box-card {
  /* background: rgba(103, 194, 58, 0.65); */
}
.noteChild {
  width: 70%;
}

@media all and (max-width: 768px) {
  .noteChild {
    width: 100%;
  }
}
</style>
