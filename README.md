# Redis Express Server for Demonstrating Redis Usage with Docker 🚀

## Description

The Redis Express Server is a project designed to showcase the diverse applications of Redis, a popular in-memory data store, when deployed within a Docker container. This server exposes a set of APIs to interact with Redis, illustrating how various data structures such as Strings, Sets, Stacks, and Hashes can be utilized effectively.

## Features

1. **String Operations 📜**: This Redis server provides APIs for adding and retrieving string values. You can store and fetch single values efficiently, making it suitable for caching and simple data storage needs.

2. **Set Operations 🧩**: Demonstrates the usage of Redis sets by allowing you to add, remove, and retrieve members from sets. It's a great way to implement unique item collections.

3. **Stack (List) Operations 📦**: Explore how Redis can function as a stack or list by pushing and popping elements. This is useful for tasks such as job queues or managing recent activities.

4. **Hash Operations 🔑**: The server exposes APIs for adding, updating, and retrieving data in Redis hashes. This is ideal for storing and accessing structured data efficiently.

By using this Redis Express Server, developers can grasp the versatility of Redis and learn how to harness its powerful features for various data storage and retrieval needs. Whether you are building a cache, managing unique values, implementing a stack, or working with structured data, Redis within a Docker container simplifies these operations and ensures data persistence. 🛡️

# Setting Strings

- SetOptions = SetTTL & SetGuards & SetCommonOptions

```
SetTTL = MaximumOneOf<{
// (Expires in seconds)
EX: number;
// EX (Expires in seconds)
PX: number;
// Expires at a specific UNIX timestamp in seconds
EXAT: number;
// Expires at a specific UNIX timestamp in milliseconds
PXAT: number;
KEEPTTL: true, // Mantener el tiempo de vida actual
}
```

```
client.set('miClave', 'miValor', {
EX: 60 \* 15 // Expira en 15 minutos
});
```

```
client.set('miClave', 'miValor', {
PX: 1000 _ 60 _ 15 // Expira en 15 minutos en milisegundos
});
```

- EXAT (Expires at a specific UNIX timestamp in seconds): Con este campo, puedes especificar una hora de vencimiento exacta en forma de marca de tiempo UNIX en segundos. Por ejemplo, si deseas que la clave expire a una hora específica:

```
const expirationTimestamp = Math.floor(Date.now() / 1000) + 60 \* 15; // Expire en 15 minutos
client.set('miClave', 'miValor', {
EXAT: expirationTimestamp
});
```

- PXAT (Expires at a specific UNIX timestamp in milliseconds): Similar al caso anterior, pero en milisegundos:

```
const expirationTimestamp = Date.now() + 1000 _ 60 _ 15; // Expira en 15 minutos en milisegundos

client.set('miClave', 'miValor', {
PXAT: expirationTimestamp
});
```

- KEEPTTL: Este campo se utiliza para mantener el tiempo de vida actual de una clave, en lugar de establecer uno nuevo.

```
client.set('miClave', 'miNuevoValor', {
KEEPTTL: true
});

type SetGuards = MaximumOneOf<{
NX: true, // Establecer la clave solo si no existe
XX: true, // Establecer la clave solo si existe
}>;
```
