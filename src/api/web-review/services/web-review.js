'use strict';

/**
 * web-review service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-review.web-review');
