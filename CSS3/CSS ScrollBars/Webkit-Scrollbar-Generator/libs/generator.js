$(function() {
  // Set Input Types Width The Size of Value
  $('.drop input[type=text]').on('keyup', function() {
    $(this).attr('size', this.value.length);
  }).trigger('keyup');
  
  // Toggle Dropdowns Onclick
  $('header').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  
  // Handles Trackbar
  $('.mirror-track-bg').text($('.main-bg').val());
  $('.main-bg').on('change', function() {
    $('.mirror-track-bg').text($(this).val());
  });
  
  $('.mirror-track-hover-bg').text($('.main-bg-hover').val());
  $('.main-bg-hover').on('change', function() {
    $('.mirror-track-hover-bg').text($(this).val());
  });
  
  $('.mirror-track-active-bg').text($('.main-bg-active').val());
  $('.main-bg-active').on('change', function() {
    $('.mirror-track-active-bg').text($(this).val());
  });
  
  $('.mirror-main-size').text($('.main-scroll-size').val());
  $('.main-scroll-size').on('change', function() {
    $('.mirror-main-size').text($(this).val());
  });
  
  $('.mirror-track-curve').text($('.main-curve').val());
  $('.main-curve').on('change', function() {
    $('.mirror-track-curve').text($(this).val());
  });
  
  $('.mirror-track-border').text($('.track-border-size').val() + 'px ' + $('.track-border-style').val() + " " + $('.thumb-border-color').val());
  $('.track-border-size-txt').text($('.track-border-size').val());
  $('.track-border-size, .track-border-style, .track-border-color').on('change', function() {
    $('.mirror-track-border').text($('.track-border-size').val() + 'px ' + $('.track-border-style').val() + " " + $('.track-border-color').val());
    $('.track-border-size-txt').text($('.track-border-size').val());
  });

  // Handles Button
  $('.mirror-thumb-bg').text($('.button-bg').val());
  $('.button-bg').on('change', function() {
    $('.mirror-thumb-bg').text($(this).val());
  });
  
  $('.mirror-thumb-hover-bg').text($('.button-bg-hover').val());
  $('.button-bg-hover').on('change', function() {
    $('.mirror-thumb-hover-bg').text($(this).val());
  });
  
  $('.mirror-thumb-active-bg').text($('.button-bg-active').val());
  $('.button-bg-active').on('change', function() {
    $('.mirror-thumb-active-bg').text($(this).val());
  });
  
  $('.mirror-button-size').text($('.button-scroll-size').val());
  $('.button-scroll-size').on('change', function() {
    $('.mirror-button-size').text($(this).val());
  });
  
  $('.mirror-thumb-curve').text($('.button-curve').val());
  $('.button-curve').on('change', function() {
    $('.mirror-thumb-curve').text($(this).val());
  });
  
  $('.mirror-thumb-border').text($('.thumb-border-size').val() + 'px ' + $('.thumb-border-style').val() + " " + $('.thumb-border-color').val());
  $('.thumb-border-size-txt').text($('.thumb-border-size').val());
  $('.thumb-border-size, .thumb-border-style, .thumb-border-color').on('change', function() {
    $('.mirror-thumb-border').text($('.thumb-border-size').val() + 'px ' + $('.thumb-border-style').val() + " " + $('.thumb-border-color').val());
    $('.thumb-border-size-txt').text($('.thumb-border-size').val());
  });
  
  // Mirror & apply the now valued css to our textbox
  $('.code').val($('.preview-code').text());
  $('.apply-html').val($('.code').val() + $('.add-txt').val());
  $('.preview').html($('.apply-html').val());
  $('#save-code').val($('.save-code').text());
  $(document).on('change', function() {
    $('.code').val($('.preview-code').text());
    $('.apply-html').val($('.code').val() + $('.add-txt').val());
    $('.preview').html($('.apply-html').val());
    $('#save-code').val($('.save-code').text());
  });
  
  // Select Textbox Onclick
  $('.code').on('click', function() {
    $(this).select();
  });
});

// Save Coded Document
function saveTextAsFile() {
	var textToWrite = document.getElementById("save-code").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/css'});
	var fileNameToSaveAs = "custom-scrollbars.css";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}
