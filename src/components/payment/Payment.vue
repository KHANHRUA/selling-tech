<template>
    <div class="container">
        <div class="header">
            <img src = '../../assets/MoMo_Logo.png'>
            <h2>Cổng thanh toán qua Ví điện tử MOMO</h2>
        </div>
        <div class="body">
            <div class="first">
                <h1>Quét mã QR để thanh toán</h1>
                <div class="Text">
                    <h2>
                        Sử dụng 
                    </h2>
                    <h2 class="bold">App MoMo </h2>
                    <h2>
                        hoặc ứng dụng camera hỗ trợ QR code để quét mã 
                    </h2>
                </div>
                <img src = '../../assets/momo.jpg'>
            </div>
            <div class="second">
                <div class="information">
                    <h1>Thông tin đơn hàng</h1>
                    <h2>Nhà cung cấp</h2>
                    <div>
                        Tên công ty
                    </div>
                    <h2>Mã đơn hàng</h2>
                    <div>
                        484
                    </div>
                    <h2>Thông tin đơn hàng</h2>
                    <div>
                        tên các sản phẩm
                    </div>
                    <h2>
                        Số tiền
                    </h2>
                    <div>
                        1.000.000đ
                    </div>
                </div>
                <div class="back">
                    Bạn chưa muốn thanh toán bay giờ?
                    <RouterLink class="link" to="/">Quay về</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src = './Payment.css'>

</style>