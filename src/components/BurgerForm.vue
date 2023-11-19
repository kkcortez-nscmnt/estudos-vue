<template>
  <div>
    <!-- <p>componente de mensagem</p> -->
    <div>
      <form id="burger-form">
        <div class="input-container">
          <label for="name">Nome do Cliente</label>
          <input type="text" id="name" v-model="name" placeholder="Digite seu nome.">
        </div>
        <div class="input-container">
          <label for="breed">Escolha o pão</label>
          <select name="breed" id="breed" v-model="breed">
          <option value="">Selecione seu pão:</option>
          <option v-for="breed in breedData" :key="breed.id" :value="breed.tipo">{{ breed.tipo }}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat">Escolha a carne do seu burger:</label>
          <select name="meat" id="meat" v-model="meat">
          <option value="">Selecione sua carne:</option>
          <option v-for="meat in meatData" :key="meat.id" :value="meat.tipo">{{ meat.tipo }}</option>
          </select>
        </div>
        <div class="optionals-container">
          <label id="optionals-label" for="optionals">Selecione opcionais:</label>
        
          <div class="checkbox-container" v-for="optional in optionalsData" :key="optional.id">
            <input type="checkbox" name="optionals" v-model="optionals" :value="optional.tipo">
            <span>{{ optional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Finalizar pedido">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerForm",
  data() {
    return {
      breedData: null,
      meatData: null,
      optionalsData: null,
      name: null,
      breed: null,
      meat: null,
      optionals: [],
      status: "solicitado",
      msg: null,
    };
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();
      
      this.breedData = data.breedData;
      this.meatData = data.meatData;
      this.optionalsData = data.optionalsData;
    }
  },
  mounted() {
    this.getIngredients();
  }
};

</script>

<style scoped>

#burger-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 400px;
}

#breed, #meat {
  width: 400px;;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #FCBA03;
}

input, select {
  padding: 5px 10px;
  width: 300px;
}
.optionals-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#optionals-label {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span, input {
  width: auto;
  
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #FCBA03;
  font-weight: bold;
  border: 2px solid #2222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}

</style>