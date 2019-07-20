<template>
  <a :href="'https://twitter.com/' + user" target="_blank">🐦 Go to {{user}} Twitter profile</a>
</template>

<script>
export default {
  name: "twittercomponent",
  props: { user: String }
};
</script>
