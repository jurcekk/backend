'use strict';

/**
 * dry-age service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dry-age.dry-age');
