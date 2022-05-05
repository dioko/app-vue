<template>
  <div>
    <v-card elevation="4" rounded class="mt-5 mb-10">
      <v-card-subtitle class="primary white--text">
        <v-icon color="white">mdi-account-circle</v-icon> NEW ACCOUNT
      </v-card-subtitle>
      <v-card-text>
        <v-row class="mt-10">
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.name"
                outlined
                label="Name"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.lastname"
                outlined
                label="Lastname"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.email"
                outlined
                label="Email"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.idAccount"
                outlined
                label="ID account"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
          <v-text-field
                v-model="form.phone"
                outlined
                label="Phone"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.address"
                outlined
                label="Address"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.password"
                outlined
                label="Password"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                v-model="form.confirmPassword"
                outlined
                label="Confirm password"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        {{form}}
      </v-card-text>
      <v-card-actions class="mt-3">
        <v-spacer></v-spacer>
        <v-btn  to="/atuh/login" color="secondary" outlined>
          BACK </v-btn>
        <v-btn type="submit" color="primary">
          SUBMIT
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        lastname: '',
        email: '',
        idAccount: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
      }
    }
  }
}
</script>
