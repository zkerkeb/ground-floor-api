'use strict';

/**
 * web-as-seen-on service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-as-seen-on.web-as-seen-on');
