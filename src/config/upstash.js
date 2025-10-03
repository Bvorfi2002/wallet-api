import { Redis } from '@upstash/redis'
import dotenv from 'dotenv';
import {Ratelimit} from '@upstash/ratelimit' 
dotenv.config();

const ratelimit = new Ratelimit({
   redis: Redis.fromEnv(),
   limiter: Ratelimit.slidingWindow(100, '60 s') // 10 requests per minute
})

export default ratelimit;