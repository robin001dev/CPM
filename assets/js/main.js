$(document).ready(function() {

   function onload(){
      $('#myModal_2').css('display','none');
   }
   onload();
   $('#myBtn').click(function() {
      $('#myModal_2').fadeToggle();
   });
   
   function onload_2(){
      $('#ct_desc').css('display','none');
   }
   onload_2();
   $("#togBtn_Personalised").change(function(){
       if($(this).prop("checked") == true){
          $("#ct_desc").css({"display":"block","transition":".5s"});
       }else{
          $("#ct_desc").css('display','none');
       }
    });
    onload_legal();
    function onload_legal(){
     $('#legal_ct_desc').css('display','none');
     }
   $("#Legal_purpose_btn").click(function(){
        $('#legal_ct_desc').toggle();
    });
    onload_vendor();
    function onload_vendor(){
     $('#Vendor_ct_desc').css('display','none');
     }
   $("#Vendor_purpose_btn").click(function(){
        $('#Vendor_ct_desc').toggle();
    });
    function onload_3(){
      $('#vend_1_desc').css('display','none');
    }
    onload_3();
    $("#togBtn_vend_1_desc").change(function(){
       if($(this).prop("checked") == true){
          $("#vend_1_desc").css('display','block');
       }else{
          $("#vend_1_desc").css('display','none');
       }
    });
    function onload_4(){
      $('#legi_1_desc').css('display','none');
    }
    onload_4();
    $("#togBtn_legi_1_desc").change(function(){
       if($(this).prop("checked") == true){
          $("#legi_1_desc").css('display','block');
       }else{
          $("#legi_1_desc").css('display','none');
       }
    });
    function onload_5(){
      $('#legi_2_desc').css('display','none');
    }
    onload_5();
    $("#togBtn_legi_2_desc").change(function(){
       if($(this).prop("checked") == true){
          $("#legi_2_desc").css('display','block');
       }else{
          $("#legi_2_desc").css('display','none');
       }
    });
    function onload_6(){
     $('#legi_3_desc').css('display','none');
   }
   onload_6();
   $("#togBtn_legi_3_desc").change(function(){
      if($(this).prop("checked") == true){
         $("#legi_3_desc").css('display','block');
      }else{
         $("#legi_3_desc").css('display','none');
      }
   });
   function onload_7(){
     $('#legi_4_desc').css('display','none');
   }
   onload_7();
   $("#togBtn_legi_4_desc").change(function(){
      if($(this).prop("checked") == true){
         $("#legi_4_desc").css('display','block');
      }else{
         $("#legi_4_desc").css('display','none');
      }
   });
 });
 // Add active class to the current button (highlight it)
 var header = document.getElementById("nav-tab");
 var btns = header.getElementsByClassName("nav-link");
 for (var i = 0; i < btns.length; i++) {
 btns[i].addEventListener("click", function() {
 var current = document.getElementsByClassName("btn_active");
 if (current.length > 0) { 
    current[0].className = current[0].className.replace(" btn_active", "");
 }
 this.className += " btn_active";
 });
}