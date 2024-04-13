/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignImport } from './routes/sign'
import { Route as DashboardImport } from './routes/_dashboard'
import { Route as DashboardIndexImport } from './routes/_dashboard/index'
import { Route as DashboardAccountImport } from './routes/_dashboard/account'

// Create/Update Routes

const SignRoute = SignImport.update({
  path: '/sign',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardAccountRoute = DashboardAccountImport.update({
  path: '/account',
  getParentRoute: () => DashboardRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/sign': {
      preLoaderRoute: typeof SignImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard/account': {
      preLoaderRoute: typeof DashboardAccountImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/': {
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  DashboardRoute.addChildren([DashboardAccountRoute, DashboardIndexRoute]),
  SignRoute,
])

/* prettier-ignore-end */
