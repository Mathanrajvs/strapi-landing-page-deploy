/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';
const populate={
  MetaData:{
    populate:{
      MetaImage:{
        populate:true,
        fields:["id","name","url"]
      }
    }
  }
  

}
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query={
        populate,
        ...ctx.query,
    }
    await next();
  };
};
