// 'use strict';

// /**
//  * article controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// // faire en sorte de populate la relation related_articles



// module.exports = createCoreController('api::article.article');
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) =>  ({
  // Surcharge de la méthode find
  async find(ctx) {
    // Spécifiez les relations à peupler, y compris les relations imbriquées
    ctx.query = {
      ...ctx.query,
      populate: {
        related_articles: {
          populate: ['illustration'], // Remplacez par les champs réels que vous voulez peupler
        },
      },
    };

    // Utilisez le comportement par défaut pour obtenir les données
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },

  // Surcharge de la méthode findOne
  async findOne(ctx) {
    // Spécifiez les relations à peupler, y compris les relations imbriquées
    ctx.query = {
      ...ctx.query,
      populate: {
        related_articles: {
          populate: ['illustration'], // Remplacez par les champs réels que vous voulez peupler
        },
      },
    };

    // Utilisez le comportement par défaut pour obtenir les données
    const { data } = await super.findOne(ctx);

    return { data };
  },
}));
