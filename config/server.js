module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['CAJNi/NfdlaRKvCN6i9QOg==,ONOUDJvX38LtELfWSf+iNg==,RdmrroJzzAvJVr2ZfRNqyg==,TtzyDM5B2s2QYoe+MsCdQw==']),
  },
});
