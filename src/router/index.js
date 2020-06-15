import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '主页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    name: 'Users',
    meta: {
      title: '用户管理',
      icon: 'user'
    },
    children: [{
        path: 'index',
        name: 'UserList',
        component: () => import('@/views/users/index'),
        meta: {
          title: '用户列表',
          icon: 'list'
        }
      },
      {
        path: 'new',
        name: 'UserNew',
        component: () => import('@/views/users/new'),
        meta: {
          title: '用户新增',
          icon: 'add'
        }
      },
      {
        path: 'edit',
        name: 'UserEdit',
        hidden: true,
        component: () => import('@/views/users/edit'),
        meta: {
          title: '用户信息修改'
        }
      }
    ]
  },
  {
    path: '/product_categories',
    component: Layout,
    redirect: '/product_categories/index',
    name: 'ProductCategories',
    meta: {
      title: '商品分类管理',
      icon: 'sort'
    },
    children: [{
        path: 'index',
        name: 'ProductCategoriesList',
        component: () => import('@/views/product_categories/index'),
        meta: {
          title: '分类列表',
          icon: 'list'
        }
      },
      {
        path: 'new',
        name: 'ProductCategoriesNew',
        component: () => import('@/views/product_categories/new'),
        meta: {
          title: '分类新增',
          icon: 'add'
        }
      },
      {
        path: 'edit',
        name: 'ProductCategoriesEdit',
        hidden: true,
        component: () => import('@/views/product_categories/edit'),
        meta: {
          title: '商品分类信息修改'
        }
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    redirect: '/product/index',
    name: 'Products',
    meta: {
      title: '商品管理',
      icon: 'Commoditymanagement'
    },
    children: [{
        path: 'index',
        name: 'ProductsList',
        component: () => import('@/views/products/index'),
        meta: {
          title: '商品列表',
          icon: 'list'
        }
      },
      {
        path: 'new',
        name: 'ProductNew',
        component: () => import('@/views/products/new'),
        meta: {
          title: '商品新增',
          icon: 'add'
        }
      },
      {
        path: 'edit',
        name: 'ProductEdit',
        hidden: true,
        component: () => import('@/views/products/edit'),
        meta: {
          title: '商品信息修改'
        }
      }
    ]
  }


]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
