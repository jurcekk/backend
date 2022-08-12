'use strict';

/**
 * spice service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spice.spice');
