import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    {/* eslint-disable */}
    <script type="text/javascript" src="https://script.ioam.de/iam.js" />
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
      var iam_data = {
        "st": "taz",
        "cp": "Redaktion/Politik/Europa,Artikel",
        "sv": "i2"
      };
      if ( typeof( iom ) !=='undefined' && iom.c ) iom.c(iam_data,1);
      `
      }}
    />

    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
      var _paq = _paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://stats.taz.de/";
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['setSiteId', '1']);
        var d=document, g=d.createElement('script'),
        s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true;
        g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
      `
      }}
    />
    {/* eslint-enable */}
  </Fragment>
);
