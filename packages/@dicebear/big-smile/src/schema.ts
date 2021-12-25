import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  title: 'Options',
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: {
    accessories: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'catEars',
          'glasses',
          'sailormoonCrown',
          'clownNose',
          'sleepMask',
          'sunglasses',
          'faceMask',
          'mustache',
        ],
      },
      default: [
        'catEars',
        'glasses',
        'sailormoonCrown',
        'clownNose',
        'sleepMask',
        'sunglasses',
        'faceMask',
        'mustache',
      ],
      examples: [
        ['catEars'],
        ['glasses'],
        ['sailormoonCrown'],
        ['clownNose'],
        ['sleepMask'],
        ['sunglasses'],
        ['faceMask'],
        ['mustache'],
      ],
    },
    accessoriesProbability: {
      type: 'integer',
      minimum: 0,
      maximum: 100,
      default: 50,
    },
    eyes: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'cheery',
          'normal',
          'confused',
          'starstruck',
          'winking',
          'sleepy',
          'sad',
          'angry',
        ],
      },
      default: [
        'cheery',
        'normal',
        'confused',
        'starstruck',
        'winking',
        'sleepy',
        'sad',
        'angry',
      ],
      examples: [
        ['cheery'],
        ['normal'],
        ['confused'],
        ['starstruck'],
        ['winking'],
        ['sleepy'],
        ['sad'],
        ['angry'],
      ],
    },
    face: {
      type: 'array',
      items: { type: 'string', enum: ['base'] },
      default: ['base'],
      examples: [['base']],
    },
    hair: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'shortHair',
          'mohawk',
          'wavyBob',
          'bowlCutHair',
          'curlyBob',
          'straightHair',
          'braids',
          'shavedHead',
          'bunHair',
          'froBun',
          'bangs',
          'halfShavedHead',
          'curlyShortHair',
        ],
      },
      default: [
        'shortHair',
        'mohawk',
        'wavyBob',
        'bowlCutHair',
        'curlyBob',
        'straightHair',
        'braids',
        'shavedHead',
        'bunHair',
        'froBun',
        'bangs',
        'halfShavedHead',
        'curlyShortHair',
      ],
      examples: [
        ['shortHair'],
        ['mohawk'],
        ['wavyBob'],
        ['bowlCutHair'],
        ['curlyBob'],
        ['straightHair'],
        ['braids'],
        ['shavedHead'],
        ['bunHair'],
        ['froBun'],
        ['bangs'],
        ['halfShavedHead'],
        ['curlyShortHair'],
      ],
    },
    hairColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: [
        'variant01',
        'variant02',
        'variant03',
        'variant04',
        'variant05',
        'variant06',
        'variant07',
        'variant08',
      ],
      examples: [
        ['variant01'],
        ['variant02'],
        ['variant03'],
        ['variant04'],
        ['variant05'],
        ['variant06'],
        ['variant07'],
        ['variant08'],
      ],
    },
    mouth: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'openedSmile',
          'unimpressed',
          'gapSmile',
          'openSad',
          'teethSmile',
          'awkwardSmile',
          'braces',
          'kawaii',
        ],
      },
      default: [
        'openedSmile',
        'unimpressed',
        'gapSmile',
        'openSad',
        'teethSmile',
        'awkwardSmile',
        'braces',
        'kawaii',
      ],
      examples: [
        ['openedSmile'],
        ['unimpressed'],
        ['gapSmile'],
        ['openSad'],
        ['teethSmile'],
        ['awkwardSmile'],
        ['braces'],
        ['kawaii'],
      ],
    },
    skinColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: [
        'variant01',
        'variant02',
        'variant03',
        'variant04',
        'variant05',
        'variant06',
        'variant07',
        'variant08',
      ],
      examples: [
        ['variant01'],
        ['variant02'],
        ['variant03'],
        ['variant04'],
        ['variant05'],
        ['variant06'],
        ['variant07'],
        ['variant08'],
      ],
    },
  },
  additionalProperties: false,
};