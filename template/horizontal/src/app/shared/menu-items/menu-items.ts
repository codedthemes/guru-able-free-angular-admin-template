import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'nav',
        short_label: 'N',
        name: 'Navigation',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'dashboard',
            short_label: 'D',
            name: 'Dashboard',
            type: 'link',
            icon: 'ti-home'
          }
        ],
      }
    ]
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'ui-ele',
        short_label: 'B',
        name: 'UI Element',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'basic',
            short_label: 'B',
            name: 'Basic Components',
            type: 'sub',
            icon: 'ti-layout-grid2-alt',
            children: [
              {
                state: 'button',
                name: 'Button'
              },
              {
                state: 'typography',
                name: 'Typography'
              }
            ]
          },
          {
            state: 'notifications',
            short_label: 'A',
            name: 'Notifications',
            type: 'link',
            icon: 'ti-crown'
          }
        ]
      }
    ]
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'tables',
        short_label: 'B',
        name: 'Tables',
        type: 'sub',
        icon: 'ti-receipt',
        children: [
          {
            state: 'bootstrap-table',
            short_label: 'B',
            name: 'Bootstrap Table',
            type: 'link',
            icon: 'ti-receipt'
          }
        ]
      }
    ]
  },
  {
    label: 'Chart And Map',
    main: [
      {
        state: 'cm',
        short_label: 'C',
        name: 'Map',
        type: 'sub',
        icon: 'ti-bar-chart-alt',
        children: [
          {
            state: 'map',
            short_label: 'M',
            name: 'Google Maps',
            type: 'link',
            icon: 'ti-map-alt'
          }
        ]
      }
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'pages',
        short_label: 'A',
        name: 'Pages',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'auth',
            short_label: 'A',
            name: 'Authentication',
            type: 'sub',
            icon: 'ti-id-badge',
            children: [
              {
                state: 'login',
                type: 'link',
                name: 'Login',
                target: true
              }, {
                state: 'registration',
                type: 'link',
                name: 'Registration',
                target: true
              }
            ]
          },
          {
            state: 'user',
            short_label: 'U',
            name: 'User Profile',
            type: 'link',
            icon: 'ti-user'
          }
        ]
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'O',
        name: 'Other',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            short_label: 'M',
            name: 'Menu Levels',
            type: 'sub',
            icon: 'ti-direction-alt',
            children: [
              {
                state: '',
                name: 'Menu Level 2.1',
                target: true
              }, {
                state: '',
                name: 'Menu Level 2.2',
                type: 'sub',
                children: [
                  {
                    state: '',
                    name: 'Menu Level 2.2.1',
                    target: true
                  },
                  {
                    state: '',
                    name: 'Menu Level 2.2.2',
                    target: true
                  }
                ]
              }, {
                state: '',
                name: 'Menu Level 2.3',
                target: true
              }, {
                state: '',
                name: 'Menu Level 2.4',
                type: 'sub',
                children: [
                  {
                    state: '',
                    name: 'Menu Level 2.4.1',
                    target: true
                  },
                  {
                    state: '',
                    name: 'Menu Level 2.4.2',
                    target: true
                  }
                ]
              }
            ]
          },
          {
            state: 'simple-page',
            short_label: 'S',
            name: 'Simple Page',
            type: 'link',
            icon: 'ti-layout-sidebar-left'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
