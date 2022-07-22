/* form slider */
const formContainer = document.getElementById('form-container');
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('next-btn')){
        let numBtn = e.target.id.split('-')[1];
        document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('active-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.add('left-form-slide');
        document.getElementsByClassName('form-slide')[numBtn].classList.add('active-form-slide');
    };
    if(e.target.classList.contains('prev-btn')){
        let numBtn = e.target.id.split('-')[1];
        document.getElementsByClassName('form-slide')[numBtn].classList.remove('active-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('left-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.add('active-form-slide');
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
