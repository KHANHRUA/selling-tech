<template>
    <div>
      <button class="back-button">
        <RouterLink to="/" class="back">Quay lại trang chủ</RouterLink>
      </button>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  div{
    padding: 20px;
  }
    .back{
        color: beige;
        text-decoration-line: none;

    }
  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(116, 116, 160);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 650px;
  }
  
  .back-button:hover {
    background-color: darkblue;
  }
  </style>
  