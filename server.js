// Simple n8n starter for Render
console.log('🔧 Starting n8n...');

try {
  // Import and start n8n
  const n8n = require('n8n');
  
  const config = {
    webhookUrl: process.env.WEBHOOK_URL,
    port: process.env.PORT || 5678,
  };
  
  console.log('📝 Configuration:', config);
  
  // Start n8n
  n8n.run(config);
  
} catch (error) {
  console.error('💥 Failed to start n8n:', error);
  process.exit(1);
}
