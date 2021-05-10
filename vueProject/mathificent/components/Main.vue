<template>
  <main id="main-container">
    <h1>Mathificent</h1>
    <SelectInput :currentValue="operation" label="Operation" id="operation" v-model="operation" :options="operations" />
    <SelectInput :currentValue="maxNumber" label="Maximum Number" id="max-number" v-model="maxNumber" :options="numbers" />
    <PlayButton />
    <p>Current operation: {{ operation }}</p>
    <p>max number: {{ maxNumber }}</p>
  </main>
</template>
<script>
import SelectInput from "./SelectInput";
import PlayButton from "./PlayButton";

export default {
  name: "Main",
  components: {
    SelectInput,
    PlayButton,
  },
  data: function () {
    return {
      operations: [
        ["Addition", "+"],
        ["Subtraction", "-"],
        ["Multiplication", "x"],
        ["Division", "/"],
      ],
      operation: "x",
      maxNumber: "10",
    };
  },
  computed: {
    numbers: function () {
      const numbers = [];
      for (let number = 2; number <= 100; number++) {
        numbers.push([number, number]);
      }
      return numbers;
    },
  },
};
</script>


<style>
#main-container {
  margin: auto;
  width: 380px;
}
</style>