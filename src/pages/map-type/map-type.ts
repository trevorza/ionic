import { Component } from '@angular/core';
import { NavController, App, LoadingController, MenuController, ActionSheetController, Platform, ToastController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

import { FeedPage } from '../feed/feed';
import { CommentsPage } from '../comments/comments';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { MapTypeModel } from './map-type.model';
import { MapTypeService } from './map-type.service';
import { ViewChild, OnInit, ElementRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { locale } from 'core-js/library/web/timers';
import { SocialSharing } from '@ionic-native/social-sharing';

import { NotificationsPage } from '../notifications/notifications';
import { GoogleMap } from "../../components/google-map/google-map";
import { GoogleMapsService } from "./maps.service";

@Component({
  selector: 'map-type-page',
  templateUrl: 'map-type.html',
})
export class MapTypePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  

  loading: any;

  categories: any;

  searchText = '';

  selectedCategory = '';


  constructor(
    public app: App,
    public menu: MenuController,
    public nav: NavController,
    public mapTypeService: MapTypeService,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    public translate: TranslateService,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
    private clipboard: Clipboard,
    public socialSharing: SocialSharing,
    public toastCtrl: ToastController
  ) {
    console.log('---map type----');
    this.loading = this.loadingCtrl.create();
  }


  ionViewDidLoad() {
    this.loading.present();
    this.mapTypeService
      .getData()
      .then(data => {
        this.categories = data.categories;
        this.loading.dismiss();
      });

    this.loadMap();
  }
  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }


  onCategory(popular) {
    this.selectedCategory = popular.title;
  }


  goToFeed(category: any) {
    console.log("Clicked goToFeed", category);
    this.nav.push(FeedPage, { category: category });
  }
}
