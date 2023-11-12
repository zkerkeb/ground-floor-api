
module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendmail',
        providerOptions: {
            dkim: {
              privateKey:  require('fs').readFileSync('./dkim-private.pem', 'utf8'),
              keySelector: 'groundfloor2023', // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
            },
          },
        settings: {
          defaultFrom: 'no-reply@groundfloor-app.com',
          defaultReplyTo: 'no-reply@groundfloor-app.com'
        },
      },
    },
  });