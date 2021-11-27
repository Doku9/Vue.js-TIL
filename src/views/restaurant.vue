<template>
    <div>
        <div>
            <h1>패밀리레스토랑(VIPS) 경제 금액 계산하기</h1>
            <p>선택한 메뉴의 총 금액과 소지하고 있는 할인 카트/통신사/포인트/OK캐시백/쿠폰을 적용해서 최종 결제 금액 구하기</p>
        </div>
        <br />
        <label>할인카드
            <select>
                <option value="0" :key="card.creditCards" v-for="card in creditCards">
                    {{card.cardName}} {{card.discount}} {{card.discountType}}
                </option>
            </select>
        </label>
        <label>통신사카드
            <select>
                <option value="0" :key="card.creditCards" v-for="card in creditCards">
                    {{card.cardName}} {{card.discount}} {{card.discountType}}
                </option>
            </select>
        </label>
        <label>포인트결제
            <select>
                <option value="0" :key="coupon.coupons" v-for="coupon in coupons">
                    {{coupon.title}} {{coupon.discount}} {{coupon.discountType}}
                </option>
            </select>
        </label>
        <label>OK캐시백
            <input type="checkbox">
        </label>

        <br />
        <button :key="menu.menuId" v-for="menu in menus" @click="selectFood">
            {{ menu.menuName}} {{menu.price}}원
        </button>
        <br />
        <div id="divSelectedMenus" class="container bg-primary">
        <table style="width:100%;">
            <thead>
                <tr>
                    <th>메뉴명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>금액</th>
                </tr>
            </thead>
            <tbody id="selectedMenusTb">
            </tbody>
            <tfoot id="selectedMenuTotal">
                <tr>
                    <th colspan="3" style="text-align: center;">총금액</th>
                    <td></td>
                </tr>
                <tr>
                    <th colspan="3" style="text-align: center;">할인금액</th>
                    <td></td>
                </tr>
                <tr>
                    <th colspan="3" style="text-align: center;">합계</th>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        </div>

    </div>
