export class MenuConfig {
  public defaults: any = {
    aside: {
      self: {},
      items: [
        {
          title: 'Dashboard',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
          bullet: 'dot',
        },
        {
          title: 'CRM',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-user',
          submenu: [
            {
              title: 'Subscription Plans',
              bullet: 'dot',
            },
            {
              title: 'Vendors',
              bullet: 'dot',
            },
            {
              title: 'Upcoming Orders',
              bullet: 'dot',
            },
            {
              title: 'Client Subscriptions',
              bullet: 'dot',
            },
            {
              title: 'Client Reviews',
              bullet: 'dot',
            },

          ]
        },
        {
          title: 'Accounting',
          root: true,
          icon: 'flaticon2-file',
        },
        {
          title: 'Reporting',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-user',
          submenu: [
            {
              title: 'Customers',
              bullet: 'dot',
            },
            {
              title: 'Products',
              bullet: 'dot',
             
            },
            {
              title: 'Sales',
              bullet: 'dot',
            }
          ]
        },
        {
          title: 'Admin',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-lock',
          submenu: [
            {
              title: 'Florist Profile',
              bullet: 'dot',
            },
            {
              title: 'Product',
              bullet: 'dot',
              page:'/ecommerce/products'
            },
            {
              title: 'User Management',
              bullet: 'dot',
              page:'/user-management/users'
            },
            {
              title: 'Email Templates',
              bullet: 'dot',
            },
            {
              title: 'Manage Discounts',
              bullet: 'dot',
            },
            {
              title: 'Bloom Builder',
              bullet: 'dot',
            },
            {
              title: 'Product Catalogue ',
              bullet: 'dot',
            },
            {
              title: 'Global Codes',
              bullet: 'dot',
            },
            {
              title: 'Roles and Permissions',
              bullet: 'dot',
            },
            {
              title: 'System Tags',
              bullet: 'dot',
            },
            {
              title: 'Support Cases',
              bullet: 'dot',
            },
          ]
        },
      ]
    },
  };

  public get configs(): any {
    return this.defaults;
  }
}
