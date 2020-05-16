package com.firstgroupapp.aktutorial;


import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.Serde;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;
import java.util.concurrent.ExecutionException;

public class producer1key {
    public static void main(String args[]) throws ExecutionException, InterruptedException{
        final Logger logger = LoggerFactory.getLogger(producer1key.class);

        //creating properties
        String bootstrapServer = "localhost:9092";
        Properties props = new Properties();
        props.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        props.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        props.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        //creating the producer
        KafkaProducer<String, String> first_producer = new KafkaProducer<String, String>(props);

        //specifying value and topic to subscribe to
        String topic = "test";
        for(int i = 0; i < 10; i++){
            String value = "Value: " + Integer.toString(i);
            String key = "id_" + Integer.toString(i);
            ProducerRecord<String,String> record = new ProducerRecord<String, String>(topic, key,value);
            logger.info("key: " + key);

            first_producer.send(record, new Callback() {
                @Override
                public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                    if (e==null){
                        logger.info("Successfully recieved the details as: \n" +
                                "Topic: " + recordMetadata.topic() + "\n" +
                                "Partition: " + recordMetadata.partition() + "\n" +
                                "Offset: " + recordMetadata.offset() + "\n" +
                                "Timestamp: " + recordMetadata.timestamp());
                    }
                    else{
                        logger.error("Can't produce: ", e);
                    }
                }
            }).get();


        }
        first_producer.flush();
        first_producer.close();




    }

}
