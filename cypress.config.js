import { defineConfig} from "cypress"
import { configurePlugin } from 'cypress-mongodb';


 export default defineConfig({

  env: {
    mongodb: {
        uri: "mongodb://testUser:qwerty12345@5.189.186.217:27017/?authMechanism=DEFAULT",
        database: "admin",
    },
},

  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);

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
