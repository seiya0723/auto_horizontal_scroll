window.addEventListener("load" , function (){

    //クリックした時、scroll()を実行する。押された要素(this)とブーリアン値(NextとPrevを見分ける)を引数にする。
    $(".previous_button").on("click",function(){ scroll(this,false); });
    $(".next_button").on("click",    function(){ scroll(this,true); });

});

//scroll関数
function scroll(elem,next){

    /* クリックされた箇所のスクロールする要素を抜き取る */
    let target  = $(elem).siblings(".data_preview_area");
    let width   = target.outerWidth()

    //押されたボタンに応じて、左右に動く。
    if (next){
        target.animate({ scrollLeft:"+=" + String(width) } , 300);
    }
    else{
        target.animate({ scrollLeft:"-=" + String(width) } , 300);
    }


}
