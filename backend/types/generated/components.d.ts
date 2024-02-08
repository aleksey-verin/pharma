import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentForArticleBolshoeIzobrazhenie extends Schema.Component {
  collectionName: 'components_content_for_article_bolshoe_izobrazhenie';
  info: {
    displayName: '\u0411\u043E\u043B\u044C\u0448\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ContentForArticleDvaIzobrazheniya extends Schema.Component {
  collectionName: 'components_content_for_article_dva_izobrazheniya';
  info: {
    displayName: '\u0414\u0432\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F';
    icon: 'stack';
  };
  attributes: {
    image1: Attribute.Media;
    image2: Attribute.Media;
  };
}

export interface ContentForArticleParagraf extends Schema.Component {
  collectionName: 'components_content_for_article_paragraf';
  info: {
    displayName: '\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444';
    icon: 'layer';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface ContentForArticleSpisokLiteratury extends Schema.Component {
  collectionName: 'components_content_for_article_spisok_literatury';
  info: {
    displayName: '\u0421\u043F\u0438\u0441\u043E\u043A \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044B';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'\u0421\u043F\u0438\u0441\u043E\u043A \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044B:'>;
    Content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-for-article.bolshoe-izobrazhenie': ContentForArticleBolshoeIzobrazhenie;
      'content-for-article.dva-izobrazheniya': ContentForArticleDvaIzobrazheniya;
      'content-for-article.paragraf': ContentForArticleParagraf;
      'content-for-article.spisok-literatury': ContentForArticleSpisokLiteratury;
    }
  }
}
