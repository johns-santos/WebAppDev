<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select class="form-control" :id="id" :value="currrentValue" @input="$emit('input',$event.target.value)">
      <option v-for="option in options" :key="option[1]" :value="option[1]">
        {{ option[0] }}</option>
    </select>
      <p>{{ currentValue }}</p>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    id: String,
    label: String,
    options: Array,
    currentValue: String,
  }
};
</script>
