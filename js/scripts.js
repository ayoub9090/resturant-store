stickyHeader();


function stickyHeader(){
  const body = document.body;
  const triggerMenu = document.querySelector(".page-header .trigger-menu");
  const nav = document.querySelector(".page-header nav");
  const menu = document.querySelector(".page-header .menu");

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;



  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll)
    if (currentScroll <= 60) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);

    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    
    }
    lastScroll = currentScroll;


//mobile sticky cart hide when reach bottom 
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
  $('.cart-mobile').fadeOut(200);
}else{
  $('.cart-mobile').fadeIn(200);
}

  });

}


$(document).ready(function(){

  if($('.swiper-container').length > 0){
      const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 5,
        breakpoints: {
          
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          }
        }

      });
  }

  $('.categories-list a').click(function(){
    $('.categories-list a.active').removeClass('active');
    $(this).addClass('active');
  })


	$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 0 : count;

    if(count === 0){
      //for disable btn demo
      var actions = $(this).parents('.item-actions');
      $(actions).find('.btn-add').attr('disabled',true);
    }

    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    
    //for disable btn demo
    var actions = $(this).parents('.item-actions');
    $(actions).find('.btn-add').attr('disabled',false);

    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });



  function formatData (data) {
   
    if (!data.id) { return data.text; }
    let src = $(data.element).attr('data-img');
    var $result= $(
      '<span><img width="22" src="'+  src +'"/> ' + data.text + '</span>'
    );
    return $result;
  };
  
  $(".selectpicker").select2({
    templateResult: formatData,
    templateSelection: formatData,
    minimumResultsForSearch: -1
  
  });

    if($('#pickTimeDatepicker').length > 0){
      $('#pickTimeDatepicker').datepicker();
      //demo use for taking datepicker value
      $('#pickTimeDatepicker').on('changeDate', function() {
          $('#pickTimeDatepicker_input').val(
              $('#pickTimeDatepicker').datepicker('getFormattedDate')
          );
      });

    
}

});

//Demo use
$('.switch').on('change',function(){
  var el = $(this).parents('.tab-pane');
  el.find('.switch').each(function(){
    $(this).parents('.d-flex').find('label').toggleClass('sub-title');
  })
});

$('input[name="radio1"]').on('change',function(){
  if($(this).val() === "Delivery"){
    $('.delevery-form').fadeIn(200);
  }else{
    $('.delevery-form').fadeOut(200);
  }
 
});

function toggleCart(){
  $('#cart').toggleClass('show');
}