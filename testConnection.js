const amqp = require('amqp-connection-manager');

async function testConnection() {
    const connection = amqp.connect(['amqp://localhost:5672']);

    connection.on('connect', () => {
        console.log('Successfully connected to RabbitMQ!');
        process.exit(0);
    });

    connection.on('disconnect', (params) => {
        console.error('Disconnected from RabbitMQ!', params.err);
        process.exit(1);
    });
}

testConnection();
