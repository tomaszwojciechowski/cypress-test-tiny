/// <reference types="cypress" />
const {Kafka} = require('kafkajs');

describe('describe', () => {
  it('doesn not work in Cypess, but works in Mocha itself', async function () {

    const kafka = new Kafka({
      brokers: ['broker1:9092'],
    });

    const producer = kafka.producer();

    await producer.connect();

    await producer.send({
      topic: 'topic1',
      messages: [
        {
          key: '1',
          value: 'a'
        },
      ],
    });

    await producer.disconnect()
  })
})