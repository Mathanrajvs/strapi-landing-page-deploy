/**
 * landing-page router
 */

import { factories } from '@strapi/strapi';
import { config } from 'process';
import middlewares from '../../../../config/middlewares';

export default factories.createCoreRouter('api::landing-page.landing-page',{
    config:{
       find:{
        middlewares:['api::landing-page.landing-page-populate']
       },
       findOne:{
        middlewares:['api::landing-page.landing-page-populate']
       }
    },
}
);
