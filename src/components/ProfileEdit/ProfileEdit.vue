<template>
  <div class="Container">
    <div class="path">
      <RouterLink to="/" class="link">Trang chủ</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Tài khoản</RouterLink>
      <RouterLink to="/user/signup" class="link">/ Chỉnh sửa</RouterLink>
    </div>

    <div class="Information">
      <Index></Index>
      <div class="Data">
        <div id="content">
          <h1>Sửa thông tin tài khoản cá nhân</h1>
          <p style="color: #ccc; margin: 5px 0 0 0"></p>
          <form method="POST" action="/profile/edit" class="f">
            <table class="profile" cellspacing="0" style="margin-top: 10px">
              <tbody>
                <tr>
                  <td>Tên đăng nhập</td>
                  <td class="val"></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td class="val">123@gmail.com</td>
                </tr>
                <tr>
                  <td>Họ và tên</td>
                  <td class="val">
                    <input type="text" name="fullName" value="khanh" />
                  </td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td class="val">
                    <input name="mobile" type="text" value="" />
                  </td>
                </tr>
                <tr>
                  <td>Thành phố</td>
                  <td class="val">
                    <select name="cityId" id="cityId" @change="filterDistricts">
                      <option value="">Chọn Tỉnh/ thành phố</option>
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
                  </td>
                </tr>
                <tr>
                  <td>Quận Huyện</td>
                  <td class="val">
                    <select name="districtId" v-if="selectedCity === '254'">
                      <!-- Hà nội  -->
                      <option value=""></option>

                      <option value="317">Quận Hoàng Mai</option>
                      <option value="318">Quận Ba Đình</option>
                      <option value="319">Quận Long Biên</option>
                      <option value="320">Quận Cầu Giấy</option>
                      <option value="321">Quận Đống Đa</option>
                      <option value="322">Quận Hai Bà Trưng</option>
                      <option value="323">Quận Hoàn Kiếm</option>
                      <option value="324">Quận Tây Hồ</option>
                      <option value="325">Quận Thanh Xuân</option>
                      <option value="326">Huyện Ba Vì</option>
                      <option value="327">Huyện Chương Mỹ</option>
                      <option value="328">Huyện Đan Phượng</option>
                      <option value="331">Huyện Gia Lâm</option>
                      <option value="332">Huyện Hoài Đức</option>
                      <option value="333">Huyện Mê Linh</option>
                      <option value="334">Huyện Mỹ Đức</option>
                      <option value="335">Huyện Phú Xuyên</option>
                      <option value="336">Huyện Phúc Thọ</option>
                      <option value="337">Huyện Quốc Oai</option>
                      <option value="338">Huyện Sóc Sơn</option>
                      <option value="339">Huyện Thạch Thất</option>
                      <option value="340">Huyện Thanh Oai</option>
                      <option value="341">Huyện Thanh Trì</option>
                      <option value="342">Huyện Thường Tín</option>
                      <option value="344">Huyện Ứng Hòa</option>
                      <option value="379">Quận Hà Đông</option>
                      <option value="871">Huyện Đông Anh</option>
                      <option value="1011">Thị xã Sơn Tây</option>
                      <option value="1032">Quận Bắc Từ Liêm</option>
                      <option value="1033">Quận Nam Từ Liêm</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '255'">
                      <option value=""></option>
                      <option value="329">Quận 1</option>
                      <option value="330">Quận 2</option>
                      <option value="345">Quận 3</option>
                      <option value="346">Quận 4</option>
                      <option value="347">Quận 5</option>
                      <option value="348">Quận 6</option>
                      <option value="349">Quận 7</option>
                      <option value="350">Quận 8</option>
                      <option value="351">Quận 9</option>
                      <option value="352">Quận 10</option>
                      <option value="353">Quận 11</option>
                      <option value="354">Quận 12</option>
                      <option value="355">Quận Tân Bình</option>
                      <option value="356">Quận Tân Phú</option>
                      <option value="357">Quận Bình Tân</option>
                      <option value="358">Quận Phú Nhuận</option>
                      <option value="359">Quận Gò Vấp</option>
                      <option value="360">Quận Bình Thạnh</option>
                      <option value="361">Quận Thủ Đức</option>
                      <option value="873">Huyện Cần Giờ</option>
                      <option value="874">huyện Củ Chi</option>
                      <option value="1001">Huyện Bình Chánh</option>
                      <option value="1002">Huyện Hóc Môn</option>
                      <option value="1003">Huyện Nhà Bè</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '256'">
                      <option value=""></option>
                      <option value="397">Huyện An Phú</option>
                      <option value="398">Huyện Châu Phú</option>
                      <option value="399">Thành phố Châu Đốc</option>
                      <option value="400">Huyện Châu Thành</option>
                      <option value="401">Huyện Chợ Mới</option>
                      <option value="402">Thành phố Long Xuyên</option>
                      <option value="403">Thị xã Tân Châu</option>
                      <option value="404">Huyện Thoại Sơn</option>
                      <option value="405">Huyện Tịnh Biên</option>
                      <option value="406">Huyện Tri Tôn</option>
                      <option value="1013">Huyện Phú Tân</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '257'">
                      <option value=""></option>
                      <option value="389">Huyện Châu Đức</option>
                      <option value="390">Huyện Côn Đảo</option>
                      <option value="391">Huyện Đất Đỏ</option>
                      <option value="392">Huyện Long Điền</option>
                      <option value="393">Thị xã Phú Mỹ</option>
                      <option value="394">Thành phố Bà Rịa</option>
                      <option value="395">Thành phố Vũng Tàu</option>
                      <option value="396">Huyện Xuyên Mộc</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '258'">
                      <option value=""></option>
                      <option value="424">Thành phố Bắc Ninh</option>
                      <option value="425">Huyện Gia Bình</option>
                      <option value="426">Huyện Quế Võ</option>
                      <option value="427">Huyện Thuận Thành</option>
                      <option value="428">Huyện Tiên Du</option>
                      <option value="429">Thị xã Từ Sơn</option>
                      <option value="430">Huyện Yên Phong</option>
                      <option value="883">Huyện Lương Tài</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '259'">
                      <option value=""></option>
                      <option value="413">Thành phố Bắc Giang</option>
                      <option value="414">Huyện Lục Nam</option>
                      <option value="415">Huyện Lục Ngạn</option>
                      <option value="416">Huyện Sơn Động</option>
                      <option value="417">Huyện Tân Yên</option>
                      <option value="418">Huyện Yên Dũng</option>
                      <option value="419">Huyện Yên Thế</option>
                      <option value="876">Huyện Hiệp Hòa</option>
                      <option value="877">Huyện Lạng Giang</option>
                      <option value="878">Huyện Việt Yên</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '260'">
                      <option value=""></option>
                      <option value="439">Thị xã Bến Cát</option>
                      <option value="440">Huyện Dầu Tiếng</option>
                      <option value="441">Thị xã Dĩ An</option>
                      <option value="442">Huyện Phú Giáo</option>
                      <option value="443">Thị xã Tân Uyên</option>
                      <option value="444">Thành phố Thủ Dầu Một</option>
                      <option value="445">Thị xã Thuận An</option>
                      <option value="1027">Huyện Bàu Bàng</option>
                      <option value="1028">Huyện Bắc Tân Uyên</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '261'">
                      <option value=""></option>
                      <option value="446">Huyện An Lão</option>
                      <option value="447">Huyện An Nhơn</option>
                      <option value="448">Huyện Hoài Nhơn</option>
                      <option value="449">Huyện Phù Cát</option>
                      <option value="450">Huyện Phù Mỹ</option>
                      <option value="451">Thành phố Qui Nhơn</option>
                      <option value="452">Huyện Tây Sơn</option>
                      <option value="453">Huyện Tuy Phước</option>
                      <option value="454">Huyện Vân Canh</option>
                      <option value="455">Huyện Vĩnh Thạnh</option>
                      <option value="885">Huyện Hoài Ân</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '262'">
                      <option value=""></option>
                      <option value="446">Huyện An Lão</option>
                      <option value="447">Huyện An Nhơn</option>
                      <option value="448">Huyện Hoài Nhơn</option>
                      <option value="449">Huyện Phù Cát</option>
                      <option value="450">Huyện Phù Mỹ</option>
                      <option value="451">Thành phố Qui Nhơn</option>
                      <option value="452">Huyện Tây Sơn</option>
                      <option value="453">Huyện Tuy Phước</option>
                      <option value="454">Huyện Vân Canh</option>
                      <option value="455">Huyện Vĩnh Thạnh</option>
                      <option value="885">Huyện Hoài Ân</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '263'">
                      <option value=""></option>
                      <option value="456">Thị xã Bình Long</option>
                      <option value="457">Huyện Bù Đăng</option>
                      <option value="458">Thị xã Đồng Xoài</option>
                      <option value="459">Huyện Lộc Ninh</option>
                      <option value="460">Thị xã Phước Long</option>
                      <option value="461">Huyện Bù Gia Mập</option>
                      <option value="886">Huyện Bù Đốp</option>
                      <option value="887">Huyện Chơn Thành</option>
                      <option value="888">Huyện Đồng Phú</option>
                      <option value="889">Huyện Hớn Quản</option>
                      <option value="1018">Huyện Phú Riềng</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '264'">
                      <option value=""></option>
                      <option value="462">Huyện Hàm Tân</option>
                      <option value="463">Thị xã La Gi</option>
                      <option value="464">Thành phố Phan Thiết</option>
                      <option value="465">Huyện Tuy Phong</option>
                      <option value="890">Huyện Bắc Bình</option>
                      <option value="891">Huyện Đức Linh</option>
                      <option value="892">Huyện Hàm Thuận Bắc</option>
                      <option value="893">Huyện Hàm Thuận Nam</option>
                      <option value="894">Huyện đảo Phú Quý</option>
                      <option value="895">Huyện Tánh Linh</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '265'">
                      <option value=""></option>
                      <option value="431">Huyện Ba Tri</option>
                      <option value="432">Thành phố Bến Tre</option>
                      <option value="433">Huyện Bình Đại</option>
                      <option value="434">Huyện Châu Thành</option>
                      <option value="435">Huyện Chợ Lách</option>
                      <option value="436">Huyện Giồng Trôm</option>
                      <option value="437">Huyện Mỏ Cày Nam</option>
                      <option value="438">Huyện Thạnh Phú</option>
                      <option value="884">Huyện Mỏ Cày Bắc</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '266'">
                      <option value=""></option>
                      <option value="420">Thành phố Bắc Kạn</option>
                      <option value="421">Huyện Chợ Mới</option>
                      <option value="422">Huyện Na Rì</option>
                      <option value="423">Huyện Ngân Sơn</option>
                      <option value="879">Huyện Ba Bể</option>
                      <option value="880">Huyện Bạch Thông</option>
                      <option value="881">Huyện Chợ Đồn</option>
                      <option value="882">Huyện Pác Nặm</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '267'">
                      <option value=""></option>
                      <option value="375">Quận Ninh Kiều</option>
                      <option value="376">Quận Bình Thủy</option>
                      <option value="377">Quận Cái Răng</option>
                      <option value="378">Quận Thốt Nốt</option>
                      <option value="380">Quận Ô môn</option>
                      <option value="483">Huyện Cờ Đỏ</option>
                      <option value="484">Huyện Phong Điền</option>
                      <option value="485">Huyện Vĩnh Thạnh</option>
                      <option value="896">Huyện Thới Lai</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '268'">
                      <option value=""></option>
                      <option value="625">Thành phố Cam Ranh</option>
                      <option value="626">Huyện Diên Khánh</option>
                      <option value="627">Huyện Khánh Sơn</option>
                      <option value="628">Huyện Khánh Vĩnh</option>
                      <option value="629">Thành phố Nha Trang</option>
                      <option value="630">Thị xã Ninh Hòa</option>
                      <option value="631">Huyện Vạn Ninh</option>
                      <option value="924">Huyện đảo Trường Sa</option>
                      <option value="925">Huyện Cam Lâm</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '269'">
                      <option value=""></option>
                      <option value="381">Huyện A Lưới</option>
                      <option value="383">Huyện Nam Đông</option>
                      <option value="384">Huyện Phong Điền</option>
                      <option value="385">Huyện Phú Lộc</option>
                      <option value="386">Huyện Phú Vang</option>
                      <option value="387">Huyện Quảng Điền</option>
                      <option value="388">Thị xã Hương Thủy</option>
                      <option value="872">Thành phố Huế</option>
                      <option value="1017">Thị xã Hương Trà</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '270'">
                      <option value=""></option>
                      <option value="646">Huyện Bát Xát</option>
                      <option value="647">Huyện Bắc Hà</option>
                      <option value="648">Thành phố Lào Cai</option>
                      <option value="649">Huyện Mường Khương</option>
                      <option value="650">Huyện Sa Pa</option>
                      <option value="651">Huyện Si Ma Cai</option>
                      <option value="652">Huyện Văn Bàn</option>
                      <option value="939">Huyện Bảo Thắng</option>
                      <option value="940">Huyện Bảo Yên</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '271'">
                      <option value=""></option>
                      <option value="506">Thành phố Biên Hòa</option>
                      <option value="507">Huyện Cẩm Mỹ</option>
                      <option value="508">Huyện Định Quán</option>
                      <option value="509">Thị xã Long Khánh</option>
                      <option value="510">Huyện Long Thành</option>
                      <option value="511">Huyện Nhơn Trạch</option>
                      <option value="512">Huyện Thống Nhất</option>
                      <option value="513">Huyện Trảng Bom</option>
                      <option value="514">Huyện Vĩnh Cửu</option>
                      <option value="515">Huyện Xuân Lộc</option>
                      <option value="516">Huyện Tân Phú</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '272'">
                      <option value=""></option>
                      <option value="674">Huyện Giao Thủy</option>
                      <option value="675">Huyện Hải Hậu</option>
                      <option value="676">Huyện Mỹ Lộc</option>
                      <option value="677">Thành phố Nam Định</option>
                      <option value="678">Huyện Nam Trực</option>
                      <option value="679">Huyện Nghĩa Hưng</option>
                      <option value="680">Huyện Trực Ninh</option>
                      <option value="681">Huyện Vụ Bản</option>
                      <option value="682">Huyện Xuân Trường</option>
                      <option value="683">Huyện Ý Yên</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '273'">
                      <option value=""></option>
                      <option value="466">Thành phố Cà Mau</option>
                      <option value="467">Huyện Cái Nước</option>
                      <option value="468">Huyện Đầm Dơi</option>
                      <option value="469">Huyện Năm Căn</option>
                      <option value="470">Huyện Ngọc Hiển</option>
                      <option value="471">Huyện Phú Tân</option>
                      <option value="472">Huyện Thới Bình</option>
                      <option value="473">Huyện Trần Văn Thời</option>
                      <option value="474">Huyện U Minh</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '274'">
                      <option value=""></option>
                      <option value="475">Huyện Bảo Lạc</option>
                      <option value="476">Huyện Bảo Lâm</option>
                      <option value="477">Thành phố Cao Bằng</option>
                      <option value="478">Huyện Nguyên Bình</option>
                      <option value="479">Huyện Quảng Uyên</option>
                      <option value="480">Huyện Thông Nông</option>
                      <option value="481">Huyện Trà Lĩnh</option>
                      <option value="482">Huyện Trùng Khánh</option>
                      <option value="897">Huyện Hà Quảng</option>
                      <option value="898">Huyện Hạ Lang</option>
                      <option value="899">Huyện Hòa An</option>
                      <option value="900">Huyện Phục Hòa</option>
                      <option value="901">Huyện Thạch An</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '275'">
                      <option value=""></option>
                      <option value="529">Thị xã An Khê</option>
                      <option value="530">Thị xã Ayun Pa</option>
                      <option value="531">Huyện Chư Prông</option>
                      <option value="532">Huyện Chư Sê</option>
                      <option value="533">Huyện Đăk Đoa</option>
                      <option value="534">Huyện Đức Cơ</option>
                      <option value="535">Huyện KBang</option>
                      <option value="536">Huyện Kông Chro</option>
                      <option value="537">Huyện Krông Pa</option>
                      <option value="538">Huyện Mang Yang</option>
                      <option value="539">Huyện Phú Thiện</option>
                      <option value="540">Thành phố Pleiku</option>
                      <option value="541">Huyện Chư Pưh</option>
                      <option value="907">Huyện Chư Păh</option>
                      <option value="908">Huyện Đắk Pơ</option>
                      <option value="909">Huyện Ia Grai</option>
                      <option value="910">Huyện Ia Pa</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '276'">
                      <option value=""></option>
                      <option value="542">Huyện Đồng Văn</option>
                      <option value="543">Thành phố Hà Giang</option>
                      <option value="544">Huyện Mèo Vạc</option>
                      <option value="545">Huyện Quản Bạ</option>
                      <option value="546">Huyện Vị Xuyên</option>
                      <option value="547">Huyện Xín Mần</option>
                      <option value="548">Huyện Yên Minh</option>
                      <option value="911">Huyện Bắc Mê</option>
                      <option value="912">Huyện Bắc Quang</option>
                      <option value="913">Huyện Hoàng Su Phì</option>
                      <option value="914">Huyện Quang Bình</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '277'">
                      <option value=""></option>
                      <option value="549">Huyện Bình Lục</option>
                      <option value="550">Huyện Duy Tiên</option>
                      <option value="551">Huyện Kim Bảng</option>
                      <option value="552">Huyện Lý Nhân</option>
                      <option value="553">Thành phố Phủ Lý</option>
                      <option value="915">Huyện Thanh Liêm</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '278'">
                      <option value=""></option>
                      <option value="554">Huyện Can Lộc</option>
                      <option value="555">Huyện Cẩm Xuyên</option>
                      <option value="556">Huyện Đức Thọ</option>
                      <option value="557">Thành phố Hà Tĩnh</option>
                      <option value="558">Thị xã Hồng Lĩnh</option>
                      <option value="559">Huyện Hương Khê</option>
                      <option value="560">Huyện Hương Sơn</option>
                      <option value="561">Thị xã Kỳ Anh</option>
                      <option value="562">Huyện Vũ Quang</option>
                      <option value="563">Huyện Thạch Hà</option>
                      <option value="564">Huyện Nghi Xuân</option>
                      <option value="916">Huyện Lộc Hà</option>
                      <option value="1025">Huyện Kỳ Anh</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '279'">
                      <option value=""></option>
                      <option value="565">Huyện Bình Giang</option>
                      <option value="566">Huyện Cẩm Giàng</option>
                      <option value="567">Thị xã Chí Linh</option>
                      <option value="568">Huyện Gia Lộc</option>
                      <option value="569">Thành phố Hải Dương</option>
                      <option value="570">Huyện Kim Thành</option>
                      <option value="571">Huyện Kinh Môn</option>
                      <option value="572">Huyện Nam Sách</option>
                      <option value="573">Huyện Ninh Giang</option>
                      <option value="574">Huyện Thanh Hà</option>
                      <option value="575">Huyện Thanh Miện</option>
                      <option value="576">Huyện Tứ Kỳ</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '280'">
                      <option value=""></option>
                      <option value="362">Quận Hồng Bàng</option>
                      <option value="363">Quận Ngô Quyền</option>
                      <option value="364">Quận Lê Chân</option>
                      <option value="365">Quận Kiến An</option>
                      <option value="366">Quận Hải An</option>
                      <option value="367">Quận Dương Kinh</option>
                      <option value="368">Quận Đồ Sơn</option>
                      <option value="577">Huyện An Dương</option>
                      <option value="578">Huyện đảo Cát Hải</option>
                      <option value="579">Huyện Kiến Thụy</option>
                      <option value="580">Huyện Tiên Lãng</option>
                      <option value="581">Huyện Vĩnh Bảo</option>
                      <option value="917">Huyện An Lão</option>
                      <option value="918">Huyện đảo Bạch Long Vĩ</option>
                      <option value="919">Huyện Thuỷ Nguyên</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '281'">
                      <option value=""></option>
                      <option value="589">Huyện Cao Phong</option>
                      <option value="590">Huyện Đà Bắc</option>
                      <option value="591">Thành phố Hoà Bình</option>
                      <option value="592">Huyện Kim Bôi</option>
                      <option value="593">Huyện Lạc Sơn</option>
                      <option value="594">Huyện Lạc Thủy</option>
                      <option value="595">Huyện Lương Sơn</option>
                      <option value="596">Huyện Mai Châu</option>
                      <option value="597">Huyện Yên Thủy</option>
                      <option value="920">Huyện Kỳ Sơn</option>
                      <option value="1016">Huyện Tân Lạc</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '282'">
                      <option value=""></option>
                      <option value="598">Huyện Ân Thi</option>
                      <option value="599">Thành phố Hưng Yên</option>
                      <option value="600">Huyện Khoái Châu</option>
                      <option value="601">Huyện Mỹ Hào</option>
                      <option value="602">Huyện Văn Giang</option>
                      <option value="603">Huyện Văn Lâm</option>
                      <option value="604">Huyện Yên Mỹ</option>
                      <option value="921">Huyện Kim Động</option>
                      <option value="922">Huyện Phù Cừ</option>
                      <option value="923">Huyện Tiên Lữ</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '283'">
                      <option value=""></option>
                      <option value="605">Huyện An Biên</option>
                      <option value="606">Huyện An Minh</option>
                      <option value="607">Huyện Châu Thành</option>
                      <option value="608">Huyện Giồng Riềng</option>
                      <option value="609">Huyện Gò Quao</option>
                      <option value="610">Thị xã Hà Tiên</option>
                      <option value="611">Huyện Hòn Đất</option>
                      <option value="612">Huyện Kiên Lương</option>
                      <option value="613">Huyện đảo Phú Quốc</option>
                      <option value="614">Thành phố Rạch Giá</option>
                      <option value="615">Huyện Tân Hiệp</option>
                      <option value="616">Huyện U Minh Thượng</option>
                      <option value="617">Huyện Vĩnh Thuận</option>
                      <option value="926">Huyện đảo Kiên Hải</option>
                      <option value="927">Huyện Giang Thành</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '284'">
                      <option value=""></option>
                      <option value="618">Huyện Đắk Glei</option>
                      <option value="619">Huyện Đắk Hà</option>
                      <option value="620">Huyện Đăk Tô</option>
                      <option value="621">Huyện Kon Plông</option>
                      <option value="622">Huyện Kon Rẫy</option>
                      <option value="623">Huyện Sa Thầy</option>
                      <option value="624">Huyện Tu Mơ Rông</option>
                      <option value="928">Thành phố Kon Tum</option>
                      <option value="929">Huyện Ngọc Hồi</option>
                      <option value="1024">Huyện Ia H'Drai</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '285'">
                      <option value=""></option>
                      <option value="632">Thị xã Lai Châu</option>
                      <option value="633">Huyện Phong Thổ</option>
                      <option value="634">Huyện Sìn Hồ</option>
                      <option value="635">Huyện Tam Đường</option>
                      <option value="636">Huyện Than Uyên</option>
                      <option value="637">Huyện Mường Tè</option>
                      <option value="930">Huyện Tân Uyên</option>
                      <option value="1015">Huyện Nậm Nhùn</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '286'">
                      <option value="653">Huyện Bảo Lâm</option>
                      <option value="654">Thành phố Bảo Lộc</option>
                      <option value="655">Huyện Di Linh</option>
                      <option value="656">Thành phố Đà Lạt</option>
                      <option value="657">Huyện Đạ Tẻh</option>
                      <option value="658">Huyện Lạc Dương</option>
                      <option value="659">Huyện Lâm Hà</option>
                      <option value="931">Huyện Cát Tiên</option>
                      <option value="932">Huyện Đạ Huoai</option>
                      <option value="933">Huyện Đam Rông</option>
                      <option value="934">huyện Đơn Dương</option>
                      <option value="935">Huyện Đức Trọng</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '287'">
                      <option value="638">Huyện Bắc Sơn</option>
                      <option value="639">Huyện Bình Gia</option>
                      <option value="640">Huyện Chi Lăng</option>
                      <option value="641">Huyện Đình Lập</option>
                      <option value="642">Huyện Hữu Lũng</option>
                      <option value="643">Thành phố Lạng Sơn</option>
                      <option value="644">Huyện Lộc Bình</option>
                      <option value="645">Huyện Văn Quan</option>
                      <option value="936">Huyện Cao Lộc</option>
                      <option value="937">huyện Tràng Định</option>
                      <option value="938">Huyện Văn Lãng</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '288'">
                      <option value="660">Huyện Bến Lức</option>
                      <option value="661">Huyện Cần Đước</option>
                      <option value="662">Huyện Cần Giuộc</option>
                      <option value="663">Huyện Châu Thành</option>
                      <option value="664">Huyện Đức Hòa</option>
                      <option value="665">Huyện Đức Huệ</option>
                      <option value="666">Huyện Mộc Hóa</option>
                      <option value="667">Thành phố Tân An</option>
                      <option value="668">Huyện Tân Hưng</option>
                      <option value="669">Huyện Tân Thạnh</option>
                      <option value="670">Huyện Tân Trụ</option>
                      <option value="671">Huyện Thạnh Hóa</option>
                      <option value="672">Huyện Thủ Thừa</option>
                      <option value="673">Huyện Vĩnh Hưng</option>
                      <option value="1022">Thị xã Kiến Tường</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '289'">
                      <option value="691">Huyện Anh Sơn</option>
                      <option value="692">Huyện Con Cuông</option>
                      <option value="693">Thị xã Cửa Lò</option>
                      <option value="694">Huyện Diễn Châu</option>
                      <option value="695">Huyện Đô Lương</option>
                      <option value="696">Huyện Hưng Nguyên</option>
                      <option value="697">Huyện Kỳ Sơn</option>
                      <option value="698">Huyện Nam Đàn</option>
                      <option value="699">Huyện Nghi Lộc</option>
                      <option value="700">Huyện Quỳ Hợp</option>
                      <option value="701">Huyện Quỳnh Lưu</option>
                      <option value="702">Huyện Tân Kỳ</option>
                      <option value="703">Thị xã Thái Hòa</option>
                      <option value="704">Huyện Thanh Chương</option>
                      <option value="705">Thành phố Vinh</option>
                      <option value="706">Huyện Yên Thành</option>
                      <option value="941">Huyện Nghĩa Đàn</option>
                      <option value="942">Huyện Quế Phong</option>
                      <option value="943">Huyện Quỳ Châu</option>
                      <option value="944">Huyện Tương Dương</option>
                      <option value="1021">Thị xã Hoàng Mai</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '290'">
                      <option value="684">Huyện Gia Viễn</option>
                      <option value="685">Huyện Kim Sơn</option>
                      <option value="686">Huyện Nho Quan</option>
                      <option value="687">Thành phố Ninh Bình</option>
                      <option value="688">Thị xã Tam Điệp</option>
                      <option value="945">Huyện Hoa Lư</option>
                      <option value="946">Huyện Yên Khánh</option>
                      <option value="947">Huyện Yên Mô</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '291'">
                      <option value="689">Huyện Ninh Sơn</option>
                      <option value="690">Thành phố Phan Rang-Tháp Chàm</option>
                      <option value="948">Huyện Bác Ái</option>
                      <option value="949">Huyện Ninh Hải</option>
                      <option value="950">Huyện Ninh Phước</option>
                      <option value="951">Huyện Thuận Bắc</option>
                      <option value="952">Huyện Thuận Nam</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '292'">
                      <option value=""></option>
                      <option value="707">Huyện Đoan Hùng</option>
                      <option value="708">Huyện Hạ Hòa</option>
                      <option value="709">Huyện Lâm Thao</option>
                      <option value="710">Thị xã Phú Thọ</option>
                      <option value="711">Huyện Thanh Ba</option>
                      <option value="712">Huyện Thanh Sơn</option>
                      <option value="713">Huyện Thanh Thủy</option>
                      <option value="714">Thành phố Việt Trì</option>
                      <option value="715">Huyện Yên Lập</option>
                      <option value="953">Huyện Phù Ninh</option>
                      <option value="954">Huyện Tam Nông</option>
                      <option value="955">Huyện Tân Sơn</option>
                      <option value="956">Huyện Cẩm Khê</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '293'">
                      <option value=""></option>
                      <option value="716">Thị xã Sông Cầu</option>
                      <option value="717">Huyện Tuy An</option>
                      <option value="718">Thành phố Tuy Hòa</option>
                      <option value="957">Huyện Đông Hòa</option>
                      <option value="958">Huyện Đồng Xuân</option>
                      <option value="959">Huyện Phú Hòa</option>
                      <option value="960">Huyện Sông Hinh</option>
                      <option value="961">Huyện Sơn Hòa</option>
                      <option value="962">Huyện Tây Hòa</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '294'">
                      <option value=""></option>
                      <option value="719">Huyện Bố Trạch</option>
                      <option value="720">Thành phố Đồng Hới</option>
                      <option value="721">Huyện Lệ Thủy</option>
                      <option value="963">Huyện Minh Hóa</option>
                      <option value="964">Huyện Quảng Ninh</option>
                      <option value="965">Huyện Quảng Trạch</option>
                      <option value="966">Huyện Tuyên Hóa</option>
                      <option value="1019">Thị xã Ba Đồn</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '295'">
                      <option value=""></option>
                      <option value="722">Huyện Điện Bàn</option>
                      <option value="723">Thành phố Hội An</option>
                      <option value="724">Huyện Núi Thành</option>
                      <option value="725">Huyện Phú Ninh</option>
                      <option value="726">Thành phố Tam Kỳ</option>
                      <option value="727">Huyện Thăng Bình</option>
                      <option value="728">Huyện Tiên Phước</option>
                      <option value="967">Huyện Nam Trà My</option>
                      <option value="968">Huyện Bắc Trà My</option>
                      <option value="969">Huyện Duy Xuyên</option>
                      <option value="970">Huyện Đại Lộc</option>
                      <option value="971">Huyện Đông Giang</option>
                      <option value="972">Huyện Hiệp Đức</option>
                      <option value="973">Huyện Nam Giang</option>
                      <option value="974">Huyện Phước Sơn</option>
                      <option value="975">Huyện Quế Sơn</option>
                      <option value="976">Huyện Tây Giang</option>
                      <option value="977">Huyện Nông Sơn</option>
                      <option value="1019">Thị xã Ba Đồn</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '296'">
                      <option value=""></option>
                      <option value="741">Huyện Ba Tơ</option>
                      <option value="742">Huyện Đức Phổ</option>
                      <option value="743">Huyện đảo Lý Sơn</option>
                      <option value="744">Huyện Minh Long</option>
                      <option value="745">Huyện Mộ Đức</option>
                      <option value="746">Thành phố Quảng Ngãi</option>
                      <option value="747">Huyện Sơn Hà</option>
                      <option value="748">Huyện Sơn Tịnh</option>
                      <option value="749">Huyện Trà Bồng</option>
                      <option value="978">Huyện Bình Sơn</option>
                      <option value="979">Huyện Nghĩa Hành</option>
                      <option value="980">Huyện Sơn Tây</option>
                      <option value="981">Huyện Tây Trà</option>
                      <option value="1014">Huyện Tư Nghĩa</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '297'">
                      <option value=""></option>
                      <option value="750">Huyện Cam Lộ</option>
                      <option value="751">Huyện đảo Cồn Cỏ</option>
                      <option value="752">Huyện Đa Krông</option>
                      <option value="753">Thành phố Đông Hà</option>
                      <option value="754">Huyện Gio Linh</option>
                      <option value="755">Huyện Hải Lăng</option>
                      <option value="756">Thị xã Quảng Trị</option>
                      <option value="757">Huyện Vĩnh Linh</option>
                      <option value="984">Huyện Hướng Hóa</option>
                      <option value="985">Huyện Triệu Phong</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '298'">
                      <option value=""></option>
                      <option value="758">Huyện Cù Lao Dung</option>
                      <option value="759">Huyện Kế Sách</option>
                      <option value="760">Huyện Long Phú</option>
                      <option value="761">Huyện Mỹ Tú</option>
                      <option value="762">Huyện Mỹ Xuyên</option>
                      <option value="763">Huyện Ngã Năm</option>
                      <option value="764">Thành phố Sóc Trăng</option>
                      <option value="765">Huyện Thạnh Trị</option>
                      <option value="766">Thị Xã Vĩnh Châu</option>
                      <option value="767">Huyện Châu Thành</option>
                      <option value="986">Huyện Trần Đề</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '299'">
                      <option value=""></option>
                      <option value="768">Huyện Bắc Yên</option>
                      <option value="769">Huyện Mộc Châu</option>
                      <option value="770">Huyện Phù Yên</option>
                      <option value="771">Huyện Quỳnh Nhai</option>
                      <option value="772">Huyện Sông Mã</option>
                      <option value="773">Huyện Sốp Cộp</option>
                      <option value="774">Thành phố Sơn La</option>
                      <option value="775">Huyện Thuận Châu</option>
                      <option value="776">Huyện Yên Châu</option>
                      <option value="987">Huyện Mai Sơn</option>
                      <option value="988">Huyện Mường La</option>
                      <option value="1020">Huyện Vân Hồ</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '300'">
                      <option value=""></option>
                      <option value="777">Huyện Bến Cầu</option>
                      <option value="778">Huyện Châu Thành</option>
                      <option value="779">Huyện Dương Minh Châu</option>
                      <option value="780">Huyện Gò Dầu</option>
                      <option value="781">Huyện Hòa Thành</option>
                      <option value="782">Huyện Tân Biên</option>
                      <option value="783">Huyện Tân Châu</option>
                      <option value="784">Thành Phố Tây Ninh</option>
                      <option value="785">Huyện Trảng Bàng</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '301'">
                      <option value=""></option>
                      <option value="777">Huyện Bến Cầu</option>
                      <option value="778">Huyện Châu Thành</option>
                      <option value="779">Huyện Dương Minh Châu</option>
                      <option value="780">Huyện Gò Dầu</option>
                      <option value="781">Huyện Hòa Thành</option>
                      <option value="782">Huyện Tân Biên</option>
                      <option value="783">Huyện Tân Châu</option>
                      <option value="784">Thành Phố Tây Ninh</option>
                      <option value="785">Huyện Trảng Bàng</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '302'">
                      <option value=""></option>
                      <option value="798">Huyện Đông Hưng</option>
                      <option value="799">Huyện Hưng Hà</option>
                      <option value="800">Huyện Kiến Xương</option>
                      <option value="801">Huyện Quỳnh Phụ</option>
                      <option value="802">Thành phố Thái Bình</option>
                      <option value="803">Huyện Thái Thụy</option>
                      <option value="804">Huyện Tiền Hải</option>
                      <option value="805">Huyện Vũ Thư</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '303'">
                      <option value=""></option>
                      <option value="806">Huyện Đại Từ</option>
                      <option value="807">Huyện Đồng Hỷ</option>
                      <option value="808">Thị xã Sông Công</option>
                      <option value="809">Thành phố Thái Nguyên</option>
                      <option value="989">Huyện Định Hóa</option>
                      <option value="990">Huyện Phổ Yên</option>
                      <option value="991">Huyện Phú Bình</option>
                      <option value="992">Huyện Phú Lương</option>
                      <option value="993">Huyện Võ Nhai</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '304'">
                      <option value=""></option>
                      <option value="810">Huyện Bá Thước</option>
                      <option value="811">Thị xã Bỉm Sơn</option>
                      <option value="812">Huyện Cẩm Thủy</option>
                      <option value="813">Huyện Hà Trung</option>
                      <option value="814">Huyện Hậu Lộc</option>
                      <option value="815">Huyện Hoằng Hóa</option>
                      <option value="816">Huyện Lang Chánh</option>
                      <option value="817">Huyện Mường Lát</option>
                      <option value="818">Huyện Nga Sơn</option>
                      <option value="819">Huyện Ngọc Lặc</option>
                      <option value="820">Huyện Nông Cống</option>
                      <option value="821">Huyện Quan Hóa</option>
                      <option value="822">Huyện Quan Sơn</option>
                      <option value="823">Huyện Quảng Xương</option>
                      <option value="824">Thị xã Sầm Sơn</option>
                      <option value="825">Huyện Thạch Thành</option>
                      <option value="826">Thành phố Thanh Hóa</option>
                      <option value="827">Huyện Thiệu Hóa</option>
                      <option value="828">Huyện Thọ Xuân</option>
                      <option value="829">Huyện Thường Xuân</option>
                      <option value="830">Huyện Tĩnh Gia</option>
                      <option value="831">Huyện Triệu Sơn</option>
                      <option value="832">Huyện Vĩnh Lộc</option>
                      <option value="833">Huyện Yên Định</option>
                      <option value="994">Huyện Đông Sơn</option>
                      <option value="995">Huyện Như Thanh</option>
                      <option value="996">Huyện Như Xuân</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '305'">
                      <option value=""></option>
                      <option value="786">Thị xã Cai Lậy</option>
                      <option value="787">Huyện Cái Bè</option>
                      <option value="788">Huyện Chợ Gạo</option>
                      <option value="789">Thị xã Gò Công</option>
                      <option value="790">Thành phố Mỹ Tho</option>
                      <option value="791">Huyện Tân Phước</option>
                      <option value="997">Huyện Châu Thành</option>
                      <option value="998">Huyện Gò Công Đông</option>
                      <option value="999">Huyện Gò Công Tây</option>
                      <option value="1000">Huyện Tân Phú Đông</option>
                      <option value="1031">Huyện Cai Lậy</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '306'">
                      <option value=""></option>
                      <option value="834">Huyện Càng Long</option>
                      <option value="835">Huyện Cầu Kè</option>
                      <option value="836">Huyện Cầu Ngang</option>
                      <option value="837">Huyện Châu Thành</option>
                      <option value="838">Thị xã Duyên Hải</option>
                      <option value="839">Huyện Tiểu Cần</option>
                      <option value="840">Huyện Trà Cú</option>
                      <option value="841">Thành phố Trà Vinh</option>
                      <option value="1030">Huyện Duyên Hải</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '307'">
                      <option value=""></option>
                      <option value="792">Huyện Chiêm Hóa</option>
                      <option value="793">Huyện Hàm Yên</option>
                      <option value="794">Huyện Na Hang</option>
                      <option value="795">Huyện Sơn Dương</option>
                      <option value="796">Thành phố Tuyên Quang</option>
                      <option value="797">Huyện Yên Sơn</option>
                      <option value="1004">Huyện Lâm Bình</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '308'">
                      <option value=""></option>
                      <option value="842">Huyện Bình Minh</option>
                      <option value="843">Huyện Bình Tân</option>
                      <option value="844">Huyện Long Hồ</option>
                      <option value="845">Huyện Mang Thít</option>
                      <option value="846">Huyện Tam Bình</option>
                      <option value="847">Huyện Trà Ôn</option>
                      <option value="848">Thành phố Vĩnh Long</option>
                      <option value="849">Huyện Vũng Liêm</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '309'">
                      <option value=""></option>
                      <option value="850">Huyện Bình Xuyên</option>
                      <option value="851">Huyện Lập Thạch</option>
                      <option value="852">Thị xã Phúc Yên</option>
                      <option value="853">Huyện Vĩnh Tường</option>
                      <option value="854">Thành phố Vĩnh Yên</option>
                      <option value="855">Huyện Yên Lạc</option>
                      <option value="856">Huyện Tam Đảo</option>
                      <option value="1005">Huyện Sông Lô</option>
                      <option value="1006">Huyện Tam Dương</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '310'">
                      <option value=""></option>
                      <option value="857">Huyện Mù Căng Chải</option>
                      <option value="858">Thị xã Nghĩa Lộ</option>
                      <option value="859">Huyện Trạm Tấu</option>
                      <option value="860">Thành phố Yên Bái</option>
                      <option value="861">Huyện Yên Bình</option>
                      <option value="1007">Huyện Lục Yên</option>
                      <option value="1008">Huyện Trấn Yên</option>
                      <option value="1009">Huyện Văn Chấn</option>
                      <option value="1010">Huyện Văn Yên</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '311'">
                      <option value=""></option>
                      <option value="486">Huyện Buôn Đôn</option>
                      <option value="488">Thành phố Buôn Ma Thuột</option>
                      <option value="489">Huyện Cư Kuin</option>
                      <option value="490">Huyện Ea H'leo</option>
                      <option value="491">Huyện Ea Kar</option>
                      <option value="492">Huyện Ea Súp</option>
                      <option value="493">Huyện Krông Ana</option>
                      <option value="494">Huyện Krông Bông</option>
                      <option value="495">Huyện Krông Búk</option>
                      <option value="496">Huyện Krông Năng</option>
                      <option value="497">Huyện Krông Pắk</option>
                      <option value="498">Huyện M'Đrăk</option>
                      <option value="499">Thị xã Buôn Hồ</option>
                      <option value="903">Huyện Cư Mgar</option>
                      <option value="904">Huyện Lăk</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '312'">
                      <option value=""></option>
                      <option value="517">Thành phố Cao Lãnh</option>
                      <option value="518">Huyện Cao Lãnh</option>
                      <option value="519">Huyện Châu Thành</option>
                      <option value="520">Thị xã Hồng Ngự</option>
                      <option value="521">Huyện Lai Vung</option>
                      <option value="522">Huyện Hồng Ngự</option>
                      <option value="523">Huyện Lấp Vò</option>
                      <option value="524">Thị xã Sa Đéc</option>
                      <option value="525">Huyện Tam Nông</option>
                      <option value="526">Huyện Tân Hồng</option>
                      <option value="527">Huyện Thanh Bình</option>
                      <option value="528">Huyện Tháp Mười</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '313'">
                      <option value=""></option>
                      <option value="370">Quận Hải Châu</option>
                      <option value="371">Quận Thanh Khê</option>
                      <option value="372">Quận Ngũ Hành Sơn</option>
                      <option value="373">Quận Liên Chiểu</option>
                      <option value="374">Quận Cẩm Lệ</option>
                      <option value="487">Huyện đảo Hoàng Sa</option>
                      <option value="902">Huyện Hòa Vang</option>
                      <option value="1012">Quận Sơn Trà</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '314'">
                      <option value=""></option>
                      <option value="500">Huyện Đăk Glong</option>
                      <option value="501">Huyện Đăk Mil</option>
                      <option value="502">Huyện Đăk R'Lấp</option>
                      <option value="503">Huyện Đăk Song</option>
                      <option value="504">Thị xã Gia Nghĩa</option>
                      <option value="505">Huyện Tuy Đức</option>
                      <option value="905">Huyện Cư Jút</option>
                      <option value="906">Huyện Krông Nô</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '315'">
                      <option value=""></option>
                      <option value="582">Huyện Châu Thành</option>
                      <option value="583">Huyện Châu Thành A</option>
                      <option value="584">Huyện Long Mỹ</option>
                      <option value="585">Huyện Phụng Hiệp</option>
                      <option value="586">Thị xã Ngã Bảy</option>
                      <option value="587">Thành phố Vị Thanh</option>
                      <option value="588">Huyện Vị Thủy</option>
                      <option value="1023">Thị xã Long Mỹ</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '316'">
                      <option value=""></option>
                      <option value="382">Huyện Đông Hải</option>
                      <option value="407">Thành phố Bạc Liêu</option>
                      <option value="408">Huyện Giá Rai</option>
                      <option value="409">Huyện Hoà Bình</option>
                      <option value="410">Huyện Hồng Dân</option>
                      <option value="411">Huyện Phước Long</option>
                      <option value="412">Huyện Vĩnh Lợi</option>
                    </select>

                    <select name="districtId" v-if="selectedCity === '317'">
                      <option value=""></option>
                      <option value="862">Huyện Điện Biên</option>
                      <option value="863">Huyện Điện Biên Đông</option>
                      <option value="864">Thành phố Điện Biên Phủ</option>
                      <option value="865">Huyện Mường Ảng</option>
                      <option value="866">Huyện Mường Chà</option>
                      <option value="867">Thị xã Mường Lay</option>
                      <option value="868">Huyện Mường Nhé</option>
                      <option value="869">Huyện Tủa Chùa</option>
                      <option value="870">Huyện Tuần Giáo</option>
                      <option value="1026">Huyện Nậm Pồ</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Địa chỉ</td>
                  <td class="val">
                    <input type="text" name="address" value="" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><button type="submit" class="btnSave tp_button">Lưu</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Index from '../../components/ProfileIndex/ProfileIndex.vue'

import { ref } from 'vue'

const selectedCity = ref('')

const filterDistricts = () => {
  // Lấy giá trị của tỉnh/thành phố đã chọn
  selectedCity.value = document.getElementById('cityId').value
}
</script>
<style scoped src="./ProfileEdit.css"></style>
