// Дэлгэцтэй ажиллах controller
var uiController = (function() {

})();

// Санхүүтэй ажиллах controller
var financeController = (function() {}) ();
var ctrlAddItem = function() {
        // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн controller-д дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гарна.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
}
// Программын холбогч controller
var appController = (function(uiController, financeController) {

document.querySelector(".add__btn").addEventListener("click", function() {
ctrlAddItem();
});

document.addEventListener("keypress", function(event){
    if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
    }

});

})(uiController, financeController);