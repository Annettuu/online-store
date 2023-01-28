<template>
  <div class="searchBar">
    <form
      class="d-flex"
      role="search"
    >
      <h5
        v-b-modal.modal-lg
        @click="show=true"
      >
        Выбрать категорию
      </h5>
    </form>
    <b-modal
      id="modal-lg"
      v-model="show"
      size="lg"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="5" />
        </b-row>
        <b-row class="mb-1">
          <b-col cols="5">
            Категория
          </b-col>
          <b-col>
            <b-form-group
              label="Tagged input using dropdown"
              label-for="tags-with-dropdown"
            >
              <b-form-tags
                id="tags-with-dropdown"
                v-model="value"
                no-outer-focus
                class="mb-2"
              >
                <template #default="{ tags, disabled, addTag, removeTag }">
                  <ul
                    v-if="tags.length > 0"
                    class="list-inline d-inline-block mb-2"
                  >
                    <li
                      v-for="tag in tags"
                      :key="tag"
                      class="list-inline-item"
                    >
                      <b-form-tag
                        :title="tag"
                        :disabled="disabled"
                        variant="info"
                        @remove="removeTag(tag)"
                      >
                        {{ tag }}
                      </b-form-tag>
                    </li>
                  </ul>

                  <b-dropdown
                    size="sm"
                    variant="outline-secondary"
                    block
                    menu-class="w-100"
                  >
                    <template #button-content>
                      Choose tags
                    </template>
                    <b-dropdown-item-button
                      v-for="option in availableOptions"
                      :key="option"
                      @click="onOptionClick({ option, addTag })"
                    >
                      {{ option }}
                    </b-dropdown-item-button>
                    <b-dropdown-text v-if="availableOptions.length === 0">
                      There are no tags available to select
                    </b-dropdown-text>
                  </b-dropdown>
                </template>
              </b-form-tags>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mb-1">
          <b-col cols="5">
            Цвет
          </b-col>
          <b-col>
            <b-form-group>
              <b-form-tags
                v-model="value"
                no-outer-focus
              >
                <template #default="{ tags, addTag, removeTag }">
                  <ul
                    v-if="tags.length > 0"
                    class="d-inline-block mb-2"
                  >
                    <li
                      v-for="tag in tags"
                      :key="tag"
                      class="list-inline-item"
                    >
                      <b-form-tag
                        @remove="removeTag(tag)"
                      >
                        {{ tag }}
                      </b-form-tag>
                    </li>
                  </ul>
                  <b-dropdown
                    size="sm"
                    variant="outline-secondary"
                    block
                    menu-class="w-100"
                  >
                    <template #button-content>
                      Выберите тег
                    </template>
                    <b-dropdown-item-button
                      v-for="option in availableOptions"
                      :key="option"
                      @click="onOptionClick({ option, addTag })"
                    >
                      {{ option }}
                    </b-dropdown-item-button>
                    <b-dropdown-text v-if="availableOptions.length === 0">
                      There are no tags available to select
                    </b-dropdown-text>
                  </b-dropdown>
                </template>
              </b-form-tags>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data() {
    return {
      show: false,
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      search: '',
      value: []
    }
  },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase()
    },
    availableOptions() {
      const criteria = this.criteria
      // Filter out already selected options
      const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
      if (criteria) {
        // Show only options that match criteria
        return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1)
      }

      // Show all options available
      return options
    },
    searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return 'There are no tags matching your search criteria'
      }

      return ''
    }
  },
  methods: {
    onOptionClick({ option, addTag }) {
      addTag(option)
      this.search = ''
    }
  }
}
</script>

<style lang="scss">
.searchBar {
  display: flex;
  width: 80%;
  margin-top: 50px;
  margin-bottom: -30px;
}
.d-flex {
  gap: 5px;
}
</style>
