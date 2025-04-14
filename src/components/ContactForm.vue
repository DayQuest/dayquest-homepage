<template>
  <form @submit.prevent="sendEmail" class="max-w-lg mx-auto p-8 bg-gray-800 rounded-lg shadow-md">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
      <textarea
        id="message"
        v-model="message"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows="4"
        required
      ></textarea>
    </div>
    <div class="mb-4">
      <label for="attachment" class="block text-gray-700 text-sm font-bold mb-2">Attachment (optional)</label>
      <input
        type="file"
        id="attachment"
        @change="handleFileUpload"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      attachment: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.attachment = event.target.files[0];
    },
    async sendEmail() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);
      if (this.attachment) {
        formData.append('attachment', this.attachment);
      }

      try {
        const response = await fetch('https://external-backend-url.com/api/email', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        if (result.success) {
          alert(result.message);
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email.');
      }
    },
  },
};
</script>
