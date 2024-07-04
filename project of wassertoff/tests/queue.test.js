const Queue = require('../utils/queue');

describe('Queue Management Tests', () => {
  // Test FIFO queue
  describe('FIFO Queue', () => {
    let fifoQueue;

    beforeEach(() => {
      fifoQueue = new Queue('FIFO');
    });

    it('should enqueue and dequeue elements in FIFO order', () => {
      fifoQueue.enqueue('Job 1');
      fifoQueue.enqueue('Job 2');
      expect(fifoQueue.dequeue()).toBe('Job 1');
      expect(fifoQueue.dequeue()).toBe('Job 2');
    });

    it('should return null when dequeue from an empty queue', () => {
      expect(fifoQueue.dequeue()).toBeNull();
    });
  });

  // Test Priority Queue (if implemented)
  describe('Priority Queue', () => {
    let priorityQueue;

    beforeEach(() => {
      priorityQueue = new Queue('Priority');
    });

    it('should dequeue higher priority elements first', () => {
      priorityQueue.enqueue({ job: 'Job 1', priority: 1 });
      priorityQueue.enqueue({ job: 'Job 2', priority: 2 });
      priorityQueue.enqueue({ job: 'Job 3', priority: 1 });
      expect(priorityQueue.dequeue().job).toBe('Job 2');
      expect(priorityQueue.dequeue().job).toBe('Job 1');
      expect(priorityQueue.dequeue().job).toBe('Job 3');
    });
  });

  // Test Round-Robin Queue (if implemented)
  describe('Round-Robin Queue', () => {
    let roundRobinQueue;

    beforeEach(() => {
      roundRobinQueue = new Queue('RoundRobin');
    });

    it('should cycle through elements in round-robin order', () => {
      roundRobinQueue.enqueue('Job 1');
      roundRobinQueue.enqueue('Job 2');
      roundRobinQueue.enqueue('Job 3');
      expect(roundRobinQueue.dequeue()).toBe('Job 1');
      expect(roundRobinQueue.dequeue()).toBe('Job 2');
      expect(roundRobinQueue.dequeue()).toBe('Job 3');
      expect(roundRobinQueue.dequeue()).toBe('Job 1'); // Should cycle back to the beginning
    });
  });
});

// Clean up after all tests (if needed)
afterAll(() => {
  // Perform cleanup tasks if necessary
});
