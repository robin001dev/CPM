document.addEventListener("DOMContentLoaded", function(event) { 
      var slideSource = document.getElementById('myModal');
      document.getElementById('myBtn').onclick = function () {
         slideSource.classList.toggle('fade_opt');
      }
      
      function onload_2(){
         document.getElementById('ct_desc').style.display = "none";
      }
      onload_2();
      var btn =  document.getElementById("togBtn_Personalised");
      btn.onchange = function(){
          if(btn.checked == true){
            document.getElementById("ct_desc").style.cssText = "display: block";
          }else{
            document.getElementById("ct_desc").style.cssText = "display: none";
          }
       };

       function onload_3(){
         document.getElementById('vend_1_desc').style.display = "none";
      }
      onload_3();
      var btn_2 =  document.getElementById("togBtn_vend_1_desc");
      btn_2.onchange = function(){
          if(btn_2.checked == true){
            document.getElementById("vend_1_desc").style.cssText = "display: block" ;
          }else{
            document.getElementById("vend_1_desc").style.cssText = "display: none" ; 
          }
       };
      function onload_4(){
         document.getElementById('legi_1_desc').style.display = "none";
      }
      onload_4();
      var btn_3 =  document.getElementById("togBtn_legi_1_desc");
      btn_3.onchange = function(){
          if(btn_3.checked == true){
            document.getElementById("legi_1_desc").style.cssText = "display: block" ;
          }else{
            document.getElementById("legi_1_desc").style.cssText = "display: none" ; 
          }
       };

      function onload_5(){
         document.getElementById('legi_2_desc').style.display = "none";
      }
      onload_5();
      var btn_4 =  document.getElementById("togBtn_legi_2_desc");
      btn_4.onchange = function(){
          if(btn_4.checked == true){
            document.getElementById("legi_2_desc").style.cssText = "display: block" ;
          }else{
            document.getElementById("legi_2_desc").style.cssText = "display: none" ; 
          }
       };

      function onload_6(){
         document.getElementById('legi_3_desc').style.display = "none";
      }
      onload_6();
      var btn_5 =  document.getElementById("togBtn_legi_3_desc");
      btn_5.onchange = function(){
          if(btn_5.checked == true){
            document.getElementById("legi_3_desc").style.cssText = "display: block" ;
          }else{
            document.getElementById("legi_3_desc").style.cssText = "display: none" ; 
          }
      };

      function onload_7(){
         document.getElementById('legi_4_desc').style.display = "none";
      }
      onload_7();
      var btn_5 =  document.getElementById("togBtn_legi_4_desc");
      btn_5.onchange = function(){
          if(btn_5.checked == true){
            document.getElementById("legi_4_desc").style.cssText = "display: block" ;
          }else{
            document.getElementById("legi_4_desc").style.cssText = "display: none" ; 
          }
       };

      function onload_legal(){
         document.getElementById('legal_ct_desc').style.display = "none";
      }
      onload_legal();
      var dsp = document.getElementById("legal_ct_desc");
      document.getElementById("Legal_purpose_btn").onclick = function(){
            dsp.style.display = "block";
      }

      function onload_vendor(){
         document.getElementById('Vendor_ct_desc').style.display = "none";
      }
      onload_vendor();

      var dsp_2 = document.getElementById("Vendor_ct_desc");
      document.getElementById("Vendor_purpose_btn").onclick = function(){
            dsp_2.style.display = "block";
      }

});
// Tabs classes
 function openCity(evt, cityName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabs_panel_btn");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("navbar_links");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" btn_active", "");
   }
   document.getElementById(cityName).style.display = "block";
   evt.currentTarget.className += " btn_active";
 }
 document.getElementById("nav-purpose-tab").click();

 // Add active class to the current button (highlight it)
   var header = document.getElementById("nav-tab_tp");
   var btns = header.getElementsByClassName("navbar_links");
   for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("btn_active");
   if (current.length > 0) { 
      current[0].className = current[0].className.replace(" btn_active", "");
   }
   this.className += " btn_active";
   });
   }