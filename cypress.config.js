import { defineConfig} from "cypress"

 export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });
      // implement node event listeners here
    },
    //  specPattern: "cypressnewborn/cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",  //образец файлов .spec.
    //  excludeSpecPattern: ["**/2-advanced-exampless"],  //эти файлы не рассматриваются 
    baseUrl: "http://5.189.186.217/",
    //defaultCommandTimeout: 4000,
    chromeWebSecurity: false 
  },
});
