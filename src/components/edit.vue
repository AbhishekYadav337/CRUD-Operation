<template>
  <div>
    <div class="edit-container">
      <div class="field" v-for="(i, index) in fields" :key="index">
        <label for="exampleFormControlInput1" class="form-label">{{i.label}}</label>
        <input 
        :type="i.type" 
        class="form-control" 
        id="exampleFormControlInput1" 
        :placeholder="i.placeholder"
        :value="i.value"
        @change="updateUser($event, i)"
        >
      </div>
  </div>
  <button type="button" class="saveBtn" @click="saveChanges()">Save changes</button>
  </div>
</template>

<script>
export default {
   data: () => ({
     userData: {},
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
     allData(){
    for(let i in this.fields){
      if(i==0){
        this.fields[i].value = this.userData.name;
      }else if(i==1){
        this.fields[i].value = this.userData.surname;
      }else if(i==2){
        this.fields[i].value = this.userData.email;
      }else if(i==3){
         this.fields[i].value = this.userData.phone;
      }
    }
     },

     updateUser(event, i){
       i.value = event.target.value;
     },

     saveChanges(){
        for(let i in this.fields){
          if(i==0){
            this.userData.name = this.fields[i].value;
          }else if(i==1){
            this.userData.surname = this.fields[i].value;
          }else if(i==2){
            this.userData.email = this.fields[i].value;
          }else if(i==3){
            this.userData.phone = this.fields[i].value;
          }
        }
        sessionStorage.setItem('user', JSON.stringify(this.userData));
       this.$router.push('/');
     }
   },

   mounted(){
     this.userData = JSON.parse(sessionStorage.user);
     this.allData();
   }
};
</script>

<style scoped>
.field{
  width: 40%;
  margin: 10px 0;
}
.edit-container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 25px;
}
.saveBtn{
    margin-left: 67px;
    padding: 5px;
    margin-top: 10px;
}
</style>