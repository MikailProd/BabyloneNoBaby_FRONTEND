import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BnbAppModule } from './module/bnbapp.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(BnbAppModule);