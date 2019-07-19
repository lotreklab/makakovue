<template>
  <a :href="'https://twitter.com/' + user">🐦 Go to {{user}} Twitter profile</a>
</template>

<script>
export default {
  name: "twittercomponent",
  props: ['user']
};
</script>
