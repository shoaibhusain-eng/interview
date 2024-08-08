// what is node js
// Node.js is a runtime environment that allows you to run JavaScript code outside of a 
// web browser. It's built on the V8 JavaScript engine, which is the same engine that 
// powers Google Chrome, and it allows developers to use JavaScript for server-side 
// scripting. This means you can build scalable, high-performance applications using 
// JavaScript on the server.
// This makes JavaScript a versatile language for full-stack development.
// you can develop application in single programming lanugae


// 1) Authentication and authorization are two fundamental concepts in computer security, 
// often used together but serving distinct purposes. 
// Here's a breakdown of the differences between the two:

// Authentication
// Definition: Authentication is the process of verifying the identity of a user or system. 
// It ensures that the entity is who it claims to be.

// Examples:
// Logging into a website with a username and password.
// Using a fingerprint scanner to unlock a smartphone.
// Entering a one-time password (OTP) sent via SMS or email.


// Authorization
// Definition: Authorization is the process of determining whether an 
// authenticated user has the permission to access specific resources or 
// perform certain actions.

// Examples:
// A user with an "admin" role accessing the admin panel of a website.
// A user with a "viewer" role only being able to view documents but not edit them.
// A system denying access to a resource because the user does not have the necessary permissions.


// what is thread pool
// A thread pool is a group of worker threads separate from the main event loop thread Node. js 
// uses to execute JavaScript code and handle requests. 
// The underlying operating system manages these worker threads


/////////////////////////////////////////////////////////////////////////////////

// In Node. js, the event-driven model allows developers to write non-blocking, 
// asynchronous code that responds to events as they occur, without waiting 
// for blocking operations to complete

/////////////////////////////////////////////////////////////////////////////////


// diff between put and patch
// The main way you'd update a remote resource is via POST. But Patch 
// and Put are usefull if you've want to catch for error returns. For example, 
// if you have lots of small updates your trying to make to a single remote file, 
// then Patch should be considered as your requests can be small AND Patch will 
// throw an error if that file is not found, which can be really important. 
// PUT on the other hand would need larger transmission sets, and will ensure 
// that always only a single file results in the request. So if you have a file 
// thats called data.json at the end of the transmission, PUT will always make 
// sure there is a single file of that name at the end and anything looking to 
// process that file afterward will always be able to find it.

// In short
// Choosing between PATCH and PUT depends on what we want to achieve 
// with our update operation. If we want to replace the whole resource, we should use PUT. 
// If we want to modify only some aspects of the resource, we should use PATCH

//////////////////////////////////////////////////////////////////////////////////////////

// Improving the performance of a Node.js application involves several strategies that address both code optimization and architectural considerations. Here are some key approaches to enhance the performance of your Node.js application:

// 1. Use Asynchronous Operations

// Node.js is built around asynchronous, non-blocking operations. Leverage this by using asynchronous functions (`async/await`, Promises) instead of synchronous methods to avoid blocking the event loop and improve concurrency.

// 2. Optimize Modules and Dependencies

// - Minimize Dependencies: Each dependency adds overhead. Evaluate and remove unnecessary dependencies.
// - Update Dependencies: Keep dependencies updated to benefit from performance improvements and security fixes.

// 3. Implement Caching

// - In-Memory Caching: Use in-memory caching (e.g., Redis) to store frequently accessed data. This reduces the need to fetch data from databases or external services repeatedly.
// - HTTP Caching: Implement proper HTTP caching headers (e.g., `Cache-Control`, `ETag`) to cache responses in client browsers or intermediate caches.

// 4. Database Optimization

// - Use Indexes: Ensure database queries use appropriate indexes to improve query performance.
// - Batch Operations: Batch database operations to reduce the number of round trips to the database.
// - Connection Pooling: Use connection pooling to reuse database connections and avoid the overhead of creating new connections for each request.

// 5. Optimize Code

// - Profile and Benchmark: Identify performance bottlenecks using profiling tools (e.g., Node.js built-in `perf_hooks`, `clinic.js`, `heapdump`) and optimize critical sections of code.
// - Optimize Loops and Iterations: Use efficient algorithms and minimize nested loops to reduce computational overhead.

// 6. Scale Horizontally

// - Load Balancing: Deploy multiple instances of your Node.js application behind a load balancer to distribute traffic and improve reliability and scalability.
// - Microservices Architecture: Decompose your application into smaller, manageable services that can be scaled independently.

// 7. Use Streaming

// - Stream Data: Where possible, use streams (`Readable`, `Writable`, `Duplex`) to process data incrementally. This reduces memory consumption and improves performance for large data sets.

// 8. Optimize Network Operations

// - Use CDN: Serve static assets (CSS, JS, images) via a Content Delivery Network (CDN) to reduce latency and improve load times.
// - Compression: Enable gzip compression for HTTP responses to reduce data transfer size over the network.

// 9. Monitoring and Logging

// - Performance Monitoring: Use monitoring tools (e.g., New Relic, Datadog) to track application performance metrics (CPU usage, memory usage, response times).
// - Logging: Implement structured logging to capture detailed information about application behavior and performance.

// 10. Use Clustering and Worker Threads

// - Clustering: Utilize Node.js `cluster` module to create multiple instances (workers) of your application to take advantage of multi-core CPUs.
// - Worker Threads: For CPU-intensive tasks, consider using Node.js worker threads to offload work to separate threads.

// 11. Use Efficient Data Structures

// - Choose Correct Data Structures: Select appropriate data structures (e.g., Maps, Sets, Arrays) based on the operations you need to perform to ensure efficient data manipulation.

// 12. Deploy Optimized Production Builds

// - Minify and Bundle: Minimize and bundle JavaScript and CSS files for production to reduce load times.
// - Environment Configuration: Use environment-specific configurations (e.g., production vs development) to optimize settings for performance in production.

// By applying these strategies, you can effectively optimize the performance of your Node.js application, ensuring it scales well and delivers responsive experiences to users.