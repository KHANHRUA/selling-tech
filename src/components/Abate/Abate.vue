<template>
  <Header />
  <div class="container">
    <div class="row">
      <div id="breadcrumb">
        <ol class="breadcrumb">
          <li><a href="/">Trang chủ</a></li>
          /
          <li><a rel="nofollow" href="/cart">Giỏ hàng</a></li>
          /
          <li><a href="">Thanh toán</a></li>
        </ol>
      </div>
      <section class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <form action="" method="post" id="formCheckOut" class="">
          <div id="content">
            <h1 style="margin-bottom: 10px">Thanh toán đơn hàng</h1>
            <div class="checkout">
              <div id="payment-address">
                <div class="checkout-heading">
                  <h2 style="padding: 0; margin: 0; line-height: inherit; font-size: 14px">
                    Thông tin khách hàng
                  </h2>
                </div>
                <div class="checkout-content" style="display: block">
                  <div class="check">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div id="c">
                        <div class="form-validation-field-0formError parentFormformCheckOut formError" style="
                            opacity: 0.87;
                            position: absolute;
                            top: 8px;
                            left: 504.4px;
                            margin-top: -51px;
                          ">
                          <div class="formErrorContent">* Trường này bắt buộc<br /></div>
                          <div class="formErrorArrow">
                            <div class="line10"><!-- --></div>
                            <div class="line9"><!-- --></div>
                            <div class="line8"><!-- --></div>
                            <div class="line7"><!-- --></div>
                            <div class="line6"><!-- --></div>
                            <div class="line5"><!-- --></div>
                            <div class="line4"><!-- --></div>
                            <div class="line3"><!-- --></div>
                            <div class="line2"><!-- --></div>
                            <div class="line1"><!-- --></div>
                          </div>
                        </div>
                        <input type="text" name="customerName" class="validate[required]" value="" placeholder="Họ và tên"
                          id="form-validation-field-0" />
                      </div>
                      <div id="c">
                        <input type="text" name="customerMobile" class="validate[required]" value=""
                          placeholder="Điện thoại" />
                      </div>
                      <div id="c">
                        <input type="text" name="customerEmail" class="" value="" placeholder="Email" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div id="c">
                        <select id="cityId" name="customerCityId" class="validate[required]">
                          <option value="">Thành phố</option>
                          <option value="254">Hà Nội</option>
                          <option value="255">Hồ Chí Minh</option>
                          <option value="256">An Giang</option>
                          <option value="257">Bà Rịa - Vũng Tàu</option>
                          <option value="258">Bắc Ninh</option>
                          <option value="259">Bắc Giang</option>
                          <option value="260">Bình Dương</option>
                          <option value="261">Bình Định</option>
                          <option value="262">Bình Phước</option>
                          <option value="263">Bình Thuận</option>
                          <option value="264">Bến Tre</option>
                          <option value="265">Bắc Cạn</option>
                          <option value="266">Cần Thơ</option>
                          <option value="267">Khánh Hòa</option>
                          <option value="268">Thừa Thiên Huế</option>
                          <option value="269">Lào Cai</option>
                          <option value="270">Quảng Ninh</option>
                          <option value="271">Đồng Nai</option>
                          <option value="272">Nam Định</option>
                          <option value="273">Cà Mau</option>
                          <option value="274">Cao Bằng</option>
                          <option value="275">Gia Lai</option>
                          <option value="276">Hà Giang</option>
                          <option value="277">Hà Nam</option>
                          <option value="278">Hà Tĩnh</option>
                          <option value="279">Hải Dương</option>
                          <option value="280">Hải Phòng</option>
                          <option value="281">Hòa Bình</option>
                          <option value="282">Hưng Yên</option>
                          <option value="283">Kiên Giang</option>
                          <option value="284">Kon Tum</option>
                          <option value="285">Lai Châu</option>
                          <option value="286">Lâm Đồng</option>
                          <option value="287">Lạng Sơn</option>
                          <option value="288">Long An</option>
                          <option value="289">Nghệ An</option>
                          <option value="290">Ninh Bình</option>
                          <option value="291">Ninh Thuận</option>
                          <option value="292">Phú Thọ</option>
                          <option value="293">Phú Yên</option>
                          <option value="294">Quảng Bình</option>
                          <option value="295">Quảng Nam</option>
                          <option value="296">Quảng Ngãi</option>
                          <option value="297">Quảng Trị</option>
                          <option value="298">Sóc Trăng</option>
                          <option value="299">Sơn La</option>
                          <option value="300">Tây Ninh</option>
                          <option value="301">Thái Bình</option>
                          <option value="302">Thái Nguyên</option>
                          <option value="303">Thanh Hóa</option>
                          <option value="304">Tiền Giang</option>
                          <option value="305">Trà Vinh</option>
                          <option value="306">Tuyên Quang</option>
                          <option value="307">Vĩnh Long</option>
                          <option value="308">Vĩnh Phúc</option>
                          <option value="309">Yên Bái</option>
                          <option value="310">Đắk Lắk</option>
                          <option value="311">Đồng Tháp</option>
                          <option value="312">Đà Nẵng</option>
                          <option value="313">Đắc Nông</option>
                          <option value="314">Hậu Giang</option>
                          <option value="315">Bạc Liêu</option>
                          <option value="316">Điện Biên</option>
                        </select>
                      </div>
                      <div id="c">
                        <select id="districtId" name="customerDistrictId" class="validate[required]">
                          <option value="">Quận Huyện</option>
                        </select>
                      </div>
                      <div id="c">
                        <select id="wardId" name="customerWardId" class="validate[required]">
                          <option value="">Phường/xã</option>
                        </select>
                        <input type="hidden" name="selectIdWard" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="clear: both">
                    <div id="c">
                      <input type="text" name="customerAddress" class="validate[required]" value=""
                        placeholder="Địa chỉ" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="clear: both">
                    <div id="c">
                      <textarea name="description" value="" class="" placeholder="Ghi chú" style="width: 100%"></textarea>
                    </div>
                  </div>
                </div>
                <div style="clear: both; padding: 7px"></div>
              </div>
              <div id="payment-address">
                <div class="checkout-heading">
                  <h2 style="padding: 0; margin: 0; line-height: inherit; font-size: 14px">
                    Hình thức thanh toán
                  </h2>
                </div>
                <div class="checkout-content" style="overflow: hidden; display: block">
                  <div id="paymentMethod">
                    <div class="b">
                      <label class="listBankCustomer">
                        <input type="radio" name="paymentMethod" class="validate[required]" data-show=".listBankCustomer"
                          value="4" />
                        Chuyển khoản qua ngân hàng
                      </label>
                      <div class="listBank1 listBankCustomer" style="padding: 0 15px; display: none">
                        Thông tin tài khoản
                      </div>
                    </div>
                    <div class="b pay-cod">
                      <label>
                        <input type="radio" id="rdPaymentMethodCod" name="paymentMethod" class="validate[required]"
                          value="1" />
                        Thanh toán khi giao hàng (COD)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div id="payment-address">
                <div class="checkout-heading">
                  <h2 style="padding: 0; margin: 0; line-height: inherit; font-size: 14px">
                    Thông tin đơn hàng
                  </h2>
                </div>

                <div class="part3" v-if="!this.mobile">
                  <div class="Img">
                    <div class="Title">Ảnh</div>
                    <div v-for="(part, index) in this.Object" :key="index" class="imgAlign">
                      <img class="img" :src="`${part.url}`" alt="error" />
                    </div>
                  </div>
                  <div class="Name">
                    <div class="Title">Tên sản phẩm</div>
                    <div v-for="(part, index) in this.Object" :key="index" class="nameAlign">
                      {{ part.name }}
                    </div>
                  </div>
                  <div class="Quantity">
                    <div class="Title">Số lượng</div>
                    <div v-for="(part, index) in this.Object" :key="index" class="quantityAlign">
                      <input class="input" :value="`${this.Quantity[index]}`" @keydown.enter="set(index)"
                        @blur="set(index)" />
                      <Garbage class="Garbage" @click="openDelete(index)"></Garbage>
                    </div>
                  </div>
                  <div class="Price">
                    <div class="Title">Đơn giá</div>
                    <div v-for="(part, index) in this.Object" :key="index" class="priceAlign">
                      {{ part.price }} VNĐ
                    </div>
                  </div>
                  <div class="Sum">
                    <div class="Title">Thành tiền</div>
                    <div v-for="(part, index) in this.Object" :key="index" class="sumAlign">
                      {{ calculation(part.price, this.Quantity[index]) }} VNĐ
                    </div>
                  </div>
                  <div class="Special" v-if="this.Object === 0">
                    Giỏ hàng của bạn hiện chưa có sản phẩm nào !
                  </div>
                </div>
                <div style="margin: 0;" class="part4">
                  <div style="width: 100%; justify-content: flex-end; align-items: center;" class="RouteAlign">
                    <p style="margin: 0;">Tổng đơn hàng</p>
                    <div class="Total">{{ Sum() }} VNĐ</div>
                  </div>
                </div>
                <div style="margin: 0;" class="part4">
                  <div style="width: 100%;" class="RouteAlign">
                    <RouterLink class="Link" to="#"> XÁC NHẬN & ĐẶT HÀNG </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
    <div class="stackPoint">
      <div class="view">
        <div>
          Số điểm hiện có: {{ this.point }}
        </div>
        <div class="options">
          <div class="option" v-if="this.point >= 1000">
            <div class="checkbox" @click="select(1)" ></div>  1000 điểm: giảm 10% giá trị đơn hàng
          </div>
          <div class="option" @click="select(2)" v-if="this.point >= 2000">
            <div class="checkbox"></div> 2000 điểm: giảm 25% giá trị đơn hàng
          </div>
        </div>
      </div>
      <div class="pay">
        Số tiền:
      </div>
    </div>
  </div>
  <Footer />
</template>

<script >
import Header from '../header/header.vue'
import Footer from '../footer/footer.vue'

export default {
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

<!-- <script>
export default {
  name: 'abate',
  data() {
    return {
      point: 0,
      price: 1000000,
      theChoice: 0,
      scale: 1
    }
  },
  methods: {
    select(index) {
      let temp = document.getElementsByClassName('checkbox')
      if (index == this.theChoice) {
        temp[index - 1].style.backgroundColor = 'white'
        this.theChoice = 0;
        this.scale = 1;
      }
      else {
        this.theChoice = index;
        if (index == 1) {
          this.scale = 0.9
        }
        else {
          this.scale = 0.75
        }
        for (let i = 0; i < temp.length; i++){
          if (i == index - 1) {
            temp[i].style.backgroundColor = '#03ff03'
          }
          else {
            temp[i].style.backgroundColor = 'white'
          }
        }
      }
    }
  },
  mounted() {
    this.point = 2000
  },
}
</script> -->

<style scoped src="./abate.css">
</style>