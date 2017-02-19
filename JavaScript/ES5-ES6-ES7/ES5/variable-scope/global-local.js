var locales = {
    europe: function() { 
    // The Europe continent's local scope
        var myFriend = "Monique";
        var france = function() { 
        // The France country's local scope
            var paris = function() { 
            // The Paris city's local scope
                console.log(myFriend);
            };
            paris();
        };
        france();
    }
};

locales.europe();
// Monique
