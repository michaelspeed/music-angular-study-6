import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EntryComponent } from './entry/entry.component';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {GC_AUTH_TOKEN} from './constants';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({uri: 'http:localhost:4000'});
    const auth = setContext((_, {headers}) => {
      const token = localStorage.getItem(GC_AUTH_TOKEN);
      if (!token) {
          return {};
      } else {
          return {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };
      }
  });

  apollo.create({
      link: auth.concat(http),
      cache: new InMemoryCache()
  });
  }
}
