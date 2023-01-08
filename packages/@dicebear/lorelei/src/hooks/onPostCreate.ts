/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/FCwwMBxsRND9Mbtpg5PUic/%40dicebear%2Florelei?node-id=23%3A2194
 */

import { Prng, StyleOptions } from "@dicebear/core";

import { Options, ColorPickCollection, ComponentPickCollection } from "../types.js";

type Props = {
  prng: Prng,
  options: StyleOptions<Options>,
  components: ComponentPickCollection,
  colors: ColorPickCollection
} 

export function onPostCreate({ prng, options, components, colors }: Props) {
  if (components.beard && colors.hair === colors.mouth) {
    colors.mouth = 'ffffff';
  }
  
}