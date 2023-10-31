<h1 align="center">Redis Express Server for Demonstrating Redis Usage with Docker 🚀 </h1>

## Description

The Redis Express Server is a project designed to showcase the diverse applications of Redis, a popular in-memory data store, when deployed within a Docker container. This server exposes a set of APIs to interact with Redis, illustrating how various data structures such as Strings, Sets, Stacks, and Hashes can be utilized effectively.

<h2 align="center">Features</h2>

1. **String Operations 📜**: This Redis server provides APIs for adding and retrieving string values. You can store and fetch single values efficiently, making it suitable for caching and simple data storage needs.

2. **Set Operations 🧩**: Demonstrates the usage of Redis sets by allowing you to add, remove, and retrieve members from sets. It's a great way to implement unique item collections.

3. **Stack (List) Operations 📦**: Explore how Redis can function as a stack or list by pushing and popping elements. This is useful for tasks such as job queues or managing recent activities.

4. **Hash Operations 🔑**: The server exposes APIs for adding, updating, and retrieving data in Redis hashes. This is ideal for storing and accessing structured data efficiently.

By using this Redis Express Server, developers can grasp the versatility of Redis and learn how to harness its powerful features for various data storage and retrieval needs. Whether you are building a cache, managing unique values, implementing a stack, or working with structured data, Redis within a Docker container simplifies these operations and ensures data persistence. 🛡️

## API : In this API web have the following controllers

## Inside the repo we have some concepts to apply

- SetOptions = SetTTL & SetGuards & SetCommonOptions

```
SetTTL = MaximumOneOf<{
    EX: number;
    PX: number;
    EXAT: number;
    PXAT: number;
    KEEPTTL: true, // Mantener el tiempo de vida actual
}
```

## Samples

```
client.set('myKey', 'muValue', {
EX: 60 \* 15 // Expira en 15 minutos
});
```

```
client.set('myKey', 'muValue', {
PX: 1000 _ 60 _ 15 // Expira en 15 minutos en milisegundos
});
```

- EXAT (Expires at a specific UNIX timestamp in seconds): Con este campo, puedes especificar una hora de vencimiento exacta en forma de marca de tiempo UNIX en segundos. Por ejemplo, si deseas que la clave expire a una hora específica:

```
const expirationTimestamp = Math.floor(Date.now() / 1000) + 60 \* 15; // Expire en 15 minutos
client.set('myKey', 'muValue', {
EXAT: expirationTimestamp
});
```

- PXAT (Expires at a specific UNIX timestamp in milliseconds): Similar al caso anterior, pero en milisegundos:

```
const expirationTimestamp = Date.now() + 1000 _ 60 _ 15; // Expira en 15 minutos en milisegundos

client.set('myKey', 'muValue', {
PXAT: expirationTimestamp
});
```

- KEEPTTL: Este campo se utiliza para mantener el tiempo de vida actual de una clave, en lugar de establecer uno nuevo.

```
client.set('myKey', 'miNuevoValor', {
KEEPTTL: true
});

type SetGuards = MaximumOneOf<{
    NX: true, // Establecer la clave solo si no existe
    XX: true, // Establecer la clave solo si existe
}>;
```

### Strings

<h2 align=" /api/string/set </h2>

```
curl --location 'http://localhost:3016/api/string/set' \
--header 'Content-Type: application/json' \
--data '{
"Key":"1000",
"Value":""

}'
```

<h3 align=" /api/string/get </h3>

```
curl --location 'http://localhost:3016/api/string/1000'

```

<h3 align=" /api/string/del </h3>

```
curl --location --request DELETE 'http://localhost:3016/api/string/1000'
```

### Hashes

<h3 align=" /api/hashes/set </h3>

- Simple value

```
  curl --location 'http://localhost:3016/api/hashes/set' \
  --header 'Content-Type: application/json' \
  --data '{
    "Key":"1000",
    "Value":"El resplandor"

}'
```

- Object

```
curl --location 'http://localhost:3016/api/hashes/setObj' \
--header 'Content-Type: application/json' \
--data '{
    "Key":"3001",

    "Value" : {
    "name": "Marcelo",
    "surname": "Oviedo",
    "company": "Konecta",
    "age": 29
    }
}'
```

<h3 align=" /api/hashes/getObj </h3>

- to get entery object

```
curl --location 'http://localhost:3016/api/hashes/getObj?key=3001'
```

<h3 align=" /api/hashes/get </h3>

- to get spesific field

```
curl --location 'http://localhost:3016/api/hashes/get?key=2000&field=runners'
```

### list/

<h3 align=" /api/hashes/push </h3>

- Push : adds a new element to the head of a lis

```
curl --location 'http://localhost:3016/api/list/push' \
--header 'Content-Type: application/json' \
--data '{
"Group":"runners",
"Key":"10k",
"Data":"102"
}'
```

<h3 align=" /api/hashes/rpop </h3>
- rPop : Treat a list like a queue FIFO

<h3 align=" /api/hashes/lpop </h3>
- rPop : Treat a list like a stack (LIFO) lastIn- Last out:

```

```
