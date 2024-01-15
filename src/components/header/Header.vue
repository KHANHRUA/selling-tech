<template>
  <div class="Container">
    <div class="Head">
      <div class="TopHead">
        <div class="AlignSign">
          <div class="Log">
            <Key class="Key"></Key>
            <RouterLink class="link" to="/user/signin">Đăng nhập</RouterLink>
          </div>
          <div class="Sign">
            <User class="User"></User>
            <RouterLink class="link" to="/user/signup">Đăng ký</RouterLink>
          </div>
        </div>
        <div class="Input">
          <input placeholder="Tìm kiếm" type="text" />
          <Search class="Search"></Search>
        </div>
      </div>
      <div class="UnderHead">
        <div class="Follow" v-on:keyup.enter="send()">
          <Point class="Point"></Point>
          Theo dõi đơn hàng
          <Triangle class="Triangle"></Triangle>
          <div class="HoverFollow">
            <input type="text" v-model="code" placeholder="Vui lòng nhập mã đơn hàng" />
            <input type="text" v-model="email" placeholder="Vui lòng nhập email đặt hàng" />
            <div class="Text">
              Nếu bạn có thắc mắc ?
              <a>Bấm vào đây</a>
            </div>
            <button @click="send()">THEO DÕI</button>
          </div>
        </div>
        <div class="Guarantee"><router-link to="/lookup">Tra cứu bảo hành</router-link></div>
      </div>
    </div>
    <div class="Information">
      <div class="Align">
        <div class="Phone">
          <img src="../../assets/phone.png" />
          <a href="tel:0824.672.075"> 0824.672.075 </a>
        </div>
        <div class="Cart">
          <img src="../../assets/cartblack.png" />
          <div class="Text">
            <h1>Giỏ hàng</h1>
            <RouterLink class="Link" to="/cart"> {{ this.Number }} sản phẩm</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="Nav">
      <div v-if="this.Nav" class="NavTemp1">
        <RouterLink to="/" class="IconHome">
          <Home class="Home"></Home>
        </RouterLink>
        <div class="point-list">
          <div class="Content">
            TIN TỨC
            <Triangle class="Triangle"></Triangle>
          </div>
          <ul class="hover-list">
            <li><router-link to="/promotionnews">Tin khuyến mãi</router-link></li>
            <li><router-link to="/domesticnews">Tin RC trong nước</router-link></li>
            <li><router-link to="/internationalnews">Tin RC quốc tế</router-link></li>
            <li><router-link to="/guide">Hướng dẫn cho người mới chơi</router-link></li>
          </ul>
        </div>
        <div class="point-list">
          <div class="Content">
            LIÊN HỆ
            <Triangle class="Triangle"></Triangle>
          </div>
          <ul class="hover-list">
            <li><router-link to="/introduce">Giới thiệu</router-link></li>
            <li><router-link to="/contactstore">Liên hệ cửa hàng</router-link></li>
            <li><router-link to="/accountbank">Tài khoản ngân hàng</router-link></li>
            <li><router-link to="/buyingguide">Hướng dẫn mua hàng</router-link></li>
            <li><router-link to="/bankpolicy">Chính sách ngân hàng</router-link></li>
          </ul>
        </div>
        <div class="menu" v-if="this.mobile" @click="openModal">
          <Stack class="stack">
          </Stack>
        </div>
      </div>
      <div v-else class="NavTemp2">
        <RouterLink to="/" class="IconHome">
          <Home class="Home"></Home>
        </RouterLink>
        <div class="point-list">
          <div class="Content">
            TIN TỨC
            <Triangle class="Triangle"></Triangle>
          </div>
          <ul class="hover-list">
            <li><router-link to="/promotionnews">Tin khuyến mãi</router-link></li>
            <li><router-link to="/domesticnews">Tin RC trong nước</router-link></li>
            <li><router-link to="/internationalnews">Tin RC quốc tế</router-link></li>
            <li><router-link to="/guide">Hướng dẫn cho người mới chơi</router-link></li>
          </ul>
        </div>
        <div class="point-list">
          <div class="Content">
            LIÊN HỆ
            <Triangle class="Triangle"></Triangle>
          </div>
          <ul class="hover-list">
            <li><router-link to="/introduce">Giới thiệu</router-link></li>
            <li><router-link to="/contactstore">Liên hệ cửa hàng</router-link></li>
            <li><router-link to="/accountbank">Tài khoản ngân hàng</router-link></li>
            <li><router-link to="/buyingguide">Hướng dẫn mua hàng</router-link></li>
            <li><router-link to="/bankpolicy">Chính sách ngân hàng</router-link></li>
          </ul>
        </div>
        <div class="menu" v-if="this.mobile" @click="openModal">
          <Stack class="stack">
          </Stack>
        </div>
      </div>
    </div>
    <div class="out" v-if="this.modal" @click="openModal">
    </div>
    <div class="modal" v-if="this.modal">
      <ul>
          <li v-for="(part, index) in Index.type" :key="index">
            {{ part.name }}
            <Triangle v-if="part.children.length !== 0" class="Triangle"></Triangle>
            <ul class="hoverList">
              <li
                v-for="(part1, index1) in part.children"
                :key="index1"
              >
                {{ part1.name }}
              </li>
            </ul>
          </li>
        </ul>
    </div>
    <div v-else class="modal1" id ='modal1'>
      <ul>
          <li v-for="(part, index) in Index.type" :key="index">
            {{ part.name }}
            <Triangle v-if="part.children.length !== 0" class="Triangle"></Triangle>
            <ul class="hoverList">
              <li
                v-for="(part1, index1) in part.children"
                :key="index1"
              >
                {{ part1.name }}
              </li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import Key from '../icons/Key.vue'
import Point from '../icons/Point.vue'
import Search from '../icons/Search.vue'
import Triangle from '../icons/Triangle.vue'
import User from '../icons/User.vue'
import Home from '../icons/HomeIcon.vue'
import { RouterLink } from 'vue-router'
import Stack from '../icons/Stack.vue'
import Index from './Index.json'
</script>

<script>
export default {
  name: 'header',
  data() {
    return {
      Nav: 1,
      Number: 0,
      code: '',
      email: '',
      mobile: 0,
      modal: 0
    }
  },
  methods: {
    send() {
      // Code = this.code;
      // Email = this.email;
      sessionStorage.setItem('code', this.code)
      sessionStorage.setItem('email', this.email)
      this.$router.push({
        path: '/order/checkorder/:information',
        name: 'CheckOrder',
        params: { code: this.code, email: this.email }
      })
      if (window.location.pathname != '/') {
        location.reload()
      }
    },
    openModal() {
      this.modal = !this.modal;
    }
  },
  mounted() {
    if (localStorage.cart) {
      let Object = JSON.parse('[' + localStorage.cart + ']')
      console.log(Object.length)
      this.Number = Object.length
    }
    let scrollPos = window.scrollY
    window.addEventListener('scroll', () => {
      //check where the scroll y is
      this.currentPath = window.location.pathname
      scrollPos = window.scrollY
      if (scrollPos >= 50) {
        this.Nav = 0
      } else {
        this.Nav = 1
      }
    })
    let temp = document.getElementById('modal1')
    temp.style.animation= 'unset'
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

<style scoped src="./Header.css"></style>
