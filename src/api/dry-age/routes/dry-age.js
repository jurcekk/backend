'use strict';

/**
 * dry-age router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dry-age.dry-age');
