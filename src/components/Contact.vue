<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { handleSubmit, resetForm } = useForm({
  initialValues: {
    name: '',
    email: '',
    message: ''
  }
})

const onSubmit = handleSubmit((values) => {
  // Handle form submission
  console.log(values)
  resetForm()
})
</script>

<template>
  <section class="py-16 bg-gray-50" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">
        {{ t('contact.title') }}
      </h2>
      
      <div class="max-w-2xl mx-auto">
        <form @submit="onSubmit" class="bg-white rounded-xl shadow-lg p-8">
          <div class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                {{ t('contact.form.name') }}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                {{ t('contact.form.email') }}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                {{ t('contact.form.message') }}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {{ t('contact.form.submit') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>