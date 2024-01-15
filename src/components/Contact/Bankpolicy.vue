<template>
  <Header />
  <div class="Container">
    <div class="Index">
      <div data-v-4533200f="" class="CoreIndex">
        <div id="breadcrumb">
          <ol class="breadcrumb">
            <li><router-link to="/">Trang chủ</router-link></li>
            <li class="pad">/</li>
            <li class="color"><router-link to="">Chính sách ngân hàng </router-link></li>
          </ol>
        </div>
        <div class="flex">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 offcanvas-sidebar" id="oc-column-left">
            <div id="column-left" class="sidebar">
              <div class="box">
                <div class="box-heading">
                  <span>Danh mục</span>
                </div>
                <div class="box-content" id="pav-categorymenu">
                  <ul class="level1 pav-category box-category list">
                    <li>
                      <router-link to="">TIN TỨC</router-link>
                      <span class="head"><a style="float: right" href="#">+</a></span>
                      <ul class="level2 box-category list">
                        <li class="hover">
                          <router-link to="/promotionnews">
                            <i class="fa fa-angle-right"></i>
                            Tin khuyến mãi
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/domesticnews">
                            <i class="fa fa-angle-right"></i>
                            Tin RC trong nước
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/internationalnews">
                            <i class="fa fa-angle-right"></i>
                            Tin RC quốc tế
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/guide">
                            <i class="fa fa-angle-right"></i>
                            Hướng dẫn cho người mới chơi
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="">LIÊN HỆ</router-link>
                      <span class="head"><a style="float: right" href="#">+</a></span>
                      <ul class="level2 box-category list">
                        <li class="hover">
                          <router-link to="/introduce">
                            <i class="fa fa-angle-right"></i>
                            Giới thiệu
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/contactstore">
                            <i class="fa fa-angle-right"></i>
                            Liên hệ cửa hàng
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/accountbank">
                            <i class="fa fa-angle-right"></i>
                            Tài khoản ngân hàng
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/buyingguide">
                            <i class="fa fa-angle-right"></i>
                            Hướng dẫn mua hàng
                          </router-link>
                        </li>
                        <li class="hover">
                          <router-link to="/bankpolicy">
                            <i class="fa fa-angle-right"></i>
                            Chính sách bán hàng
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box pavblogs-comments-box">
                <div class="box-heading">
                  <span>Tin tức khác</span>
                </div>
                <div class="box-content">
                  <div class="pavblog-comments clearfix">
                    <div class="item-news clearfix">
                      <router-link to="/salespolicy" title="Chính sách bán hàng online">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes lazyloaded"
                          data-src=""
                          alt="Chính sách bán hàng online"
                          sizes="178px"
                      /></router-link>
                      <div class="news-title">Chính sách bán hàng online</div>
                      <span class="news-more">
                        <router-link to="/salespolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/returnpolicy" title="Quy định đổi trả hàng">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                          alt="Quy định đổi trả hàng"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                      /></router-link>
                      <div class="news-title">Quy định đổi trả hàng</div>
                      <span class="news-more">
                        <router-link to="/returnpolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/cuspolicy" title="Chính sách thẻ khách hàng">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                          alt="Chính sách thẻ khách hàng"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                      /></router-link>
                      <div class="news-title">Chính sách thẻ khách hàng</div>
                      <span class="news-more">
                        <router-link to="/cuspolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/warrantypolicy" title="Quy định bảo hành">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes ls-is-cached lazyloaded"
                          data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                          alt="Quy định bảo hành"
                          sizes="242px"
                          src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                      /></router-link>
                      <div class="news-title">Quy định bảo hành</div>
                      <span class="news-more">
                        <router-link to="/warrantypolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                    <div class="item-news clearfix">
                      <router-link to="/salespolicy" title="Chính sách bán hàng online">
                        <img
                          data-sizes="auto"
                          class="lazyautosizes lazyloaded"
                          data-src=""
                          alt="Chính sách bán hàng online"
                          sizes="178px"
                      /></router-link>
                      <div class="news-title">Chính sách bán hàng online</div>
                      <span class="news-more">
                        <router-link to="/salespolicy"> Xem chi tiết </router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div id="content" class="content-blog">
              <div class="pav-filter-blogs">
                <div class="pav-blogs">
                  <div class="leading-blogs clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="blog-item">
                        <div id="newImg">
                          <router-link to="/cuspolicy">
                            <img
                              data-sizes="auto"
                              class="lazyautosizes ls-is-cached lazyloaded"
                              data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_BLbKFImt1EDH71mo4gWn893M.jpg"
                              title="Chính sách dành cho đại lý"
                              alt="Chính sách dành cho đại lý"
                              sizes="405px"
                              src="https://pos.nvncdn.net/585eb4-8380/art/20151024_BLbKFImt1EDH71mo4gWn893M.jpg"
                            />
                          </router-link>
                        </div>
                        <div class="rows">
                          <div class="blog-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-header clearfix">
                              <h3 class="blog-title">
                                <router-link to="/cuspolicy"
                                  title="Chính sách thẻ khách hàng"
                                >
                                  Chính sách thẻ khách hàng
                                </router-link>
                              </h3>
                            </div>
                            <div class="description"><p></p><p><strong><span style="color:#000080;">CHÍNH SÁCH THẺ KHÁCH HÀNG THÂN THIẾT</span></strong></p><p></p></div>
                            <div class="blog-readmore">
                              <router-link to="/cuspolicy"
                                class="button tp_button"
                                >Xem thêm</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="blog-item">
                        <div id="newImg">
                          <router-link to="/cuspolicy">
                            <img
                              data-sizes="auto"
                              class="lazyautosizes ls-is-cached lazyloaded"
                              data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                              title="Chính sách thẻ khách hàng"
                              alt="Chính sách thẻ khách hàng"
                              sizes="405px"
                              src="https://pos.nvncdn.net/585eb4-8380/art/20151024_8qA4txq4m8M9XJJYa99kztVV.jpg"
                            />
                          </router-link>
                        </div>
                        <div class="rows">
                          <div class="blog-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-header clearfix">
                              <h3 class="blog-title">
                                <router-link to="/cuspolicy"
                                  title="Chính sách thẻ khách hàng"
                                >
                                  Chính sách thẻ khách hàng
                                </router-link>
                              </h3>
                            </div>
                            <div class="description">
                              <p></p>
                              <p>
                                <strong
                                  ><span style="color: #000080"
                                    >CHÍNH SÁCH THẺ KHÁCH HÀNG THÂN THIẾT</span
                                  ></strong
                                >
                              </p>
                              <p></p>
                            </div>
                            <div class="blog-readmore">
                              <router-link to="/cuspolicy"
                                class="button tp_button"
                                >Xem thêm</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="blog-item">
                        <div id="newImg">
                          <router-link to="/returnpolicy">
                            <img
                              data-sizes="auto"
                              class="lazyautosizes ls-is-cached lazyloaded"
                              data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                              title="Quy định đổi trả hàng"
                              alt="Quy định đổi trả hàng"
                              sizes="405px"
                              src="https://pos.nvncdn.net/585eb4-8380/art/20151024_N8LvdpE6nNNOxbtzAzj0a1wN.jpg"
                            />
                          </router-link>
                        </div>
                        <div class="rows">
                          <div class="blog-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-header clearfix">
                              <h3 class="blog-title">
                                <router-linkl to="/returnpolicy"
                                  title="Quy định đổi trả hàng"
                                >
                                  Quy định đổi trả hàng
                                </router-linkl>
                              </h3>
                            </div>
                            <div class="description">
                              <p></p>
                              <p>
                                <strong
                                  ><span
                                    ><span style="font-size: 16px" class="color"
                                      >Linh kiện đổi hàng phải đáp ứng các điều kiện sau:</span
                                    ></span
                                  ></strong
                                >
                              </p>
                              <p></p>
                            </div>
                            <div class="blog-readmore">
                              <router-link to="/returnpolicy" class="button tp_button"
                                >Xem thêm</router-link >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="blog-item">
                        <div id="newImg">
                          <router-link to="/warrantypolicy">
                            <img
                              data-sizes="auto"
                              class="lazyautosizes ls-is-cached lazyloaded"
                              data-src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                              title="Quy định bảo hành"
                              alt="Quy định bảo hành"
                              sizes="405px"
                              src="https://pos.nvncdn.net/585eb4-8380/art/20151024_tBn0dWGzT7DoMuRh1TDUAzJJ.jpg"
                            />
                          </router-link>
                        </div>
                        <div class="rows">
                          <div class="blog-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-header clearfix">
                              <h3 class="blog-title">
                                <router-link to="/warrantypolicy"
                                  title="Chính sách thẻ khách hàng"
                                >
                                  Quy định bảo hành
                                </router-link>
                              </h3>
                            </div>
                            <div class="description">
                              <p></p>
                              <p>
                                <strong
                                  ><span style="color: #000080"
                                    >QUY ĐỊNH BẢO HÀNH VỚI SẢN PHẨM MUA TẠI THAITUAN-HOBBY</span
                                  ></strong
                                >
                              </p>
                              <p></p>
                            </div>
                            <div class="blog-readmore">
                              <router-link to="/warrantypolicy"
                                class="button tp_button"
                                >Xem thêm</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="blog-item">
                        <div id="newImg">
                          <router-link to="/warrantypolicy">
                            <img
                              data-sizes="auto"
                              class="lazyautosizes lazyloaded"
                              data-src=""
                              title="Chính sách bán hàng online"
                              alt="Chính sách bán hàng online"
                              sizes="178px"
                            />
                          </router-link>
                        </div>
                        <div class="rows">
                          <div class="blog-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="blog-header clearfix">
                              <h3 class="blog-title">
                                <router-link to="/salespolicy"
                                  title="Chính sách thẻ khách hàng"
                                >
                                  Chính sách bán hàng online
                                </router-link>
                              </h3>
                            </div>
                            <div class="description">
                              <p></p>
                              <p>
                                <strong
                                  ><span style="color: #000080"
                                    >CHÍNH SÁCH DÀNH CHO KHÁCH HÀNG MUA HÀNG ONLINE</span
                                  ></strong
                                >
                              </p>
                              <p></p>
                            </div>
                            <div class="blog-readmore">
                              <router-link to="/salespolicy"
                                class="button tp_button"
                                >Xem thêm</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="secondary clearfix">
                    <div class="pav-pagination pagination">
                      <div class="results">
                        <div class="paginator">
                          <span class="labelPages">1 - 5 / 5</span
                          ><span class="titlePages">&nbsp;&nbsp;Trang: </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from '../header/Header.vue'
import Footer from '../footer/Footer.vue'
</script>
<style spcoed src="./Bankpolicy.css">
</style>