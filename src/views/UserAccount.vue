<template>
    <v-card title="User info" max-width="100%" variant="text">
      <v-card-item>
        <v-avatar
          image="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
          size="80"
        ></v-avatar>
      </v-card-item>
      <v-card-item>
        <p><span>First name:</span> {{ user.firstName }}</p>
        <p><span>Last name:</span> {{ user.lastName }}</p>
        <p><span>Email:</span> {{ user.email }}</p>
        <p>
          <span>Categories:</span>
          {{ user.categories ? user.categories.join(", ") : "N/A" }}
        </p>
      </v-card-item>
      <v-card-actions>
        <v-btn @click="editUser" variant="tonal">Edit</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog" width="auto">
      <v-card width="400">
        <v-card-title>Edit User</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedUser.firstName" label="First Name"></v-text-field>
          <v-text-field v-model="editedUser.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="editedUser.email" label="Email"></v-text-field>
          <v-text-field v-model="editedUser.categories" label="Categories"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveChanges">Save</v-btn>
          <v-btn text @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { computed, ref } from "vue";
  
  export default {
    setup() {
      const store = useStore();
  
      const dialog = ref(false);
      const user = computed(() => store.getters.user);
      const editedUser = ref({});
  
      const editUser = () => {
        editedUser.value = { ...user.value };
        dialog.value = true;
        console.log(editedUser.value);
      };
  
      const saveChanges = async () => {
        try {
          await store.dispatch("updateUser", {
            firstName: editedUser.value.firstName,
            lastName: editedUser.value.lastName,
            email: editedUser.value.email,
          });
          dialog.value = false;
          window.location.reload();
        } catch (e) {
          console.error("Updating user error:", e);
        }
      };
  
      return {
        dialog,
        user,
        editedUser,
        editUser,
        saveChanges,
      };
    },
  };
  </script>
  
  <style>
  span {
    font-weight: 700;
  }
  
  p {
    font-size: 13px;
  }
  </style>
  