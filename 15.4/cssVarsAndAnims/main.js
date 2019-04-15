
const click = function(){
    if($(".sideBar").attr("data-show") == "0"){
        $(".sideBar").css("width", "30vh")
        $(".sideBar").attr("data-show", "1")
    }
    else{
        $(".sideBar").css("width", "0vh")
        $(".sideBar").attr("data-show", "0")
    }
}

$("i").on("click", click)
 