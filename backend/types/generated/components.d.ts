import type { Schema, Struct } from '@strapi/strapi';

export interface QuickSummary60Summary extends Struct.ComponentSchema {
  collectionName: 'components_quick_summary_60_summaries';
  info: {
    displayName: '60Summary';
    icon: 'clock';
  };
  attributes: {
    BulletPoint: Schema.Attribute.Component<
      'quick-summary.bullet-points',
      true
    >;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickSummaryBulletPoints extends Struct.ComponentSchema {
  collectionName: 'components_quick_summary_bullet_points';
  info: {
    description: '';
    displayName: 'BulletPoint';
    icon: 'check';
  };
  attributes: {
    Description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quick-summary.60-summary': QuickSummary60Summary;
      'quick-summary.bullet-points': QuickSummaryBulletPoints;
    }
  }
}
