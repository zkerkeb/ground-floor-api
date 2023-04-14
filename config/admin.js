module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','Tw/6EJXKHzokXl+ad/J4zA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'FZo0+OYgpNUdtXvzaZilDg=='),
  },
});
