/* 
 *
 * https://github.com/xgqfrms/jquery/interstitial.js
 *
 * Copyright (c) 2016 xgqfrms
 * 
 * licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function( $ ){
  var methods = {
     open : function( options ) {
       var defaults = {
         'url'                  : '',
         'width'                : 600,
         'height'               : 400,
         'opacity'              : 70,
         'id'                   : 'popupBlock',
         'onInterstitialClose'  : function(){}
        };
        var settings = $.extend({}, defaults, options);
        //Fade in Background
        $('body').append('<div id="fade"></div>'); 
        $('#fade').css({'filter' : 'alpha(opacity=' + settings.opacity + ')'}).fadeIn();
        //Fade in the Popup
        $('body').append('<div id="' + settings.id + '"></div>');
        $('#' + settings.id).load(settings.url, function() {
            $('#' + settings.id).css({'width' : Number(settings.width), 'height' : Number(settings.height)}).fadeIn();
        });
        //Define margin for center alignment (vertical + horizontal)
        var popMargTop = settings.height / 2;
        var popMargLeft = settings.width / 2;
        //Apply Margin to Popup
        $('#' + settings.id).css({ 
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });
        //On click of the fade, close the popup and fade
        $('#fade').live('click', function() {
          $().interstitial('close', settings);      
        });
     },
    // Function: Close the interstitial
    close : function( options ) {
        var defaults = {
            'id'                   : 'popupBlock',
            'onInterstitialClose'  : function(){}
        };
        var settings = $.extend({}, defaults, options);
            $('#fade , #' + settings.id).fadeOut(function() {
                $('#fade').remove();  
            });
            // onInterstitialClose callback
            settings.onInterstitialClose.call(this);
        }
    };

    $.fn.interstitial = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.interstitial' );
        }
    };
})( jQuery );