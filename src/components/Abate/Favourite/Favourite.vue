<template>
  <div class="Container">
    <div class="path">
      <RouterLink to="/" class="link">Trang chủ</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Tài khoản</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Yêu thích</RouterLink>
    </div>

    <div class="Information">
      <Index></Index>
      <div class="Data">
        <div id="content">
          <h1>Danh sách sản phẩm yêu thích</h1>
          <div class="content">
            <div class="wishlist-info">
              <table>
                <thead>
                  <tr class="tt">
                    <td class="image">Ảnh</td>
                    <td>Tên sản phẩm</td>
                    <td>Giá</td>
                    <td>Ngày</td>
                    <td>Tình trạng</td>
                    <td>Hành động</td>
                  </tr>
                </thead>

                <tbody id="wishlist-row40">
                  <tr v-for="(product, index) in wishlistProducts" :key="index">
                    <td class="image">
                      <a :href="product.url">
                        <img
                          :src="product.imageSrc"
                          :alt="product.name"
                          :sizes="product.imageSizes"
                        />
                      </a>
                    </td>
                    <td>
                      <a :href="product.url">{{ product.name }}</a>
                    </td>
                    <td>
                      <div class="price tp_product_price">{{ product.price }}</div>
                    </td>
                    <td>{{ product.date }}</td>
                    <td>{{ product.status }}</td>
                    <td>
                      <a @click="confirmDelete(index)"><i class="far fa-trash-alt"></i> Xóa</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Index from '../../components/ProfileIndex/ProfileIndex.vue'
import { ref } from 'vue'

const wishlistProducts = ref([
  {
    imageSrc: 'https://pos.nvncdn.net/585eb4-8380/ps/20230821_a2rg0FvsVe.jpeg',
    imageSizes: '193px',
    name: 'Mạch Thu Betafpv SuperP 14CH Diversity 915Mhz',
    price: '690,000 VNĐ',
    date: '28/08/2023',
    status: 'Còn hàng'
  },
  {
    imageSrc: 'https://pos.nvncdn.net/585eb4-8380/ps/20230813_SNXtMmFcRa.jpeg',
    imageSizes: '193px',
    name: 'Thiếc Hàn Sanki 60/40 0.8mm 250g',
    price: '195,000 VNĐ',
    date: '28/08/2023',
    status: 'Còn hàng'
  },
  {
    imageSrc: 'https://pos.nvncdn.net/585eb4-8380/ps/20211112_CfbtxZETasz4XIy3mYdOhzC8.jpg',
    imageSizes: '193px',
    name: 'Máy Bay Ripper R690 - PNP',
    price: ' 2,990,000 VNĐ',
    date: '28/08/2023',
    status: 'Còn hàng'
  },
  {
    imageSrc: 'https://pos.nvncdn.net/585eb4-8380/ps/20211112_CfbtxZETasz4XIy3mYdOhzC8.jpg',
    imageSizes: '193px',
    name: '	Vỏ Máy Bay Ripper R690',
    price: '1,699,000 VNĐ',
    date: '28/08/2023',
    status: 'Còn hàng'
  },
  {
    url: '/thiec-han-sanki-6040-0.8mm-250g-p37882120.html',
    imageSrc: 'https://pos.nvncdn.net/585eb4-8380/ps/20200614_jfPB0ouINa7UP4i7RVmseXR2.jpg',
    imageSizes: '193px',
    name: '		Nam Châm Tròn 1*10Mm(10 Chiếc)',
    price: '10,000 VNĐ',
    date: '28/08/2023',
    status: 'Còn hàng'
  },
  {
    imageSrc: 'https://pos.nvncdn.net/585eb4-8380/ps/20200422_KsxsnTuNCphDsyMToOE86gCc.jpg',
    imageSizes: '193px',
    name: '	Càng Gập Đơn 140Mm',
    price: '150,000 VNĐ',
    date: '28/08/2023',
    status: 'Còn hàng'
  }
]
)

const deleteProduct = (index) => {
  wishlistProducts.value.splice(index, 1)
}

const confirmDelete = (index) => {
  const confirmMessage = "Bạn có chắc muốn xóa sản phẩm này?";
  const userConfirmed = window.confirm(confirmMessage);

  if (userConfirmed) {
    deleteProduct(index);
  }
}
</script>
<style scoped src="./Favourite.css"></style>
