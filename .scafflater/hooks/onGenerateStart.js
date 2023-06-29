const axios = require('axios');

async function getDomainInfo(context) {
  // Getting repo info
  context.properties = context.properties ?? {};

  if (context.parameters.domain && !context.parameters.domainInfo) {
    try {
      const result = await axios.get(
        `https://domain-config-api.hack.gb.tech/domains/${context.parameters.domain}`,
        {timeout: 5000}
      );

      context.parameters.domainInfo = result.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error(
          `Could not load domain info for ${context.parameters.domain}`
        );
      } else if (error.code === 'ECONNABORTED') {
        throw new Error(
          `Could not load domain info for ${context.parameters.domain}. Be sure to be connect on VPN before use this template.`
        );
      } else {
        throw error;
      }
    }
  }

  return Promise.resolve();
}

function formatEnableVpc(context) {
  if(context.parameters.enableVpc === undefined) {
    context.parameters.enableVpc = true;
  }
}

function formatParameters(context) {
  formatEnableVpc(context)
}

module.exports = async (context) => {
  await Promise.all([getDomainInfo(context)]);

  formatParameters(context)
};
