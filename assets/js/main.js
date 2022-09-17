/* form slider */
const formContainer = document.getElementById('form-container');
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('next-btn')){
        let numBtn = e.target.id.split('-')[1];
        document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('active-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.add('left-form-slide');
        document.getElementsByClassName('form-slide')[numBtn].classList.add('active-form-slide');
        let lastsection = $('.form-slide:nth-child(4)');
        if(lastsection.hasClass('active-form-slide')){
            $('.hp-main-layout-content').addClass('scrolable');
        }
    };
    if(e.target.classList.contains('prev-btn')){
        let numBtn = e.target.id.split('-')[1];
        document.getElementsByClassName('form-slide')[numBtn].classList.remove('active-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('left-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.add('active-form-slide');
        let lastsection = $('.form-slide:nth-child(4)');
        if(!lastsection.hasClass('active-form-slide')){
            $('.hp-main-layout-content').removeClass('scrolable');
        }
    };
});


/* input upload*/
$( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName ) {
				label.querySelector( '.file-name' ).innerHTML = fileName;
        label.querySelector(".fa-picture-o").className = "fa fa-check";
      }
			else
				label.innerHTML = labelVal;
		});

		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

/* table checkbox */
$(document).ready(function() {
    $("#selectall").click(function() {
        $('.case').attr('checked', this.checked);
    });    

    $(".case").click(function() {
        if ($(".case").length == $(".case:checked").length) {
            $("#selectall").attr("checked", "checked");
        }
        else {
            $("#selectall").removeAttr("checked");
        }     
    });
});


// Dom Ready
$(function(){
  
    // Bind the onclick to our text class
    // Just an example, this could be bound to anything in the row
    $('.togglechild').click(function(){
     
      // Use next until to collect our child rows 
      var $row = $(this).closest('tr'),
          $range = $row.nextUntil('.parent'),
          $childRows = $range.filter('.child');
      
      // Capture is visible BEFORE any toggles
      var isVisible = $childRows.is(':visible');
      
      // Formatting and toggling based on visibility
      $childRows.toggle(!isVisible);
      $row.find('.togglechild').html(words);
      
    })

    $('.textextlink').click(function(){
     
        // Use next until to collect our child rows 
        var $row = $(this).closest('tr'),
            $range = $row.nextUntil('.parent'),
            $childRows = $range.filter('.childtextextlink');
        
        // Capture is visible BEFORE any toggles
        var isVisible = $childRows.is(':visible');
        
        // Formatting and toggling based on visibility
        var words = isVisible ? '<i class="hp-text-color-dark-0 iconly-Light-ArrowDownSquare"></i>' : '<i class="hp-text-color-dark-0 iconly-Light-ArrowUpSquare"></i>';
        $childRows.toggle(!isVisible);
        $row.find('.textextlink').html(words);
        
      })
    

      $('.textlink').click(function(){
     
        // Use next until to collect our child rows 
        var $row = $(this).closest('tr'),
            $range = $row.nextUntil('.parent'),
            $childRows = $range.filter('.childtextlink');
        
        // Capture is visible BEFORE any toggles
        var isVisible = $childRows.is(':visible');
        
        // Formatting and toggling based on visibility
        var words = isVisible ? '<i class="hp-text-color-dark-0 iconly-Light-ArrowDownSquare"></i>' : '<i class="hp-text-color-dark-0 iconly-Light-ArrowUpSquare"></i>';
        $childRows.toggle(!isVisible);
        $row.find('.textlink').html(words);
        
      })
      
      $('.textLps').click(function(){
     
        // Use next until to collect our child rows 
        var $row = $(this).closest('tr'),
            $range = $row.nextUntil('.parent'),
            $childRows = $range.filter('.childtextLps');
        
        // Capture is visible BEFORE any toggles
        var isVisible = $childRows.is(':visible');
        
        // Formatting and toggling based on visibility
        var words = isVisible ? '<i class="hp-text-color-dark-0 iconly-Light-ArrowDownSquare"></i>' : '<i class="hp-text-color-dark-0 iconly-Light-ArrowUpSquare"></i>';
        $childRows.toggle(!isVisible);
        $row.find('.textLps').html(words);
        
      })

});


  $(document).ready(function(){
    //group add limit
    var maxGroup = 6;
    
    //add more fields group
    $(".addMore").click(function(){
        if($('form').find('.fieldGroup').length <= maxGroup){
            var fieldHTML = '<div class="form-group fieldGroup">'+$(".fieldGroupCopy").html()+'</div>';
            $('form').find('.fieldGroup:first').before(fieldHTML);
        }else{
            $('.addMore').hide();
        }
    });
});


$("#search").on("keyup", function() {
    var value = $(this).val();

    $(".togglechild").each(function(index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:nth-child(3)").text();

            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});

// Pricing Page
$(function () {
    $("#pricing-billed-pro").change(function (e) {
        if (e.target.checked) {
            let pricingvalue20 = $(".pro-amout-20").html();
            $(".pro-amout-20").html(pricingvalue20 * 10);
            let pricingvalue40 = $(".pro-amout-40").html();
            $(".pro-amout-40").html(pricingvalue40 * 10);
            let pricingvalue100 = $(".pro-amout-100").html();
            $(".pro-amout-100").html(pricingvalue100 * 10);
            $(".pro-after").html("/annual");
        } else {
            let pricingvalue20 = $(".pro-amout-20").html();
            $(".pro-amout-20").html(pricingvalue20 / 10);
            let pricingvalue40 = $(".pro-amout-40").html();
            $(".pro-amout-40").html(pricingvalue40 / 10);
            let pricingvalue100 = $(".pro-amout-100").html();
            $(".pro-amout-100").html(pricingvalue100 / 10);
            $(".pro-after").html("/monthly");
        }
    })
})

// Pricing Page
$(function () {
    $("#pricing-billed-basic").change(function (e) {
        if (e.target.checked) {
            let basicpricingvalue5 = $(".basic-amout-5").html();
            $(".basic-amout-5").html(basicpricingvalue5 * 10);
            let basicpricingvalue10 = $(".basic-amout-10").html();
            $(".basic-amout-10").html(basicpricingvalue10 * 10);
            let basicpricingvalue25 = $(".basic-amout-25").html();
            $(".basic-amout-25").html(basicpricingvalue25 * 10);
            $(".basic-after").html("/annual");
        } else {
            let basicpricingvalue5 = $(".basic-amout-5").html();
            $(".basic-amout-5").html(basicpricingvalue5 / 10);
            let basicpricingvalue10 = $(".basic-amout-10").html();
            $(".basic-amout-10").html(basicpricingvalue10 / 10);
            let basicpricingvalue25 = $(".basic-amout-25").html();
            $(".basic-amout-25").html(basicpricingvalue25 / 10);
            $(".basic-after").html("/monthly");
        }
    })
})