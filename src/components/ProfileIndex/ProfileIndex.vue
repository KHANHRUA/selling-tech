<template>
  <div class="all">
    <div class="Title">
      <Rank></Rank>
      Tài Khoản
    </div>
    <div class="four">
      <RouterLink to="/profile" class="link"> Quản lý cá nhân </RouterLink>
    </div>

    <div class="five">
      <RouterLink to="/profile/changepassword" class="link"> Đổi mật khẩu </RouterLink>
    </div>

    <div class="six">
      <RouterLink to="/profile/edit" class="link"> Sửa thông tin tài khoản cá nhân </RouterLink>
    </div>

    <div class="seven">
      <RouterLink to="/profile/favourite" class="link"> Danh sách sản phẩm yêu thích </RouterLink>
    </div>

    <div class="seven">
      <RouterLink to="/user/order" class="link"> Quản lý đơn hàng </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Rank from '../icons/Rank.vue'
</script>

<style scoped src="./ProfileIndex.css"></style>
