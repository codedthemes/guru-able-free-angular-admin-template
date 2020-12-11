import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  tempState = [];
  breadcrumbs: Array<Object>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.breadcrumbs = [];
        this.tempState = [];
        let currentRoute = this.route.root,
          url = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              const routeSnapshot = routes.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              if (routes.snapshot.data.breadcrumb !== undefined) {
                let status = true;
                if (routes.snapshot.data.status !== undefined) {
                  status = routes.snapshot.data.status;
                }

                let icon = false;
                if (routes.snapshot.data.icon !== undefined) {
                  icon = routes.snapshot.data.icon;
                }

                let breadcrumb_caption = false;
                if (routes.snapshot.data.breadcrumb_caption !== undefined) {
                  breadcrumb_caption = routes.snapshot.data.breadcrumb_caption;
                }

                if (!this.tempState.includes(routes.snapshot.data.breadcrumb)) {
                  this.tempState.push(routes.snapshot.data.breadcrumb);
                  this.breadcrumbs.push({
                    label: routes.snapshot.data.breadcrumb,
                    icon: icon,
                    caption: breadcrumb_caption,
                    status: status,
                    url: url
                  });
                }
              }
              currentRoute = routes;
            }
          });
        } while (currentRoute);
      });
  }

  ngOnInit() {
  }

}
