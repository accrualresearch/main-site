const React = require('react');

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions,
) => {
  const { config } = pluginOptions;

  setHeadComponents([
    <script
      key="gatsby-plugin-cookie-though"
      src="https://cookiethough.dev/lib/1.2.0"
    />,
  ]);

  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        CookieThough.init(${JSON.stringify(config)});
        CookieThough.onPreferencesChanged(function(preferences) {
          if(!window.dataLayer) {
            return;
          }
          const prefsObj = {};
          preferences.cookieOptions.forEach(function(option) {
            prefsObj[option.id] = option.isEnabled;
          });
          window.dataLayer.push({
            "event": "cookie-preference-change",
            "preferences": prefsObj
          });
        })`,
      }}
    />,
  ]);
};
