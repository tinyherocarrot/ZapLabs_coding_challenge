// VARS --------------------------- //
const transactions = [
  {
    address: "2236 Sky Island Dr., Henderson, Nevada 89002",
    mlsId: "146343",
    status: "Closed",
    buyerName: "Joe Thompson",
    sellerName: "Rosa Herwick",
    listPrice: null,
    sellPrice: "120,000.00",
    contractDate: "09/01/2017 12:00 AM"
  },
  {
    address: "211 Tamarack Dr., Henderson, Nevada 89002",
    mlsId: "1921354",
    status: "Closed",
    buyerName: "Kimberly Harney",
    sellerName: "Rosa Herwick",
    listPrice: "229,000.00",
    sellPrice: "230,000.00",
    contractDate: "08/11/2017 12:00 AM"
  },
  {
    address: "422 Hidden Brook Ct., Henderson, Nevada 89015",
    mlsId: "1508223",
    status: "Closed",
    buyerName: "Hilda Defke",
    sellerName: "Rosa Herwick",
    listPrice: "165,000.00",
    sellPrice: "160,000.00",
    contractDate: "01/16/2015 12:00 AM"
  }
]

// FUNCTIONS --------------------------- //

// LOGIC --------------------------- //
$(function() {
    $(document).on("click",".js-details",function() {
        $(".modal__overlay").css("display", "block")
        
        alert("click bound to document listening for .js-details");

    });
    $(document).on("click","#close-modal",function() {
        $(".modal__overlay").css("display", "none")
    });
  console.log("ready!")
})
