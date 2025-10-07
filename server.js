const n8n = require('n8n');

console.log('🚀 Starting n8n on Render...');

// Start n8n with basic configuration
n8n({
  webhookUrl: process.env.WEBHOOK_URL,
  port: process.env.PORT || 5678,
}).catch(error => {
  console.error('❌ Error starting n8n:', error);
  process.exit(1);
});
