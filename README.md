## Documentation

**Update |** The layout now compiles with [LESS](http://lesscss.org/)! I changed the dropdowns to use code from Twitter's Bootstrap modified slightly for my design. The documentation below will need to be updated to reflect these new changes.

### Responsive

This layout was designed to be [responsive](http://www.alistapart.com/articles/responsive-web-design/). By default it will fill 100% of the viewport.

    div#footer, div#header, div#body {
      /*width: expression(this.width > 1280 ? 1280: (this.width < 800 ? 800: true));
	    max-width: 1280px;
	    min-width: 800px;*/
      
    html, body, div#container, div#top, div#middle, div#bottom {
      /*width: expression(this.width < 800 ? 800: true);
	    min-width: 800px;*/
    }
      
This will give the page a maximum width of 1280 pixels and a minimum width of 800 pixels. You can customize this however you wish. The header and footer will still visually extend to fill 100% of the viewport; only the contents will bounded by the max-width and min-width settings. Look at [my blog's header](http://www.linecomments.com) on a screen with a resolution greater than 1280 pixels wide to see what this looks like.

### Mobile

Since it is responsive, it adjusts to look good on mobile devices as well. These two lines in index.htm's head section target mobile browsers.

    <link rel="stylesheet" type="text/css" href="styles/mobile.css" media="screen and (max-width:600px)" />
    <meta name="viewport" id="view" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    
The mobile stylesheet makes the footer a single column and increases the padding around the navigation items to make them more tappable.

This layout was tested on Safari on iPhone 4. Not sure how it looks on other mobile devices.

## For more information

Check out my blog post about it [here](http://www.linecomments.com/2012/01/applayout-simple-starting-layout-for.html "Line Comments")