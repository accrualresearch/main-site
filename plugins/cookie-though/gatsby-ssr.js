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
        __html: `CookieThough.init(${JSON.stringify(config)})`,
      }}
    />,
  ]);
};
