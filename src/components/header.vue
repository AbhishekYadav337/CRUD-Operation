<template>
  <div class="header-container">
    <span>Users</span>
    <button type="button" @click="createUser()">Create User</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-container {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
button {
  background-color: #39f;
  border-color: #39f;
  color: white;
  border-radius: 5px;
  font-size: 15px;
}
</style>
