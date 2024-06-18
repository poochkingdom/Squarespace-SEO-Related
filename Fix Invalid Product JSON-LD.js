<!-- Fix Product JSON-LD by Alan Moore (webmaster@poochkingdom.com) -->
<!-- This script fixes the badly formatted JSON-LD block -->
<!-- containing the Product entry added by Squarespace -->
<script type="text/javascript">
  window.addEventListener('DOMContentLoaded', function () {
    var debug = false;
    <!-- Find all instances of JSON-LD -->
    var jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    <!-- For each found listing -->
    for(var jsonLdScript of jsonLdScripts) {  
      <!-- Only process Product entries -->
      if(jsonLdScript.innerText.indexOf('"@type":"Product"') >= 0) {
        <!-- Parse the current JSON-LD entry -->
        var jsonLd = JSON.parse(jsonLdScript.innerText);
        <!-- If the Product entry has no MerchantReturnPolicy -->
        if(!jsonLd.hasOwnProperty('hasMerchantReturnPolicy')) {
          <!-- Provide a JSON object containing your own MerchantReturnPolicy -->
          var returnPolicy = {"@context": "http://schema.org","@type": "MerchantReturnPolicy", "applicableCountry": "US","merchantReturnDays": 14, "returnPolicyCountry": "US", "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted","refundType": "https://schema.org/ExchangeRefund"};
          if(debug) console.log('Adding return policy to ' + jsonLd['name'] + ' because policy is missing');
          <!-- Add the hasMerchantReturnPolicy -->
          jsonLd.offers.hasMerchantReturnPolicy = returnPolicy;
        }
        <!-- If the Product entry has no priceValidUntil -->  
        if(!jsonLd.hasOwnProperty('priceValidUntil')) {
          <!-- Set the priceValidUntil date to midnight on Dec 31 in the current year PST -->
          var priceValidUntil = new Date().getFullYear() + '-12-31T23:59:59-08:00';
          if(debug) console.log('Adding priceValidUntil to ' + jsonLd['name'] + ' because it is missing');
          <!-- Add the priceValidUntil -->
          jsonLd.offers.priceValidUntil = priceValidUntil;
        }
        <!-- If the Product entry has no brand type -->
        if(!jsonLd.brand.hasOwnProperty('@type')) {
          var brand = {"@type": "Brand","name": "Pooch Kingdom Luxury Dog Bakery"};
          if(debug) console.log('Adding brand name to ' + jsonLd['name'] + ' because it is invalid');
          <!-- Add the Brand -->
          jsonLd.brand = brand;
        }
        <!-- Convert the object back into a string -->
        <!-- And update the Product JSON-LD entry -->		
        jsonLdScript.innerText = JSON.stringify(jsonLd);
        break;
      }
    }
  });
</script>
<!-- End Fix Product JSON-LD -->


/* You can only add non-zero ratings or review counts    
      <!-- If the Product entry has no aggregateRating -->  
      if(!jsonLd.hasOwnProperty('aggregateRating')) {
        <!-- Provide a JSON object containing your own MerchantReturnPolicy -->
        var aggregateRating = {"@type": "AggregateRating","ratingValue": "0.0","reviewCount": "0"};
        console.log('Adding aggregateRating to ' + jsonLd['name'] + ' because it is missing');
        <!-- Add the aggregateRating -->
        jsonLd.aggregateRating = aggregateRating;
        <!-- Convert the object back into a string -->    
        newJson = JSON.stringify(jsonLd);
        <!-- Update the current JSON-LD entry -->    
        jsonLdScript.innerHTML = newJson;
      }
*/  
