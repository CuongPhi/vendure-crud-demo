export const extensionRoutes = [  {
    path: 'extensions/real-estate',
    loadChildren: () => import('./extensions/e7bd550a1f252e0d785b803f23db137618591ca1d209319aee99a040ce299f38/real-estate.module').then(m => m.RealEstateModule),
  }];
