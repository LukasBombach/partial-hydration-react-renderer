import React from "react";
import { Page, createInlineScript, createScript } from "lib";

const AdSetup = createInlineScript("client/adSetup");
const HydrateComponents = createScript("client/app");

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <AdSetup />
      </head>
      <body>
        <Page />
        <HydrateComponents defer />
      </body>
    </html>
  );
}
