const amqp = require('amqplib');

async function connect() {
    try {
        console.log("Connecting to RabbitMQ...");
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        const queue = 'hello';

        await channel.assertQueue(queue, { durable: false });

        console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);

        channel.consume(queue, (msg) => {
            console.log(`[x] Received: ${msg.content.toString()}`);
        }, { noAck: true });

    } catch (error) {
        console.error("Error while receiving message!", error);
    }
}

connect();
