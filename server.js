const n8n = require('n8n');

// Configuration for Render
const config = {
  webhookUrl: process.env.WEBHOOK_URL || `https://${process.env.RENDER_SERVICE_NAME}.onrender.com`,
  port: process.env.PORT || 5678,
};

console.log('🚀 Starting n8n on Render...');
console.log('📝 Webhook URL:', config.webhookUrl);

// Start n8n
n8n.run(config).catch(error => {
  console.error('❌ Error starting n8n:', error);
  process.exit(1);
});
