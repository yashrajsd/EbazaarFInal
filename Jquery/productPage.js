$("#food-Button").on("click",function(){
    $("#foodCrops-product").show();
    $("#oilCrops-product").hide();
    $("#industrialCrops-product").hide();
    $("#feedCrops-product").hide();
    $("#fiberCrops-product").hide();
    $("#product-title-display").show();
    $("#product-title").html("Food Crops");
})
$("#oil-Button").on("click",function(){
    $("#foodCrops-product").hide();
    $("#oilCrops-product").show();
    $("#industrialCrops-product").hide();
    $("#feedCrops-product").hide();
    $("#fiberCrops-product").hide();
    $("#product-title-display").show();
    $("#product-title").html("Oil Crops");
})
$("#Industrial-Button").on("click",function(){
    $("#foodCrops-product").hide();
    $("#oilCrops-product").hide();
    $("#industrialCrops-product").show();
    $("#feedCrops-product").hide();
    $("#fiberCrops-product").hide();
    $("#product-title-display").show();
    $("#product-title").html("Industrial Crops");
})
$("#feed-Button").on("click",function(){
    $("#foodCrops-product").hide();
    $("#oilCrops-product").hide();
    $("#industrialCrops-product").hide();
    $("#feedCrops-product").show();
    $("#fiberCrops-product").hide();
    $("#product-title-display").show();
    $("#product-title").html("Feed Crops");
})
$("#Fiber-Button").on("click",function(){
    $("#foodCrops-product").hide();
    $("#oilCrops-product").hide();
    $("#industrialCrops-product").hide();
    $("#feedCrops-product").hide();
    $("#fiberCrops-product").show();
    $("#product-title-display").show();
    $("#product-title").html("Fiber Crops");
})


$("#product-cart-button").on("click",function(){
    $("#product-cart").slideToggle();
})

$("#item-1-btn").on("click",function(){
    $()
    $("#item-1").clone().appendTo("#cart-items");
})

