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
          <option value="">Selecione seu pão</option>
          <option value="integral">Integral</option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat">Escolha a carne do seu burger:</label>
          <select name="meat" id="meat" v-model="meat">
          <option value="">Selecione sua carne</option>
          <option value="cow">bovino</option>
          <option value="pork">suino</option>
          <option value="chicken">ave</option>
          </select>
        </div>
        <div class="optionals-container">
          <label id="optionals-label" for="optionals">Selecione opcionais:</label>
          <div class="checkbox-container">
            <input type="checkbox" name="optionals" v-model="optionals" value="salame">
            <span>Salame</span>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="optionals" v-model="optionals" value="salame">
            <span>Salame</span>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="optionals" v-model="optionals" value="salame">
            <span>Salame</span>
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
  name: "BurgerForm"
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