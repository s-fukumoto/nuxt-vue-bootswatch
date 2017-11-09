<template>
  <bv-base title="Input Group">

    <div class="my-1">
      <b-input-group left="$" right=".00" class="mb-1">
        <b-form-input></b-form-input>
      </b-input-group>

      <b-input-group size="lg" left="$" right=".00" class="mb-1">
        <b-form-input></b-form-input>
      </b-input-group>

      <b-input-group class="mb-1">
        <!-- Add-ons -->
        <b-input-group-addon>
          <strong class="text-danger">!</strong>
        </b-input-group-addon>
        <b-input-group-addon>
          Username
        </b-input-group-addon>

        <!-- Main form input -->
        <b-form-input></b-form-input>

        <!-- Attach Right button Group via slot -->
        <b-input-group-button slot="right">
          <b-dropdown text="Dropdown" variant="success" right>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Action</b-dropdown-item>
          </b-dropdown>
          <b-btn variant="info">Button</b-btn>
        </b-input-group-button>

      </b-input-group>
    </div>

    <b-container class="my-1">
      <b-row>
        <b-col lg="6">
          <b-input-group>
            <b-input-group-addon>
              <input type="checkbox" aria-label="Checkbox for following text input">
            </b-input-group-addon>
            <b-input-group-addon>$</b-input-group-addon>
            <b-form-input type="text" aria-label="Text input with checkbox" />
          </b-input-group>
        </b-col>
        <b-col lg="6">
          <b-input-group>
            <b-input-group-addon>$</b-input-group-addon>
            <b-input-group-addon>0.00</b-input-group-addon>
            <b-form-input type="text" aria-label="Text input multiple addons" />
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="my-1">
      <b-row>
        <b-col lg="6" class="mb-3">
          <b-input-group>
            <b-input-group-button>
              <b-button>Go!</b-button>
            </b-input-group-button>
            <b-form-input type="text" placeholder="Search for..." />
          </b-input-group>
        </b-col>
        <b-col lg="6" class="mb-3">
          <b-input-group>
            <b-form-input type="text" placeholder="Search for..." />
            <b-input-group-button>
              <b-button>Go!</b-button>
            </b-input-group-button>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" class="mb-3">
          <b-input-group>
            <b-input-group-button>
              <b-button variant="success">Love It</b-button>
            </b-input-group-button>
            <b-form-input type="text" placeholder="Product" />
            <b-input-group-button>
              <b-button variant="danger">Hate It</b-button>
            </b-input-group-button>
          </b-input-group>
        </b-col>
        <b-col lg="6" class="mb-3">
          <b-input-group>
            <b-form-input type="text" placeholder="Product" />
            <b-input-group-button>
              <b-button variant="success">Add</b-button>
              <b-button variant="danger">Remove</b-button>
            </b-input-group-button>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>

  </bv-base>
</template>

<script>
import BvBase from './_Base.vue'

export default {
  components: {
    BvBase
  }
}
</script>