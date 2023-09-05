<script>
export default {
  props: {
    title: String
  },
  name: "contacto-cmp"
}
</script>

<template>
  <label class="title">{{$t('contact')}} {{title}}</label>
  <div class="contact-form">
    <div class="control">
      <label for="email">Email</label>
      <input type="text" id="email" aria-label="Ingrese un email valido">
    </div>
    <div class="control">
      <label for="firstname">FirstName</label>
      <input type="text" id="firstname" aria-label="Ingrese su primer nombre">
    </div>
    <div class="control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" aria-label="Ingrese su apellido">
    </div>
    <button>Save</button>
  </div>
</template>

<style scoped>
.title{
  font-style: italic;
}

.contact-form{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.control{
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.contact-form label{
  width: 100px;
}
</style>