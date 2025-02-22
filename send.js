const amqp = require('amqplib');

async function sendMessage() {
    try {
        console.log("Connecting to RabbitMQ...");
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        const queue = 'hello';

        await channel.assertQueue(queue, { durable: false });

        const message = 'Hello, RabbitMQ!';
        channel.sendToQueue(queue, Buffer.from(message));

        console.log(`[x] Sent: '${message}'`);

        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    } catch (error) {
        console.error("Error while sending message!", error);
    }
}

sendMessage();
