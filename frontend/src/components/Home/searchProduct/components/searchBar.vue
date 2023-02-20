<template>
  <div class="container searchBar">
    <form
      class="d-flex"
      role="search"
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Поиск"
        aria-label="Поиск"
      >
      <b-button>Поиск</b-button>
      <b-button
        v-b-modal.modal-lg
        @click="show=true"
      >
        Фильтр
      </b-button>
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
                    <b-dropdown-form @submit.stop.prevent="() => {}">
                      <b-form-group
                        label="Search tags"
                        label-for="tag-search-input"
                        label-cols-md="auto"
                        class="mb-0"
                        label-size="sm"
                        :description="searchDesc"
                        :disabled="disabled"
                      >
                        <b-form-input
                          id="tag-search-input"
                          v-model="search"
                          type="search"
                          size="sm"
                          autocomplete="off"
                        />
                      </b-form-group>
                    </b-dropdown-form>
                    <b-dropdown-divider />
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
                    <b-dropdown-form @submit.stop.prevent="() => {}">
                      <b-form-group
                        label="Search tags"
                        label-for="tag-search-input"
                        label-cols-md="auto"
                        class="mb-0"
                        label-size="sm"
                        :description="searchDesc"
                        :disabled="disabled"
                      >
                        <b-form-input
                          id="tag-search-input"
                          v-model="search"
                          type="search"
                          size="sm"
                          autocomplete="off"
                        />
                      </b-form-group>
                    </b-dropdown-form>
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
        <b-row>
          <b-col cols="5">
            Цена
          </b-col>
          <b-col>
            <div class="input-group mb-3">
              <span class="input-group-text">min</span>
              <span class="input-group-text">₽</span>
              <input
                type="text"
                class="form-control"
                aria-label="Сумма в рублях (с точкой и двумя десятичными знаками)"
              >
            </div>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                aria-label="Сумма в рублях (с точкой и двумя десятичными знаками)"
              >
              <span class="input-group-text">max</span>
              <span class="input-group-text">₽</span>
            </div>
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
  margin-top: 50px;
}
.d-flex {
  gap: 5px;
}
</style>
