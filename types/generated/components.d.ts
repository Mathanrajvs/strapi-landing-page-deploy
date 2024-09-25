import type { Struct, Schema } from '@strapi/strapi';

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    MetaTitle: Schema.Attribute.String;
    MetaDescription: Schema.Attribute.Text;
    MetaImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    description: '';
  };
  attributes: {
    PlanType: Schema.Attribute.String;
    PlanPrice: Schema.Attribute.String;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    link: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    label: Schema.Attribute.String;
    inputType: Schema.Attribute.String;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    input: Schema.Attribute.Component<'elements.input', true>;
    link: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.String;
    plan: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.button', false>;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'elements.form', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-data': SeoMetaData;
      'elements.pricing-card': ElementsPricingCard;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button': ElementsButton;
      'blocks.row': BlocksRow;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
      'blocks.cta': BlocksCta;
    }
  }
}
