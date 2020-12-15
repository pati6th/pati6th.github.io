// function onReady(callback) {
//   var intervalID = window.setInterval(checkReady, 2500);

//   function checkReady() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalID);
//       callback.call(this);
//     }
//   }
// }
// onReady(function () {
//   $('.main').show();
//   $('#loading').hide();
// });

$(document).ready(function(){

    $('#people').remove();

    function animate(){
      var body = $('.signiture');
      var width = body.width();
      var height = body.height();
      var circle = $('.circle');

      circle.each(function foo() {
        var top = (Math.random() * height + 50) | 0;
        var left = (Math.random() * width) | 0;
        var time = Math.random() * (800 - 400) + 4000 | 0;

        $(this).animate({
          left: left,
          top: top
        }, time, foo);
      });
    };

    animate();

    $('#works, #works-category, #class, #class-category, #credit, #title, .works-list, .class-list').hover(function(){
      $('.circle').stop().animate();
    },function(){
      animate();
    });

    $('#title, #people, #credit').hover(function(){
      $('.circle').stop().animate();
    },
    function(){
      $('#works-category').hide();
      $('#class-category').hide();
      animate();
    });

    $('#works, #works-category').hover(function(){
      $('#works-category').show();
      $('.search-result-list, .work-wrapper, .check, .plant, .mobile-work-wrapper').css(
      'opacity', '0.2');
      $('.circle').stop().animate();
      $('#works-category').show();
      $('#class-category').hide();
    },
    function(){
      $('#works-category').hide();
      $('#class-category').hide();
      $('.search-result-list, .work-wrapper, .check, .plant, .mobile-work-wrapper').css(
      'opacity','1');
      animate();
    });

    $('#class, #class-category').hover(function(){
      $('#works-category').show();
      $('.search-result-list, .work-wrapper, .check, .plant, .mobile-work-wrapper').css(
      'opacity', '0.2');
      $('.circle').stop().animate();
      $('#works-category').hide();
      $('#class-category').show();
    },
    function(){
      $('#works-category').hide();
      $('#class-category').hide();
      $('.search-result-list, .work-wrapper, .check, .plant, .mobile-work-wrapper').css(
      'opacity','1');
      animate();
    });

    function search(){
      var number = $("#search").val();
      if(number=='인지' || number=='왕인지'){
        $( ".search-result-inji" ).show();
        $( ".search-result-list" ).children().not('.search-result-inji').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='동하' || number=='김동하'){
        $( ".search-result-dongha" ).show();
        $( ".search-result-list" ).children().not('.search-result-dongha').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='뉸지' || number=='한윤지'){
        $( ".search-result-hanyunji" ).show();
        $( ".search-result-list" ).children().not('.search-result-hanyunji').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='지현' || number=='박지현'){
        $( ".search-result-jihyun" ).show();
        $( ".search-result-list" ).children().not('.search-result-jihyun').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='최윤지'){
        $( ".search-result-choiyunji" ).show();
        $( ".search-result-list" ).children().not('.search-result-choiyunji').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='미소' || number=='김정은'){
        $( ".search-result-miso" ).show();
        $( ".search-result-list" ).children().not('.search-result-miso').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='깨알' || number=='정율'|| number=='율'){
        $( ".search-result-yul" ).show();
        $( ".search-result-list" ).children().not('.search-result-yul').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='소정' || number=='김소정'){
        $( ".search-result-sojeong" ).show();
        $( ".search-result-list" ).children().not('.search-result-sojeong').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='현우' || number=='김현우'){
        $( ".search-result-hyunwoo" ).show();
        $( ".search-result-list" ).children().not('.search-result-hyunwoo').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='혜인' || number=='정혜인'){
        $( ".search-result-hyein" ).show();
        $( ".search-result-list" ).children().not('.search-result-hyein').hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else if(number=='윤지'){
        $( ".search-result-hanchoiyunji" ).show();
        $( ".search-result-list" ).children().hide();
        $( ".search-result-noresult" ).hide();
      }else if(0<number){
        $( "#num" + number ).show();
        $( ".search-result-list li" ).not("#num" + number).hide();
        $( ".search-result-noresult" ).hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }else{
        $( ".search-result-noresult" ).show();
        $( ".search-result-list" ).children().hide();
        $( ".search-result-hanchoiyunji" ).hide();
      }
    };

    $('.circle').click(function(){
      $( ".circle, .plant" ).hide();
      $( ".check" ).hide();
      $( ".back" ).show();
    });

    $('#yellow').click(function(){
      $( ".search-result-sojeong" ).show();
      $( ".search-result-list" ).children().not('.search-result-sojeong').hide();
    });

    $('#green').click(function(){
      $( ".search-result-miso" ).show();
      $( ".search-result-list" ).children().not('.search-result-miso').hide();
    });

    $('#indigo').click(function(){
      $( ".search-result-jihyun" ).show();
      $( ".search-result-list" ).children().not('.search-result-jihyun').hide();
    });
    $('#orange').click(function(){
      $( ".search-result-inji" ).show();
      $( ".search-result-list" ).children().not('.search-result-inji').hide();
    });
    $('#purple').click(function(){
      $( ".search-result-hyunwoo" ).show();
      $( ".search-result-list" ).children().not('.search-result-hyunwoo').hide();
    });
    $('#red').click(function(){
      $( ".search-result-yul" ).show();
      $( ".search-result-list" ).children().not('.search-result-yul').hide();
    });

    $('#pink').click(function(){
      $( ".search-result-choiyunji" ).show();
      $( ".search-result-list" ).children().not('.search-result-choiyunji').hide();
    });

    $('#brown').click(function(){
      $( ".search-result-hanyunji" ).show();
      $( ".search-result-list" ).children().not('.search-result-hanyunji').hide();
    });

    $('#mint').click(function(){
      $( ".search-result-hyein" ).show();
      $( ".search-result-list" ).children().not('.search-result-hyein').hide();
    });

    $('#skyblue').click(function(){
      $( ".search-result-dongha" ).show();
      $( ".search-result-list" ).children().not('.search-result-dongha').hide();
    });

    $('#searchBtn').click(function(){
      search();
      $( ".circle, .plant" ).hide();
      $( ".roof, .check" ).hide();
      $( ".back" ).show();
    });

    $(".searchform input[type=text]").keypress(function(e) {
      if (e.keyCode == 13){
        event.preventDefault();
        search();
        $("#search").val('');
        $( ".circle" ).hide();
        $( ".check" ).hide();
        $( ".back" ).show();
      }    
    });

    $('#all').click(function(){
      $( ".search-result-list > li" ).show();
    });

    $('#book').click(function(){
    });

    $('#web').click(function(){
    });

    $('#typeface').click(function(){
    });

    $('#illustration').click(function(){
    });

    $('#video').click(function(){
    });

    $('.back').click(function(){
      location.reload();
    });

    $('#works, #works-category, #class, #class-category, .works-list, .class-list').hover(function(){
      $('.blur-div').show();
  },function(){
    $('.blur-div').hide();
  });

  });