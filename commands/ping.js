module.exports = {
  name: "ping",
  cooldown: 3,
  description: "Show bot ping",
  execute(message) {
    message.reply(`Avg Ping To Discord API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
