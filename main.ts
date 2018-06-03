import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // This will help to compile it in the browser



/**
 1.  We have the app Component
 * 2. We register this as an app-root
 * 3. Place it in HTML file
 * 4. To boot strap import the app component and register it as declaration in NgModule
 * 5. Also tell the Ngmodule to boot strap the bomponent
 * 6. In the  main.ts file bootstrap the AppModule , by issuing the command below
 */
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);

