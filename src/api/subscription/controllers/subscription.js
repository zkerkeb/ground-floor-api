'use strict';

/**
 * subscription controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

const SUBSCRIPTION_UID = 'api::subscription.subscription';

module.exports = createCoreController(SUBSCRIPTION_UID, ({strapi}) => ({
  async find(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('Authentication is required.');
    }

    ctx.query = {
      ...ctx.query,
      filters: {
        ...ctx.query.filters,
        user_id: {
          id: {$eq: user.id},
        },
      },
    };

    return super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('Authentication is required.');
    }

    const subscription = await strapi.entityService.findOne(
      SUBSCRIPTION_UID,
      ctx.params.id,
      {populate: ['user_id']},
    );

    if (!subscription || subscription.user_id?.id !== user.id) {
      return ctx.notFound();
    }

    const sanitized = await this.sanitizeOutput(subscription, ctx);
    return this.transformResponse(sanitized);
  },

  async create(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('Authentication is required.');
    }

    const input = ctx.request.body?.data || {};
    const transactionId = input.subscription_id;
    if (!transactionId) {
      return ctx.badRequest('A transaction ID is required.');
    }

    const existingSubscriptions = await strapi.entityService.findMany(
      SUBSCRIPTION_UID,
      {
        filters: {subscription_id: transactionId},
        populate: ['user_id'],
        limit: 1,
      },
    );
    const existingSubscription = existingSubscriptions[0];

    if (existingSubscription) {
      if (existingSubscription.user_id?.id !== user.id) {
        return ctx.conflict('This transaction is already registered.');
      }

      const sanitized = await this.sanitizeOutput(existingSubscription, ctx);
      return this.transformResponse(sanitized);
    }

    ctx.request.body = {
      data: {
        ...input,
        user_id: user.id,
      },
    };

    return super.create(ctx);
  },

  async update(ctx) {
    return ctx.forbidden('Subscriptions cannot be modified through this API.');
  },

  async delete(ctx) {
    return ctx.forbidden('Subscriptions cannot be deleted through this API.');
  },
}));
