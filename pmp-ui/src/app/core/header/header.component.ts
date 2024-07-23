import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { SideMenuService } from '../services/side-menu.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfigService } from 'src/app/app-config.service';
import { HeaderService } from '../services/header.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() screenResize: number;

  profile = {
    type: 'profile',
    name: 'Joan Doe',
    zone: 'Zonal Admin',
    profileImg: './assets/images/profile.png',
    menuList: [
      {
        displayName: 'Logout',
        route: null
      }
    ]
  };
  tiles = [
    { text: " ", cols: 1, rows: 2, border: "1px", color: "white" },
    { text: " ", cols: 3, rows: 1, border: "1px double red", color: "#B71C1C" },
    { text: " ", cols: 3, rows: 1, border: "0px double green", color: "#1B5E20"},
  ];
  zone: string;
  appVersion: "";
  constructor(
    public sideMenuService: SideMenuService,
    public translateService: TranslateService,
    public appConfigService: AppConfigService,
    public headerService: HeaderService,
    public dataService: DataStorageService
  ) {
    // tslint:disable-next-line:no-string-literal
    translateService.use(appConfigService.getConfig()['primaryLangCode']);
    this.appVersion = appConfigService.getConfig()["version"];
    console.log('Version: ', this.appVersion);
    console.log('config: ', appConfigService.getConfig())
  }

  ngOnInit() {
    console.log('SreenWidth', this.screenResize);
    /*if (this.headerService.getUsername() !== '') {
      this.dataService
      .getLoggedInUserZone(
        this.headerService.getUsername(),
        this.appConfigService.getConfig()['primaryLangCode']
      )
      .subscribe(response => {
        if (response.response) {
          console.log(response.response.zoneName);
          this.zone = response.response.zoneName;
        }
      });
    }*/
  }
}
