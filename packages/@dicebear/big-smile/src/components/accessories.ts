import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../static-types';

export const accessories: ComponentGroup = {
  catEars: (components: ComponentPickCollection, colors: ColorPickCollection) =>
    `<path d="M192.2 102.9c11.2-17.1 55.8 14.7 77.3 33-29.2-1.8-45.2 37.3-50.4 56.4-9.2 9-24.5 10.7-30.7 10.7-3.4-26.3-7.3-83 3.8-100.1Z" fill="#A09B9B"/><mask id="accessoriesCatEars-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="184" y="97" width="86" height="106"><path d="M192.2 102.9c11.2-17.1 55.8 14.7 77.3 33-29.2-1.8-45.2 37.3-50.4 56.4-9.2 9-24.5 10.7-30.7 10.7-3.4-26.3-7.3-83 3.8-100.1Z" fill="#A09B9B"/></mask><g fill="#C4C4C4" mask="url(#accessoriesCatEars-a)"><path d="M185.8 198.8c7.7-2.8 17.5-6 21.4-7.3l-25-8.9 3.6 16.2ZM179.5 173l-.6-10.8 18 6.2-17.4 4.6Z"/></g><path d="M269.5 136c-28.5 9.7-45.5 41.2-50.4 55.7-22.3-27.9-33.6-76.6-22-89.1 9.3-10 52.1 18 72.4 33.3Z" fill="#FEB3A4"/><mask id="accessoriesCatEars-b" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="192" y="100" width="78" height="92"><path d="M269.5 136c-28.5 9.7-45.5 41.2-50.4 55.7-22.3-27.9-33.6-76.6-22-89.1 9.3-10 52.1 18 72.4 33.3Z" fill="#FEB3A4"/></mask><g mask="url(#accessoriesCatEars-b)"><path d="M233.4 126.5c-21-.4-17.6 44.1-13.1 66.5l55.1-56a88.3 88.3 0 0 0-42-10.5Z" fill="#FFE7E2"/></g><mask id="accessoriesCatEars-c" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="336" y="102" width="90" height="80"><path d="M407 182a162 162 0 0 0-70.5-68.5l42-11.5 47.5 12.5-19 67.5Z" fill="#C4C4C4"/></mask><g mask="url(#accessoriesCatEars-c)"><path d="M387.5 106.9c13.4.4 14.4 38.3 13.2 57.7-10.5-18-37.3-13.5-49.3-9.7-8.4-2.2-15.3-10.7-17.7-14.4 12.4-11.4 40.5-34.1 53.8-33.6Z" fill="#A09B9B"/><mask id="accessoriesCatEars-d" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="333" y="106" width="69" height="59"><path d="M387.5 106.9c13.4.4 14.4 38.3 13.2 57.7-10.5-18-37.3-13.5-49.3-9.7-8.4-2.2-15.3-10.7-17.7-14.4 12.4-11.4 40.5-34.1 53.8-33.6Z" fill="#A09B9B"/></mask><g fill="#C4C4C4" mask="url(#accessoriesCatEars-d)"><path d="M334.8 137.5c4.6 3.5 10 8.2 12.3 10l-5.3-18-7 8ZM345.8 124.5l5.4-4.2L355 133l-9.2-8.6Z"/></g><path d="M401 172.5c-16.3-13.4-39.8-20.1-49.3-17.8 5.8-23.2 26.8-47.5 37.9-45 8.9 1.8 11.4 45.3 11.4 62.8Z" fill="#FEB3A4"/><mask id="accessoriesCatEars-e" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="351" y="109" width="50" height="65"><path d="M401 174c-16.3-13.4-39.8-21.6-49.3-19.3 5.8-23.2 26.8-47.5 37.9-45 8.9 1.8 11.4 46.8 11.4 64.3Z" fill="#FEB3A4"/></mask><g mask="url(#accessoriesCatEars-e)"><path d="M392.3 141.3c-9.4-14.9-30.9 3.9-40.5 15l54.2 18a93.3 93.3 0 0 0-13.7-33Z" fill="#FFE7E2"/></g></g>`,
  glasses: (components: ComponentPickCollection, colors: ColorPickCollection) =>
    `<g fill-rule="evenodd" clip-rule="evenodd"><path d="m479 283.3-49-1.8-.5-10.5 49.8 2.3-.2 10Z" fill="#896307"/><path d="M304 220.7c-27.2 4.3-46 32.2-41.2 63 4.9 30.9 31.4 51.6 58.6 47.3 27.2-4.3 46.1-32.2 41.3-63-4.9-30.8-31.4-51.6-58.6-47.3ZM252.2 273c.5-30.6 20.9-57.4 50.3-62 33.3-5.3 64.4 20 70 55.6l3.3-1.2a27 27 0 0 1 13-.7c.6-12.5 4.2-24 10.2-33a40.6 40.6 0 0 1 31.5-19.8 42 42 0 0 1 34 16.3 70.9 70.9 0 0 1 15.8 40.8 69 69 0 0 1-10 42.3 40.6 40.6 0 0 1-31.6 19.7 42 42 0 0 1-34-16.2A70.6 70.6 0 0 1 389 275c-3.4-1.4-7-1.2-10.4-.2-2.1.6-4 1.5-5.3 2.2.3 31.3-20.3 59-50.3 63.8-33.4 5.2-64.4-20.1-70-55.6a73 73 0 0 1-.3-2.2l-86.4-14a102.2 102.2 0 0 0-44.4 2.6c-12 4-18.3 18.8-18.5 28l-9.9-.2c.3-15.3 11.4-32.6 25.3-37.3 13.8-4.6 31.7-5.3 48.8-3v.1l84.6 13.6Zm155-35.8a59 59 0 0 0-8.4 36c1 14.1 6.1 26.5 13.4 35 7.3 8.7 16.6 13.3 26 12.8 9.3-.5 17.8-6 23.8-15.2a59 59 0 0 0 8.4-36.1c-1-14.1-6-26.5-13.4-35-7.3-8.6-16.5-13.3-26-12.8-9.3.5-17.7 6-23.8 15.3Z" fill="#C5900F"/></g>`,
  sailormoonCrown: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path d="M148 160c101.9-11.2 203 37.8 229.5 60.5 9.6-11.2 25.4-24.7 36.4-26 2.6 6 7 21 8.1 24.5-16 0-33.5 19.8-42.1 33.5-66.9-58-160.1-58-254.9-58a95.8 95.8 0 0 1 23-34.5Z" fill="#FFC00C"/><mask id="accessoriesSailormoonCrown-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="125" y="158" width="297" height="95"><path d="M148.5 160.5c101.9-11.2 202.5 37.3 229 60 9.6-11.2 25.4-24.7 36.4-26 2.6 6 7 21 8.1 24.5-16 0-33.5 19.8-42.1 33.5-75.9-62.5-161.4-55-254.9-58a92.3 92.3 0 0 1 23.5-34Z" fill="#FFC00C"/></mask><g fill="#FFD45B" mask="url(#accessoriesSailormoonCrown-a)"><path d="m344 240.5 22.4-36.6-6.1-9.5-26.4 37.6 10 8.5ZM388.5 246.5l28.2-55.5 14 3.4L396 249l-7.6-2.5ZM327.3 225.8 353 191l-5-3-25 33.8 4.2 4ZM276 215l30.6-36.5-14.3-7-36 41L276 215Z"/></g><ellipse cx="378.2" cy="232.5" rx="8.8" ry="13.5" fill="#FF3C15"/><mask id="accessoriesSailormoonCrown-b" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="369" y="219" width="18" height="27"><ellipse cx="378.2" cy="232.5" rx="8.8" ry="13.5" fill="#FF3C15"/></mask><g mask="url(#accessoriesSailormoonCrown-b)"><path d="M388.1 227a25.9 25.9 0 0 1-17 16.5c1.2 1.9 5 5.2 10.6 3.7 5.6-1.4 6.6-14 6.4-20.2Z" fill="#CB1414"/><ellipse rx="3" ry="4.9" transform="matrix(.94302 .33275 -.30774 .95147 376 225.9)" fill="#FF7256"/></g>`,
  clownNose: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<ellipse cx="387" cy="328.5" rx="29" ry="28.5" fill="#FF3C15"/><mask id="accessoriesClownNose-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="359" y="300" width="57" height="57"><ellipse cx="387.5" cy="328.5" rx="28.4" ry="28.3" fill="#FF3C15"/></mask><g mask="url(#accessoriesClownNose-a)"><path d="M390 346.5a43.8 43.8 0 0 1-34-16.5c2.3 11.5 12.4 34.5 34 34.5s27-23 27-34.5a30.6 30.6 0 0 1-27 16.5Z" fill="#DD2400"/><ellipse rx="9.2" ry="10.9" transform="matrix(.9746 .22399 -.44476 .89565 380.5 314.6)" fill="#FF7256"/></g>`,
  sleepMask: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path d="M99 260c6.5 0 97-2.3 127-7l27.5 58c-40.8 9.6-94.3 9.7-116 8.5A59.3 59.3 0 0 0 88 299c.4-8.8 4.5-39 11-39Z" fill="#5E0E56"/><path d="M438.3 234c-65.2-64.1-159.5-37.2-199.4-6.7a50.2 50.2 0 0 0-19.9 29.2c-4 16.1-2.6 45.3 29.8 65.1 32.4 19.8 72.7 6.3 82 0 9.5-6.2 27-20.8 51-19.8 19.3.9 34.5 10.1 39.8 14.6 9.7 3.9 27.4-1.8 27.4-36 0-34.1-6.5-43.5-10.7-46.3Z" fill="#9A3E91"/><path fill-rule="evenodd" clip-rule="evenodd" d="M328.8 270.3a32.6 32.6 0 0 0 3.8-19.2l-5 .6c.6 4.5-.1 12-4.4 18.2-3.5 5-9.4 9.4-19.3 11a38.7 38.7 0 0 1-24.6-3.5 31.7 31.7 0 0 1-13.3-12.7l-4.5 2.2c2 4 6.3 9.3 12.8 13.4l-8.8 11 4 3.2 9.3-11.8c6.2 3 14 4.5 23.4 3.5l2.3 15 5-.7-2.4-15.1c8.8-2 14.8-6 18.9-11l9.4 4.7 2.2-4.4-8.8-4.4ZM429.3 276.5c4.7-3.5 7.5-8.4 8.8-12l-4.7-1.6a22 22 0 0 1-8.8 10.9 17.9 17.9 0 0 1-15.3 1.3c-6.8-2.1-11.1-6-13.8-10-3-4.9-4-10-4-13h-5c0 3.3.8 8.3 3.4 13.3l-8.8 4.5 2.3 4.5 9.3-4.8c2.9 3.8 7 7.2 12.8 9.4l-3.5 10.8 4.8 1.5 3.4-10.8c5.8 1.3 10.8.6 14.9-1.3l4 5.7 4-2.9-3.8-5.5Z" fill="#F9ACF1"/>`,
  sunglasses: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path d="M258.8 292.1c3.7 15.9 11.2 30.3 24.3 35.3 29 11 71 3 77-3.5a67 67 0 0 0 7.7-20.4c17-9.6 31.8-4.4 36.7-1 1.3 7.7 2.6 14 3.7 15.8 3 5.6 24.3 12.5 39 3 14.8-9.5 15.3-67 12.5-73-3.4-7.3-55.7-3.8-57.9 10-1.5 4.2-.7 17.2.8 30-8-2.6-19.1-3.7-31.4.5 3-14.8 4.3-29.6 1.4-34.4-5.1-17.4-111.6-24.9-114-11.5-2.5 7-3.7 21.6-2 36.9-43.5-5.6-115.2-14.6-131-16.3a47 47 0 0 0-25.8 6.2c-4.7 2.7-9.1 6.5-12.1 11.9-3.1 5.4-4.5 12-3.7 19.6l12-1.4c-.7-5.3.4-9.3 2-12.3 1.8-3 4.5-5.5 7.8-7.4 6.8-4 15-5 18.6-4.6 16 1.7 91.2 11.1 134.4 16.6Z" fill="#595757" style="mix-blend-mode:multiply"/><g style="mix-blend-mode:screen" opacity=".2"><mask id="accessoriesSunglasses-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="83" y="236" width="378" height="97"><path d="M258.6 290.6c3.6 17 11.2 32.8 25.4 37.4 31 10 70.1 2.3 76.1-4.4 2.2-2.4 5.4-11 8.2-21.5 16.9-9.6 31.4-4.2 36.2-.8a81.7 81.7 0 0 0 3.7 16.5c3 5.8 24.3 13 39 3.1 14.8-9.8 15.3-69 12.5-75.3-13-4.4-40.6-7.5-57.9 10.3-1.5 4.3-.7 17.9.8 31.2-8-2.7-18.9-3.8-31 .4 3-15.1 4-30.2-.1-35.5C358 238 283 231 259 241c-2.5 3.3-4.3 19.6-2.4 37.2-43.6-5.7-115.2-15-131-16.7-6-.6-16.8 1-25.9 6.4a33 33 0 0 0-12 12.2 33 33 0 0 0-3.7 20l12-1.3a21 21 0 0 1 2.1-12.9 21 21 0 0 1 7.8-7.7c6.8-4.1 15-5.1 18.5-4.8 16 1.8 91 11.5 134.2 17.2Z" fill="#595757" style="mix-blend-mode:multiply"/></mask><g mask="url(#accessoriesSunglasses-a)" fill="#fff"><path d="m303.8 223.6-65.7 91 18 13.7L340.7 221l-36.9 2.6ZM344.2 235.3l-77.3 96 3 22.4 95-111.4-20.7-7ZM474.8 231.6l-77.3 96 3 22.4 94.9-111.4-20.6-7Z"/></g></g>`,
  faceMask: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M158.8 304a359.4 359.4 0 0 1 59.6 32l-2.8 4c-13.9-9.2-36.4-22.2-58.6-31.3-11.2-4.5-22.1-8-32-9.5a40 40 0 0 0-23.9 2l-2.2-4.4a44.7 44.7 0 0 1 27-2.5c10.2 1.6 21.6 5.2 33 9.8Zm57 122.4 9.1-2.3 1.2 4.8-8.5 2.2c-7.4 2-14 3.7-20.7 4.3-9.5.8-19.3-.7-32.4-6.6l2-4.6c12.5 5.7 21.5 7 30 6.2 6.2-.5 12.2-2.1 19.4-4Z" fill="#fff"/><path d="M386.5 311A664.6 664.6 0 0 0 217 334.5c14 24 19 59.5 5 95.5 45.9 26 153.8 66.6 218.3 21a123.2 123.2 0 0 0 31.2-57c9.6-39.6-23-68.8-40.5-78.5-9.6-1.6-28.5-4.4-44.5-4.5Z" fill="#F7F7F7"/><path d="M211.5 338.5c2.4-4 13-7.2 19-7.5 3 3 9.2 17.1 10 49.5 1 40.5-7 52-8 54.5-.7 1.9-14-5-17-6.5s-3-4.5 0-11c6.5-14 3-54.5 0-63.5-2.4-7.2-3-12.8-4-15.5Z" fill="#EDEDED"/><path d="M409 344c-35.2-4.8-106 18-137 30 114.4-28.8 181.7-12 201 0-6.7-8-28.8-25.2-64-30ZM312 403c26 12.3 91.4 31.2 145 8-25 20-89 46.4-145-8Z" fill="#EDEDED"/>`,
  mustache: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path d="M393.5 329.7c9-5.2 30.7-14.3 45.7-9 8.7 3 14.9 9.9 20.3 16 6 6.5 11 12 17.3 10.7.3 0 .6.4.3.6-5.7 4.7-26 20-39.4 20.6-16.3.9-24.2-7-36.4-19l-3.8-3.7c-3.8 10.2-18 23.7-50.4 40-59 29.5-97.7-3-116.3-25-.3-.3.3-.8.6-.7 7.2 4.2 15.3.5 35.8-9 9.4-4.3 17.8-8.7 25.6-12.8 19.3-10.2 35.1-18.5 53-18.7a124.6 124.6 0 0 1 47.7 10Z" fill="#71472D"/><path d="M339.6 337.5c11-4.8 32.6-1 42 1.4-33-1-42.4 11.1-68.8 25.3a53.7 53.7 0 0 1-49.6 1c27.8 8.8 62.7-21.6 76.4-27.7ZM366.6 355.4c-8.3 7.6-28.2 22.8-42.3 23.2 10.5-7.9 33.5-23.5 42.3-23.2ZM411.3 332.8c4.6-2.2 15.8-5.1 24 .8 9.3 6.5 16.5 12.3 21.2 12.4-4.9.4-14-.2-21.4-5.4a48.2 48.2 0 0 0-23.8-7.8Z" fill="#5E351B"/>`,
};
