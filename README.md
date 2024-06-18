# Squarespace-SEO-Related
Scripts and documents related to enhancing SEO on websites built on Squarespace, and other site builders.
## About the Author
I've been writing code on-and-off for forty years. I have a background in software integration, network integration, databases, and lots of obscure facts. My wife is opening a business and has been trying, unsuccessfully, to get her shiny new website noticed on Google as a local business. I stepped in to help out, and ended up down the rabbit hole of SEO pages, sites, and lots of empty promises and dead-ends. A bit of trial and error, and some JavaScript coding has got her site 100% indexed on Google. Bing is another story altogether, but given how unpopular it is, I'll tackle my Bing issues later and share my knowledge here. I hope you find some of this information helpful, and I wish you the best in your Squarespace SEO journey. Of course, you can use a lot of the practical aspects of this page on pretty much any site builder; you'll just have to translate the JavaScript to your own platform. Hopefully, though, you can make your business successful using what I've learned.
## What is Structured Data?
Put simply, structured data is a standardized representation of key aspects of your business. It is used by search engines to show information in a consistent format—the look and feel you're familiar with in search engine results: also known as SERP (search engine results pages). The information about your website and business is represented in multiple formats, each with their own purpose and user, but predominantly we're looking at:
1) HTML meta tags to describe the website's pages. This gets your site properly indexed, and establishes keywords.
2) Opengraph tags for social media.
3) JSON-LD for describing your business website, your organization, your organization as a local business, and the products you sell. In Squarespace's world we're using WebSite, Organization, LocalBusiness, and Products (if you have a store).

Squarespace injects all of these data types, but misses key information in each of these areas. My scripts help to repair the missing data, and to help you get indexed and searchable.
## Other Aspects of SEO
As I go forward there will be other sections or documents you can refer to. They will cover SEO titles, descriptions, and why the length of the text you write can cause success or failure; CSS techniques to work around issues with Squarespace alt tags, and lots more to come...
## Essential Reading
Reading specifications is great for a good night's sleep. However, it is essential if you're to understand what is expected by the search engines to get you noticed and indexed.
1) https://schema.org for the JSON-LD specification
2) https://support.google.com/merchants/answer/6386198?hl=en for Google's implementation of the JSON-LD objects
## Tools You Can Use
Your SEO journey with Squarespace has many steps. This README will help you fix some shortcomings of the JSON-LD, meta tags, alt tags, and other things that stop you getting indexed. It will also save you a ton of time and money paying for an SEO expert. I'm not promising to fix everything, but I've solved most issues in under three weeks of learning about SEO, and some coding experience.
### Ahrefs Browser Plugin
I prefer this tool over two or three I tested. It's easy to use, and great for quickly testing your SEO fixes. Of course, you can use your favorite browser-based SEO validator. BTW, you don't need the paid version of Ahrefs to validate the structured data from your browser, and you can also use the Ahrefs.com tool to run a site audit and find all sorts of other issues with your site. More about this in a different article.
### Google's Rich Results Test Tool 
https://search.google.com/test/rich-results validates you 
### Schema.org validator
https://validator.schema.org/ checks the validity of your JSON-LD
### Structured data Linter 
http://linter.structured-data.org/ is a tool that also looks at the structured data and shows you what it may look like as a snippet.

## Fix Product JSON-LD
The script runs after DOM loading, and looks for the Product JSON-LD added by Squarespace. Using a tool like Ahrefs Toolbar, you will see that the brand, priceValidUntil, and merchantReturnPolicy are all missing. This script grabs the broken Product entry, then overwrites the existing Product with the modified version. Having correctly formatted Product entries increases your chances of Google, Bing, etc., from listing your product pages as snippets.

### Recommended Installation
Place in your Store's Advanced | Page Header Code Injection, because this is the only time that a product JSON-LD block is written by Squarespace

### Process
Make a copy of "Fix Invalid Product JSON-LD.js" and use your favorite editor to modify:
1) The return policy JSON object. Study the schema.org documentation to understand the fields, and enumerations
2) The brand. This can be a brand or organization. Squarespace implements it just as a string, which is incorrect.
3) The priceValidUntil value in the offer object. This version of the script sets the value until the end of the current year.

### Testing
1) Change the value of debug from false to true to have the script print out the operations it is performing.
2) Install the script in your preferred Code Injection location, and save it.
3) Open a new browser tab, then open the debugger by pressing F12.
4) Open your live website, and navigate to a product page.
5) In the debugger, select the console tab and ensure there are no errors from your script, and that you are seeing the debug statements from the script.
6) Use an SEO plugin to look at the product page and check the structured data. You're looking for the Product information. 
7) Verify that the policies, brand, and price validity match your expectations. If no values changed, go back and check the console for exceptions or errors from your script.

### Using a Minifier (Optional)
A minifier remove debugging code, comments, all white space, and shrinks the code to optimize execution time. E.g. https://www.toptal.com/developers/javascript-minifier

1) Use the sample code provided ("Fix Invalid Product JSON-LD.min.js") to form the structure of your modified version of the script.
2) Copy everything from within the script tags into the minifier.
3) Remove all the comments from the code.
4) Run the minifier.
5) Copy the minified code into the body of the script tags.
6) Replace the debuggable code from you Code Injection location, and replace it with the minified script.
7) Test your minified script per the "Testing" section above.




  
