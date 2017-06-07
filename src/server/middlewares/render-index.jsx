/* eslint-disable react/no-danger */
import React from 'react';


function Html({ content, title, assetsMap, state }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{title}</title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
      </head>
      <body>
        <div id="root">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <script
          dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
          charSet="UTF-8"
        />
        <script src={assetsMap.main} />
      </body>
    </html>
  );
}

Html.propTypes = {
  content: React.PropTypes.string.isRequired,
  state: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  assetsMap: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  title: React.PropTypes.string,
};

Html.defaultProps = {
  title: 'Remind me to Read',
};


export default Html;
