<template>
  <div class="header-container">
    <span>Users</span>
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Create User</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="field" v-for="(i, index) in fields" :key="index">
        <label for="exampleFormControlInput1" class="form-label">{{i.label}}</label>
        <input 
        :type="i.type" 
        class="form-control" 
        id="exampleFormControlInput1" 
        :placeholder="i.placeholder"
        :value="i.value"
        v-model="i.value"
        >
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="createUser()">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fields: [
       {
         label: 'Name',
         type: 'text',
         placeholder: 'Enter name',
         value: ""
       },
       {
         label: 'Surname',
         type: 'text',
         placeholder: 'Enter surname',
         value: ""
       },
       {
         label: 'Email',
         type: 'email',
         placeholder: 'Enter email',
         value: ""
       },
       {
         label: 'Phone Number',
         type: 'number',
         placeholder: 'Enter number',
         value: ""
       }
     ],
  }),

  methods:{
    createUser(){
      sessionStorage.setItem('newUser', JSON.stringify(this.fields));
    }
  }
};
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