</template>
<script>
    export default {
        name: '',
        components: {},
        data() {
            return {
                menus: [{
                        menuId: 1,
                        menuName: "무제한 샐러드바",
                        price: 25000
                    },
                    {
                        menuId: 2,
                        menuName: "안심 스테이크(150g)",
                        price: 35500
                    },
                    {
                        menuId: 3,
                        menuName: "립아이 스테이크(220g)",
                        price: 22500
                    },
                    {
                        menuId: 4,
                        menuName: "채끝 등심 스테이크(210g)",
                        price: 30500
                    },
                    {
                        menuId: 5,
                        menuName: "자몽에이드",
                        price: 6500
                    },
                    {
                        menuId: 6,
                        menuName: "애플망고에이드",
                        price: 6500
                    },
                    {
                        menuId: 7,
                        menuName: "생맥주",
                        price: 4000
                    }
                ],

                cardTypes: [{
                        cardType: "CREDIT",
                        title: "신용카드"
                    },
                    {
                        cardType: "TELECOM",
                        title: "통신사"
                    },
                    {
                        cardType: "OKCASHBAG",
                        title: "OK캐시백"
                    },
                    {
                        cardType: "POINT",
                        title: "포인트결제"
                    }
                ],
                creditCards: [{
                        cardId: 0,
                        cardType: "CREDIT",
                        cardName: "카드를 선택하세요",
                        discount: "",
                        discountType: ""
                    },
                    {
                        cardId: 1,
                        cardType: "CREDIT",
                        cardName: "CJ ONE 삼성카드",
                        discount: 30,
                        discountType: "%"
                    },
                    {
                        cardId: 2,
                        cardType: "CREDIT",
                        cardName: "CJ ONE 신한카드",
                        discount: 30,
                        discountType: "%"
                    },
                    {
                        cardId: 3,
                        cardType: "CREDIT",
                        cardName: "The CJ 카드",
                        discount: 22,
                        discountType: "%"
                    },
                    {
                        cardId: 4,
                        cardType: "CREDIT",
                        cardName: "삼성 6 V4카드",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 5,
                        cardType: "CREDIT",
                        cardName: "신한 Lady카드",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 6,
                        cardType: "CREDIT",
                        cardName: "삼성 SFC",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 7,
                        cardType: "CREDIT",
                        cardName: "삼성 S클라스",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 8,
                        cardType: "CREDIT",
                        cardName: "하나 Yes OK Saver",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 9,
                        cardType: "CREDIT",
                        cardName: "홈플러스 하나줄리엣카드",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 10,
                        cardType: "CREDIT",
                        cardName: "하나 줄리엣카드 & Yes 4u shopping",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 11,
                        cardType: "CREDIT",
                        cardName: "KB Star",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 12,
                        cardType: "CREDIT",
                        cardName: "이마트 KB카드",
                        discount: 15,
                        discountType: "%"
                    },
                    {
                        cardId: 13,
                        cardType: "TELECOM",
                        cardName: "KT 멤버십 일반 할인",
                        discount: 5,
                        discountType: "%"
                    },
                    {
                        cardId: 14,
                        cardType: "TELECOM",
                        cardName: "KT 멤버십 VIP 할인",
                        discount: 15,
                        discountType: "%"
                    },
                    {
                        cardId: 15,
                        cardType: "TELECOM",
                        cardName: "T 멤버십 실버 할인",
                        discount: 5,
                        discountType: "%"
                    },
                    {
                        cardId: 16,
                        cardType: "TELECOM",
                        cardName: "T 멤버십 VIP/골드 할인",
                        discount: 15,
                        discountType: "%"
                    },
                    {
                        cardId: 17,
                        cardType: "OKCASHBAG",
                        cardName: "OK캐시백",
                        discount: 30,
                        discountType: "%"
                    },
                    {
                        cardId: 18,
                        cardType: "POINT",
                        cardName: "BC Top 포인트",
                        discount: 10,
                        discountType: "%"
                    },
                    {
                        cardId: 19,
                        cardType: "POINT",
                        cardName: "기아멤버스 카드",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 20,
                        cardType: "POINT",
                        cardName: "삼성카드 포인트",
                        discount: 100,
                        discountType: "%"
                    },
                    {
                        cardId: 21,
                        cardType: "POINT",
                        cardName: "현대카드 M",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 22,
                        cardType: "POINT",
                        cardName: "신한 Hi-Point 카드",
                        discount: 20,
                        discountType: "%"
                    },
                    {
                        cardId: 23,
                        cardType: "POINT",
                        cardName: "블루멤버스 카드",
                        discount: 20,
                        discountType: "%"
                    }
                ],
                coupons: [{
                        couponId: 0,
                        title: "쿠폰을 선택해주세요",
                        discount: "",
                        doubleDiscount: "",
                        discountType: ""
                    },
                    {
                        couponId: 1,
                        title: "5% 할인쿠폰(중복할인 가능)",
                        discount: 5,
                        doubleDiscount: true,
                        discountType: "%"
                    },
                    {
                        couponId: 2,
                        title: "10% 할인쿠폰(중복할인 가능)",
                        discount: 10,
                        doubleDiscount: true,
                        discountType: "%"
                    },
                    {
                        couponId: 3,
                        title: "15% 할인쿠폰(중복할인 가능)",
                        discount: 15,
                        doubleDiscount: true,
                        discountType: "%"
                    },
                    {
                        couponId: 4,
                        title: "5000 할인쿠폰(중복할인 가능)",
                        discount: 5000,
                        doubleDiscount: true,
                        discountType: ""
                    },
                    {
                        couponId: 5,
                        title: "10,000 할인쿠폰(중복할인 가능)",
                        discount: 10000,
                        doubleDiscount: true,
                        discountType: ""
                    },
                    {
                        couponId: 6,
                        title: "20,000 할인쿠폰(중복할인 가능)",
                        discount: 20000,
                        doubleDiscount: true,
                        discountType: ""
                    },
                    {
                        couponId: 7,
                        title: "5% 할인쿠폰(중복할인 불가능)",
                        discount: 5,
                        doubleDiscount: false,
                        discountType: "%"
                    },
                    {
                        couponId: 8,
                        title: "10% 할인쿠폰(중복할인 불가능)",
                        discount: 10,
                        doubleDiscount: false,
                        discountType: "%"
                    },
                    {
                        couponId: 9,
                        title: "15% 할인쿠폰(중복할인 불가능)",
                        discount: 15,
                        doubleDiscount: false,
                        discountType: "%"
                    },
                    {
                        couponId: 10,
                        title: "5000 할인쿠폰(중복할인 불가능)",
                        discount: 5000,
                        doubleDiscount: false,
                        discountType: ""
                    },
                    {
                        couponId: 11,
                        title: "10,000 할인쿠폰(중복할인 불가능)",
                        discount: 10000,
                        doubleDiscount: false,
                        discountType: ""
                    },
                    {
                        couponId: 12,
                        title: "20,000 할인쿠폰(중복할인 불가능)",
                        discount: 20000,
                        doubleDiscount: false,
                        discountType: ""
                    }
                ],
                total : 0,
                disounttotal : 0,
                finTotal : 0,
                oSelectFood : {}
            }
        },
        created() {},
        mounted() {},
        updated() {},
        unmounted() {},
        methods: {
            selectFood(menuId) {
      const menu = this.menus.filter((m) => m.menuId == menuId)[0];
      if (this.oSelectFood[menu.menuId]) {
        return alert("이미 추가된 메뉴입니다.");
      }

      this.oSelectFood[this.menu.menuId] = menu;

      var tr = [];
      tr.push('<tr>');
      tr.push(`<td>${this.menu.menuName}</td>`);
      tr.push(`<td>${this.menu.price}</td>`);
      tr.push(
        `<td><input type="number" value="1" step="1" min="1" style="width:100%;" onchange="changeLineSum(event, ${this.menu.price});"></td>`
      );
      tr.push(`<td><input type="text" value="${this.menu.price * 1}" style="width:100%;" class="line-sum" readonly></td>`);
      tr.push('</tr>');
      ("selectedMenusTb").insertAdjacentHTML("beforeend", tr.join(""));

      this.calculateTotalAmount();
    
    },
    loadMenus() {
      var h = [];
      for (var menu of this.menus) {
        h.push(
          `<button class="menu" onclick="selectFood(${this.menu.menuId});">${this.menu.menuName}(${this.menu.price}원)</button>`);
      }

      document.getElementById("divMenus").innerHTML = h.join("");
    }
        }
    }
</script>
<style scoped>
    .bg-primary {
        background-color: beige !important;
    }

    table,
    th,
    td {
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #222;
        padding: 10px;
    }
</style>