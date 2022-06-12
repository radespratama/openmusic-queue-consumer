require("dotenv").config();
const amqp = require("amqplib");
const PlaylistSongsService = require("./services/PlaylistSongsService");
const MailSender = require("./MailSender");
const Listener = require("./listener");

const initConsumer = async () => {
  const playlistSongsService = new PlaylistSongsService();
  const mailSender = new MailSender();
  const listener = new Listener(playlistSongsService, mailSender);

  const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
  const channel = await connection.createChannel();

  await channel.assertQueue("export:playlists", {
    durable: true,
  });

  channel.consume("export:playlists", listener.listen, { noAck: true });
};

initConsumer();
