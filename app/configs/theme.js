webgarden.config(function ($mdThemingProvider) {
  var customPrimary = {
    '50': '#6ff1cb',
    '100': '#57efc3',
    '200': '#40ecbb',
    '300': '#29eab2',
    '400': '#16e3a8',
    '500': '#14CC97',
    '600': '#12b586',
    '700': '#0f9e75',
    '800': '#0d8663',
    '900': '#0b6f52',
    'A100': '#86f3d4',
    'A200': '#9df5dc',
    'A400': '#b4f8e4',
    'A700': '#095841'
  };
  $mdThemingProvider
  .definePalette('customPrimary', customPrimary);

  var customAccent = {
    '50': '#cfbc87',
    '100': '#c8b274',
    '200': '#c0a862',
    '300': '#b99e50',
    '400': '#ab9044',
    '500': '#99813D',
    '600': '#877236',
    '700': '#75622e',
    '800': '#625327',
    '900': '#504420',
    'A100': '#d6c699',
    'A200': '#ded0ab',
    'A400': '#e5dabd',
    'A700': '#3e3419'
  };
  $mdThemingProvider
  .definePalette('customAccent', customAccent);

  var customWarn = {
    '50': '#ffc180',
    '100': '#ffb566',
    '200': '#ffa84d',
    '300': '#ff9c33',
    '400': '#ff8f1a',
    '500': '#FF8300',
    '600': '#e67600',
    '700': '#cc6900',
    '800': '#b35c00',
    '900': '#994f00',
    'A100': '#ffcd99',
    'A200': '#ffdab3',
    'A400': '#ffe6cc',
    'A700': '#804200'
  };
  $mdThemingProvider
  .definePalette('customWarn', customWarn);

  var customBackground = {
    '50': '#ffffff',
    '100': '#ffffff',
    '200': '#ffffff',
    '300': '#ffffff',
    '400': '#ffffff',
    '500': '#FFFFFF',
    '600': '#f2f2f2',
    '700': '#e6e6e6',
    '800': '#d9d9d9',
    '900': '#cccccc',
    'A100': '#ffffff',
    'A200': '#ffffff',
    'A400': '#ffffff',
    'A700': '#bfbfbf'
  };
  $mdThemingProvider
  .definePalette('customBackground', customBackground);

  $mdThemingProvider.theme('default')
  .primaryPalette('customPrimary')
  .accentPalette('customAccent')
  .warnPalette('customWarn')
  .backgroundPalette('customBackground')
});