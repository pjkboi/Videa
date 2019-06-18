<template>
    <div id=admin>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
        >
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
        >
            <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter Password"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card> -->
    </div>
</template>
<script>
 export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        admin:{
          name: 'admin@admin.com',
          pw: 'admin'
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        console.log(this.form.email);
        console.log(this.form.password);
        if(this.form.email == this.admin.name && this.form.password == this.admin.pw){
          console.log(this.form.email);
          this.$emit("Admin", this.show);
        }
        else{
          alert("Not the admin");
        }
        evt.preventDefault()
        //alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>

</style>
