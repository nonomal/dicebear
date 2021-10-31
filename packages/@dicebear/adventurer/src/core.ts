import type { Style, StyleSchema } from '@dicebear/core';
import type { Options } from './options';

import schema from './schema.json';
import { getComponents } from './utils/getComponents';
import { getColors } from './utils/getColors';
import { onPreCreate } from './hooks/onPreCreate';
import { onPostCreate } from './hooks/onPostCreate';
import { dimensions } from './meta/components';

export const style: Style<Options> = {
  meta: {
    title: 'Adventurer',
    creator: 'Lisa Wischofsky',
    source: 'https://www.instagram.com/lischis_adventures/',
    license: {
      name: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    },
  },
  schema: schema as StyleSchema,
  create: ({ prng, options }) => {
    onPreCreate({ prng, options, preview: false });

    const components = getComponents({ prng, options });
    const colors = getColors({ prng, options });

    onPostCreate({ prng, options, components, colors, preview: false });

    return {
      attributes: {
        viewBox: '0 0 762 762',
        fill: 'none',
        'shape-rendering': 'auto',
      },
      body: `
  ${components.base?.value(components, colors) ?? ''}
  <g transform="translate(-161 -83)">
    ${components.eyes?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(-161 -83)">
    ${components.eyebrows?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(-161 -83)">
    ${components.mouth?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(-161 -83)">
    ${components.accessoires?.value(components, colors) ?? ''}
  </g>
  <g transform="translate(-161 -83)">
    ${components.hair?.value(components, colors) ?? ''}
  </g>
`,
    };
  },
  preview: ({ prng, options, property }) => {
    const componentGroup = property.toString();
    const colorGroup = property.toString().replace(/Color$/, '');

    onPreCreate({ prng, options, preview: true });

    const components = getComponents({ prng, options });
    const colors = getColors({ prng, options });

    onPostCreate({ prng, options, components, colors, preview: true });

    if (componentGroup in components) {
      const { width, height } = dimensions[componentGroup]!;

      return {
        attributes: {
          viewBox: `0 0 ${width} ${height}`,
          fill: 'none',
          'shape-rendering': 'auto',
        },
        body: components[componentGroup]?.value(components, colors) ?? '',
      };
    }

    if (colorGroup in colors) {
      return {
        attributes: {
          viewBox: `0 0 1 1`,
          fill: 'none',
          'shape-rendering': 'auto',
        },
        body: `<rect width="1" height="1" fill="${colors[colorGroup].value}" />`,
      };
    }

    return undefined;
  },
};