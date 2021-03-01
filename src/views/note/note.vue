<template>
  <div class="note">
    <blockquote>
      <p class="weight">记录生活,定格瞬间</p>
    </blockquote>
    <notes />
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
/* .note /deep/ .box-card {
  background: #ccc;
} */
.note {
}
.weight{
  font-weight: 600px;
  font-size: 20px;
  margin: 10px 5px;
}
</style>
