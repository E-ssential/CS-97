# CS97 Final Project - Essential

## Description:
Essential will serve as a basic delivery system that distributes essential goods during the
COVID-19 Crisis. As of right now, the app has three basic function
- The main webpage will feature a store with available items in which users can post/request goods from one another
- There will be a messaging system so the users can chat and coordinate with one another
- The app will attempt to find an optimized route and send the information to the person
delivering the item.

## TechStructure
For this project we will be using Kafka, Java, and React

The backend of the project will be written in Java. It will be reponsible for setting up the kafka broker and the path optimization. It will also be connected to a MySQL database so it can store a listing of the items along with the coordinates of the items. 

The front end will be written in React. It will connect to the kafka brokers and subscribe to one of the topic. It will then proceeds to consume the messages on the kafka server. The React will also be used to display the message and creating the interface for the shop.

# Setting up 
## KAFKA

### First download Kafka from  https://kafka.apache.org/quickstart and untar the package

```
> tar -xzf kafka_2.12-2.5.0.tgz
> cd kafka_2.12-2.5.0
```

### After you are inside, first start the Zookeeper server followed by the Kafka server.
* Make sure to start the Kafka server after as it depends on the Zookeeper server

```
>bin/zookeeper-server-start.sh config/zookeeper.properties
> bin/kafka-server-start.sh config/server.properties
```

### Create your first topic which we will connect to later.
```
> bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```
