<template>
  <div class="pa-5">
    <v-row>
      <v-col cols="12" class="mt-5">
        <p class="text-h5 text-center">APP VUEJS</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="8" md="5" lg="4">
        <v-text-field label="Username" outlined background-color="white" v-model="form.usernmae">
        </v-text-field>
        <v-text-field
            v-model="form.password"
            outlined
            label="Password"
            background-color="white"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
        >
        </v-text-field>
        <v-btn type="submit" block color="primary" rounded >SUBMIT</v-btn>
        <v-btn block text color="primary" to="/auth/form">Not registered yet?</v-btn>
        {{form}}
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      form: {
        usernmae: '',
        password: ''
      }
    }
  }
}
</script>
