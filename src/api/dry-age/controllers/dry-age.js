'use strict';

/**
 *  dry-age controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dry-age.dry-age');
