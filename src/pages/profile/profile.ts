import { Component } from '@angular/core';
import { MenuController, SegmentButton, App, NavParams, LoadingController, ActionSheetController, Platform, ToastController,Events } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { FollowersPage } from '../followers/followers';
import { SettingsPage } from '../settings/settings';
import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { locale } from 'core-js/library/web/timers';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  display: string;
  profile: ProfileModel = new ProfileModel();
  loading: any;
  moreActionSheet = undefined;
  clipboardToast: any;

  constructor(
    public menu: MenuController,
    public app: App,
    public navParams: NavParams,
    public profileService: ProfileService,
    public translate: TranslateService,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public socialSharing: SocialSharing,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
    private clipboard: Clipboard,
    public events: Events,
    public toastCtrl: ToastController
  ) {
    this.display = "myphoto";

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.profileService.getData()
      .then(data => {
        this.profile.user = data.user;
        this.profile.following = data.following;
        this.profile.followers = data.followers;
        this.profile.posts = data.posts;
        this.loading.dismiss();
      });
  }

  goToFollowersList() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(FollowersPage, {
      list: this.profile.followers
    });
  }

  goToFollowingList() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(FollowersPage, {
      list: this.profile.following
    });
  }

  goToSettings() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(SettingsPage);
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

  sharePost(post) {
   //this code is to use the social sharing plugin
   // message, subject, file, url
   this.socialSharing.share(post.description, post.title, post.image)
   .then(() => {
     console.log('Success!');
   })
   .catch(() => {
      console.log('Error');
   });
  }

  onClickMenu(){
    console.log('---more---');

    if (this.moreActionSheet == undefined) {
      
    }

    Observable.forkJoin(
      this.translate.get('COPY_PROFILE_URL'),
      this.translate.get('CHANGE_PWD'),
      this.translate.get('SETTINGS'),
      this.translate.get('LOG_OUT'),
      this.translate.get('LINK_PROFILE_COPY_CLIPBOARD')
    ).subscribe(data => {
      console.log(data);

      this.clipboardToast = this.toastCtrl.create({
        message: data[4],
        duration: 3000,
        position: 'bottom'
      });

      this.moreActionSheet = this.actionsheetCtrl.create({
        title: 'Select an action',
        buttons: [
          {
            text: data[0],
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'link' : null,
            handler: () => {
              this.clipboard.copy(this.profile.user.image);

              this.clipboard.paste().then(
                (resolve: string) => {
                  this.clipboardToast.present();
                },
                (reject: string) => {

                }
              );
            }
          },
          {
            text: data[1],
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'lock' : null,
            handler: () => {

            }
          },
          {
            text: data[2],
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'settings' : null,
            handler: () => {

            }
          },
          {
            text: data[3],
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'log-out' : null,
            handler: () => {
              this.authService.logout();
              this.events.publish('authenticate');
              this.menu.close();
              this.app.getRootNav().setRoot(TabsNavigationPage);
            }
          }
        ]
      });


      this.moreActionSheet.present();
    });

  }

}
