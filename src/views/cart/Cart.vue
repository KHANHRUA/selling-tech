<template>
  <div class="Container">
    <div class="part1">
      <RouterLink class="Link" to="/"> Trang chủ </RouterLink>
      <div class="Text">/ Giỏ hàng</div>
    </div>
    <div class="part2">Giỏ hàng</div>
    <div class="part3" v-if="!mobile">
      <div class="Img">
        <div class="Title">Ảnh</div>
        <div v-for="(part, index) in Object" :key="index" class="imgAlign">
          <img class="img" :src="`${part.url}`" alt="error" />
        </div>
      </div>
      <div class="Name">
        <div class="Title">Tên sản phẩm</div>
        <div v-for="(part, index) in Object" :key="index" class="nameAlign">
          {{ part.name }}
        </div>
      </div>
      <div class="Quantity">
        <div class="Title">Số lượng</div>
        <div v-for="(part, index) in Object" :key="index" class="quantityAlign">
          <input class="input" :value="`${Quantity[index]}`" @keydown.enter="set(index)" @blur="set(index)" />
          <Garbage class="Garbage" @click="openDelete(index)"></Garbage>
        </div>
      </div>
      <div class="Price">
        <div class="Title">Đơn giá</div>
        <div v-for="(part, index) in Object" :key="index" class="priceAlign">
          {{ part.price }} VNĐ
        </div>
      </div>
      <div class="Sum">
        <div class="Title">Thành tiền</div>
        <div v-for="(part, index) in Object" :key="index" class="sumAlign">
          {{ calculation(part.price, Quantity[index]) }} VNĐ
        </div>
      </div>
      <div class="Special" v-if="Object === 0">
        Giỏ hàng của bạn hiện chưa có sản phẩm nào !
      </div>
    </div>
    <div class="part31" v-else>
      <div v-for="(part, index) in Object" :key="index" class="product">
        <div class="imgContainer">
          <h2>Hình ảnh</h2>
          <img :src="`${part.url}`" alt="error" />
        </div>
        <div class="nameContainer">
          <h2>
            Tên sản phẩm
          </h2>
          <div class="name">
            {{ part.name }}
          </div>
        </div>
        <div class="quantityContainer">
          <h2>Số lượng</h2>
          <div class="inputContainer">
            <input class="input" :value="`${Quantity[index]}`" @keydown.enter="set(index)" @blur="set(index)" />
            <Garbage class="Garbage" @click="openDelete(index)"></Garbage>
          </div>
        </div>
        <div class="priceContainer">
          <h2>
            Đơn giá
          </h2>
          <div class="price">
            {{ part.price }}VNĐ
          </div>
        </div>
        <div class="sumContainer">
          <h2>Tổng</h2>
          {{ calculation(part.price, Quantity[index]) }} VNĐ
        </div>
      </div>
    </div>
    <div class="part4">
      <div class="RouteAlign">
        <RouterLink class="Link" to="/"> TIẾP TỤC MUA HÀNG </RouterLink>
        <RouterLink class="Link" to="/abate"> THANH TOÁN </RouterLink>
      </div>
      <div class="Total">{{ Sum() }} VNĐ</div>
    </div>
    <div v-if="trash" class="alert">
      <div class="Text">Thông báo</div>
      Xóa sản phẩm này ?
      <div class="options">
        <div class="option" @click="Delete()">OK</div>
        <div class="option" @click="Cancel()">CANCEL</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      Object: 0,
      Quantity: [],
      Total: 0,
      index: undefined,
      trash: 0,
      mobile: 0
    }
  },
  methods: {
    calculation(object, quantity) {
      let price = parseFloat(object.replace(/,/g, ''))
      let temp = price * quantity
      let result = temp.toLocaleString('en-US')
      return result
    },
    openDelete(index) {
      this.trash = 1
      this.index = index
    },
    Cancel() {
      this.trash = 0
    },
    Delete() {
      this.trash = 0
      this.Quantity.splice(this.index, 1)
      this.Object.splice(this.index, 1)
      let temp = JSON.stringify(this.Object)
      let cart = temp.substring(1, temp.length - 1)
      localStorage.setItem('cart', cart)
    },
    set(index) {
      let a = document.getElementsByClassName('input')
      this.Quantity[index] = a[index].value
      this.Object[index].quantity = a[index].value
      let temp = JSON.stringify(this.Object)
      let cart = temp.substring(1, temp.length - 1)
      localStorage.setItem('cart', cart)
    },
    Sum() {
      this.Total = 0
      for (let i = 0; i < this.Object.length; i++) {
        let price = parseFloat(this.Object[i].price.replace(/,/g, ''))
        this.Total += price * this.Quantity[i]
      }
      let result = this.Total.toLocaleString('en-US')
      return result
    }
  },
  mounted() {
    if (localStorage.cart) {
      this.Object = JSON.parse('[' + localStorage.cart + ']')
      for (let i = 0; i < this.Object.length; i++) {
        this.Quantity.push(this.Object[i].quantity)
      }
    }
    addEventListener("resize", (event) => {
      let x = window.innerWidth;
      if (x <= 600) {
        this.mobile = 1;
      }
      else {
        this.mobile = 0
      }
    });
  }
}
</script>

<script setup>
import Garbage from '../../components/icons/Garbage.vue'
</script>

<style scoped src="./Cart.css"></style>
