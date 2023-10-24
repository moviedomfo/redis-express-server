import { createClient } from "redis";

const  redisClient = createClient({
    url: "redis://localhost:6379",
    password: "pletorico28",
  });

  (async () => {

    await redisClient.connect();
  })();

  export default   redisClient;
  
