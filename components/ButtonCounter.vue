<template>
  <button v-on:click="count++">{{label}} {{ count }}</button>
</template>

<script>
export default {
  name: "buttoncounter",
  props: { label: String },
  data: function () {
    return {
      count: 0
    }
  },
};
</script>
