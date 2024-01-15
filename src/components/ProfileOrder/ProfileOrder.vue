<template>
  <div class="Container">
    <div class="path">
      <RouterLink to="/" class="link">Trang chủ</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Tài khoản</RouterLink>
      <RouterLink to="/user/order" class="link">/ Quản lý đơn</RouterLink>
    </div>

    <div class="Information">
      <Index></Index>
      <div class="Data">
        <div id="content">
          <h1>Danh sách sản phẩm yêu thích</h1>
          <div v-if="this.Object" class="content">
            <div class="wishlist-info">
              <table>
                <thead>
                  <tr class="tt">
                    <td class="image">Mã sản phẩm</td>
                    <td>Tên các sản phẩm</td>
                    <td>Tổng giá</td>
                    <td>Ngày</td>
                    <td>Tình trạng</td>
                    <td>Hành động</td>
                  </tr>
                </thead>
                <tbody id="wishlist-row40">
                  <tr v-for="(part, index) in this.Object" :key="index" class="information">
                    <td class="image" id="img-cart">
                      {{ part.code }}
                    </td>
                    <td>
                      <a href="/" v-for="(part1, index1) in part.product" :key="index1"
                        >{{ part1.name }},
                      </a>
                    </td>
                    <td>
                      <div class="price tp_product_price">{{ part.price }} VNĐ</div>
                    </td>
                    <td>{{ part.date }}</td>
                    <td>{{ part.status }}</td>
                    <td>
                      <a @click="openDelete(index)">Xóa</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.trash" class="alert">
      <div class="Text">Thông báo</div>
      Xóa sản phẩm này ?
      <div class="options">
        <div class="option" @click="Delete()">OK</div>
        <div class="option" @click="Cancel()">CANCEL</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Index from '../../components/ProfileIndex/ProfileIndex.vue'
import Data from './Data.json'
</script>
<script>
export default {
  name: 'ProfileOrder',
  data() {
    return {
      Object: undefined,
      trash: 0,
      index: undefined
    }
  },
  methods: {
    openDelete(index) {
      this.trash = 1
      this.index = index
    },
    Cancel() {
      this.trash = 0
    },
    Delete() {
      this.trash = 0
      this.Object.splice(this.index, 1)
    },
  }
  ,
  mounted() {
    this.Object = Data.data
    console.log(this.Object)
  }
}
</script>
<style scoped src="./ProfileOrder.css"></style>
