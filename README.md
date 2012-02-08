**Update:** The layout now compiles with [LESS](http://lesscss.org/)! I changed the dropdowns to use code from Twitter's Bootstrap modified slightly for my design.

### Overview

This layout was designed to be [responsive](http://www.alistapart.com/articles/responsive-web-design/), lightweight (7.5 kb), accessible (508 compliant), and usable in IE7+, Chrome, Safari, Firefox 3.6+, and Opera. 

### Layout: Fluid or Fixed

Using LESS variables you can quickly modify the layout to be either fluid or fixed. Just set the ```@layout``` variable to either fluid or fixed in site.less. By default it is fluid.

    @layout:            fluid;//fluid or fixed

Then in these two blocks include a couple of mixins:

    div#footer, div#header, div#body {
        .layoutInner(@layout);//fixed or fluid with defaults.
        ...
        
    html, body, div#container, div#top, div#middle, div#bottom {
        .layoutOuter(@layout);//fixed or fluid with defaults.
        ...

This will result in a layout that expands to fill 100% of the viewport. You can also give it bounds by adding a couple of variables. Just uncomment these two lines in site.less:

    @layoutMax:         1280px;//optional if @layout = fluid. default is no max.
    @layoutMin:         800px;//optional if @layout = fluid. default is no min.
    
Then modify these to:

    div#footer, div#header, div#body {
        .layoutInner(@layout, @layoutMin, @layoutMax);
        ...
        
    html, body, div#container, div#top, div#middle, div#bottom {       
        .layoutOuter(@layout, @layoutMin);
        ...

This will give a layout that expands up to 1280px and contracts down to 800px.
You can also create a fixed layout. Just set ```@layout``` to fixed. The default width is 1280px wide. But you can change it by setting an optional variable.

    @layoutWidth:       600px;//optional if @layout = fixed. default is 1280px.

Then modify these to:

    div#footer, div#header, div#body {
        .layoutInner(@layout, @layoutWidth);
        ...
        
    html, body, div#container, div#top, div#middle, div#bottom {      
        .layoutOuter(@layout, @layoutWidth);
        ...

**Note:** The header and footer will still visually extend to fill 100% of the viewport; only the contents will bounded by the width settings. Look at [my blog's header](http://www.linecomments.com) on a screen with a resolution greater than 1280 pixels wide to see what this looks like.

### Mobile

Since it is responsive, it adjusts to look good on mobile devices as well. These two lines in index.htm's head section target mobile browsers.

    <link rel="stylesheet" type="text/css" href="styles/css/mobile.css" media="screen and (max-width:600px)" />
    <meta name="viewport" id="view" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    
The mobile stylesheet makes the footer a single column and increases the padding around the navigation items to make them more tappable.

This layout was tested on Safari on iPhone 4. Not sure how it looks on other mobile devices.

## For more information

Check out my blog post about it [here](http://www.linecomments.com/2012/01/applayout-simple-starting-layout-for.html "Line Comments")