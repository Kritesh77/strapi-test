import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroSliderHeroSlider extends Schema.Component {
  collectionName: 'components_hero_slider_hero_sliders';
  info: {
    displayName: 'Hero Slider';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MetaDataMetaData extends Schema.Component {
  collectionName: 'components_meta_data_meta_data';
  info: {
    displayName: 'MetaData';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-slider.hero-slider': HeroSliderHeroSlider;
      'meta-data.meta-data': MetaDataMetaData;
    }
  }
}
