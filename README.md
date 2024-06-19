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
## What Are We Aiming For?
The goal is to correctly set up all of your titles, descriptions, alt text, and other information that the search engines need to fully index your website. It is a process you must adopt and be regimented with. Many of the fields you populate within your side are used to create the hidden meta data and JSON-LD structures that the search engines use. As I have previously iterated, Squarespace does not do a great job of populating the information, so in some cases we just overwrite their data with ours.
### SEO Appearance
In the Settings | Marketing | SEO Appearance tab you can tell Squarespace how you want it to display your page titles. It uses simple % parameters to help you define the format. The value %s represents the value for your business name; %p is the page name; %i is the product or item name if you have a store.

For example, for my home page I have chosen to display my company name first, then the page title "Home", so my SEO setting is %s - %p. For regular pages I have chosen to display the page title first, then the company name, so the setting is %p - %s. For products I use %i - %p. This allows the end-user to see the company name in the tab of the home page, then see the page titles as they browse around the site. The title comes from one of two places: 1) the Page Settings | Title field, or 2) the Page Settings | SEO | SEO Title field. The only exception to this is the home page. 
### Titles
> [!IMPORTANT]
> The words you put into the title become the title text displayed in the search results, along with the link and the description. This is going to be one of the main drivers to your website as it tells the end-users what the page contains, along with the description (see below).
> The combined length of the page title and your business name MUST NOT exceed **60 characters**. Be very cognizant of this, and repeatedly check to make sure you're not exceeding this length.

As you create pages in your website, certain fields get translated into both visual and non-visual elements. The page title is one of the most important elements in your site. It tells the search engine about your page, and you can include keywords in the title as well as the URL. The title displays in the top of the browser tab. In Squarespace, you can enter the page title when you create your page, but you must be diligent about filling in the SEO tab. If not, search results containing your pages will not look good, and end-users may not be able to discover your content. 

As a side note, you can also change the name of the navigation label shown in your website's menus. E.g. your home page URL is /Home, the title is Home, but navigation says 'Main Page' for example. I don't recommend this approach. In addition, SEO best practices recommend that words from your title appear in the h1, or Heading 1, tag of your page. It helps to correlate the page title with the content of the page.
### Descriptions
> [!IMPORTANT]
> The words you put into this field become the snippet of text displayed in the search results. The description must be a succinct, precise description of what the page contains. It must include keywords and other information that will make this page relevant to your business. It is generally accepted that the content of the description must be between **100 and 160 characters long**, so you must get very creative in describing the page content. If you go over 160 characters you risk having important information cut off. Most SEO tools will warn you if the description is too long.

The description of your page comes from one of two places: 1) whatever text is in the first paragraph of your page, or 2) the Page Settings | SEO | SEO Description field. The only exception to this is the home page, where the value will come from the Settings | Marketing | SEO Appearance tab. If you do not fill out the SEO description field, the search results will be chosen by the search engine, and may not be what you want to have end-users understand about the content of the page. For proper SEO best practices, you MUST fill out the SEO description for EVERY page of your website.

E.g. From our FAQ page, "Here's the answers to some frequently asked questions about Pooch Kingdom's products and offerings. Use the contact form if you have further questions". It is 150 characters long, and portrays exactly what we want to say without any fluff. It is using keyworks pertaining to our site and business, and tells the search engine this is a contact page. Using the company name or product names in the title and description reinforce the message.
### Alt Text

### Opengraph


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
2) Copy everything from within the script tags of the normal JavaScript file into the minifier.
3) Remove all the comments from the code.
4) Run the minifier.
5) Copy the minified code into the body of the script tags.
6) Replace the debuggable code from you Code Injection location, and replace it with the minified script.
7) Test your minified script per the "Testing" section above.

## Replace Invalid JSON-LD
This script is a bit more involved from the preparation standpoint. In order to get passes by Google and Microsoft on your structured data, we have to fix the incomplete Organization, LocalBusiness, and WebSite entries put in place by Squarespace. This script contains properly formatted versions of each of these three objects, and it then replaces the versions statically included by Squarespace. When it is done, your pages will have everything the search engines need for creating snippets about your business.

You must study the Schema.org documentation for the different entities. You can use the data provided in the samples to get started. Some of you will have simpler versions of this data; some will be more complex.
### WebSite Data
This is the easiest one to deal with



  
