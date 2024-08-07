// Import Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components for reference in routes

import { HomeComponent } from './pages/home/home.component';
import { PrayerRequestsComponent } from './pages/prayer-requests/prayer-requests.component';
import { HymnLibraryComponent } from './pages/hymn-library/hymn-library.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { EventsComponent } from './pages/events/events.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { DailyDevotionalsComponent } from './pages/daily-devotionals/daily-devotionals.component';
import { ChurchesComponent } from './pages/churches/churches.component';
import { MusicsComponent } from './pages/musics/musics.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ResetPwdComponent } from './pages/reset-pwd/reset-pwd.component';
import { ForgetPwdComponent } from './pages/forget-pwd/forget-pwd.component';
import { SettingComponent } from './pages/setting/setting.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prayer-requests', component: PrayerRequestsComponent },
  { path: 'hymn-library', component: HymnLibraryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'daily-devotionals', component: DailyDevotionalsComponent },
  { path: 'churches', component: ChurchesComponent },
  { path: 'musics', component: MusicsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
   { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {path:'forget_pwd', component: ForgetPwdComponent},
  {path:'reset_pwd', component: ResetPwdComponent},
  { path: '**', redirectTo: 'home' } // Redirect to home if route doesn't match

];


