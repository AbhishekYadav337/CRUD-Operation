<template>
  <div class="userlist-container">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Activate</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(i, index) in tableData" :key="index">
      <td>{{i.name}}</td>
      <td>{{i.surname}}</td>
      <td>{{i.email}}</td>
      <td>{{i.phone}}</td>
      <td>{{i.active}}</td>
      <td>
        <button type="button" class="editBtn" @click="editUser(i)">Edit</button>
        <button type="button" class="deleteBtn" @click="deleteUser(i.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
    data: () => ({
    tableData: [
      { 
        id: 1,
        name: 'Sakshi',
        surname: 'Tembhare',
        email: 'Tembhare@gmail.com',
        phone: 1234567890,
        active: 'active'
      },
      {
        id: 2,
        name: 'Mahima',
        surname: 'Mahima',
        email: 'Mahima@Mahima.om',
        phone: 24334443434,
        active: 'active'
      },
      {
        id: 3,
        name: 'Pooja',
        surname: 'Sharma',
        email: 'sharma@gmail.com',
        phone: 3487938794384,
        active: 'active'
      },
      {
        id: 4,
        name: 'Abhishek',
        surname: 'Yadav',
        email: 'ay163626@gmail.com',
        phone: 9987734734,
        active: 'active'
      },
  ]
    }),

    methods:{
      deleteUser(userId){
        let alert = confirm('Are you sure want to delete user');
        if(alert){
          let index = this.tableData.findIndex((i)=> i.id === userId);
          this.tableData.splice(index, 1);
        }
      },

      editUser(user){
        sessionStorage.setItem('user', JSON.stringify(user));
        this.$router.push('/edit');
      }
    },

    mounted(){
      var obj = JSON.parse(sessionStorage.user);
      let index = this.tableData.findIndex((i)=> i.id == obj.id);
      Object.assign(this.tableData[index], obj);
    }

};
</script>

<style scoped>
.editBtn{
  background-color: #47b85d;
  border-color: #47b85d;
}
.deleteBtn{
  background-color: #e55353;
  border-color: #e55353;
  margin-left:5px;
}
tr:hover{
  background-color: #f2f2f2;
}
</style>