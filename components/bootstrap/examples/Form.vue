<template>
  <bv-base title="Form">

    <div class="my-1">
      <b-form @submit="onSubmit">
        <b-form-group id="exampleInputGroup1"
                      label="Email address:" label-for="exampleInput1"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="exampleInput1"
                        type="email" v-model="form.email" required
                        placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Your Name:" label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text" v-model="form.name" required
                        placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup3"
                      label="Food:" label-for="exampleInput3">
          <b-form-select id="exampleInput3"
                        :options="foods" required
                        v-model="form.food"
          ></b-form-select>
        </b-form-group>
        <b-form-group id="exampleGroup4">
          <b-form-checkbox v-model="form.checked" id="exampleInput4">
            Check me out
          </b-form-checkbox>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="secondary">Reset</b-button>
      </b-form>
    </div>

  </bv-base>
</template>

<script>
import BvBase from './_Base.vue'

export default {
  components: {
    BvBase
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: false,
        secret: 'S3CR3T'
      },
      foods: [
        {
          text: 'Select One',
          value: null
        },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>