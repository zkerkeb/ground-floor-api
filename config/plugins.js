
module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendmail',
        providerOptions: {
            dkim: {
              privateKey: "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAM/Ic22ocUC1YQVjb+H2kNszo+mCxMMDUYvmdABucc9iDYaqMKnBX8EBX6dH+hpxRjKSY6MYNEAlCT1eftUpdAzM4pTAv+AE7nxnPPjyDi6uuJiB1zVPROmS8zHsbQ8a24FSJHyz2ExOPNVQEX8qYIBbqkWbXLDoxMCIvyyHH5GzAgMBAAECgYAZ2H1DLqinu+gNm4jXOqxaF9pTuYhwGYGTPV9Ajnxpp3C3R4Q2GW+nulwDmthpYZ2xvLPYHbKiJ/k2QQLV0Qo2M8+2SP5zj+TslxrfuQFjT0j/imHQzPDTSSordRmuOm297L8UGkHGAm6JGjlpwEU2WKchyESvozqX8zw8yHM2AQJBAPs+mqtM8s+z51dpVFNWdqMpbcsIjcLCwbIu3MxtARbtVt6ieae/aQv0el7dLBue5G1ekb6hRCJvb+jtaiEMalMCQQDTt0Fo9WvgzShnxdzF38eZnkb/HjGC6SbPgx6huRqy6SFUMtlNO0wjvdF/UdgnqQhGzoPlkrqoXgIO+zYRKQ8hAkA5WtxSOLnBgq9QPCJc+AMTUlTXIbfC+1TeiWYsYMH76uiG4I5nJgIkEYaR+2mjUI2TDiC1ZPk55zij8vbkXoIzAkEAnbLy1et434nxftqzB/EYDCUJXR5wYsKoVgmk13G5oWplmQIHOq/glv7c/alJCMGvmI5bULVqs97SSbZ1H3MmAQJBAPNcBqYg8r1JEBrlWWEBKEVcGfo1aOT61YndNOq6SPAiJkyOIxC4JVmCBNJTkLOVTun19mW3bJQU2RlQI988YTo=",
              keySelector: 'groundfloor2023._domainkey', // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
            },
          },
        settings: {
          defaultFrom: 'no-reply@groundfloor-app.com',
          defaultReplyTo: 'no-reply@groundfloor-app.com'
        },
      },
    },
  });