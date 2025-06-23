import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Aboutus } from './page/aboutus/aboutus';
import { Services } from './page/services/services';
import { Contactus } from './page/contactus/contactus';
import { Cybersecurity } from './page/cybersecurity/cybersecurity';
import { Dataeng } from './page/dataeng/dataeng';
import { Devops } from './page/devops/devops';
import { Cloudservices } from './page/cloudservices/cloudservices';
export const routes: Routes = [{path:'',component: Home},{path:'aboutus',component:Aboutus},{path:'Home',component:Home},
    {path:'services',component:Services},
    {path:'contactus',component: Contactus},
     {path:'learn more',component: Aboutus}, 
    {path:'cloudservices',component:Cloudservices},
    {path:'cybersecurity',component:Cybersecurity},
    {path:'dataeng',component:Dataeng} ,
    {path:'devops',component:Devops},]
