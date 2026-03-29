class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    const strKey = String(key);

    for (let i = 0; i < strKey.length; i++) {
      hashCode = primeNumber * hashCode + strKey.charCodeAt(i);
    }

    return Math.abs(hashCode);
  }

  set(key, value) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.size += 1;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize(this.capacity * 2);
    }
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];
    const startLength = bucket.length;

    this.buckets[index] = bucket.filter((pair) => pair.key !== key);

    if (this.buckets[index].length < startLength) {
      this.size -= 1;
      return true;
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  keys() {
    const result = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        result.push(pair.key);
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        result.push(pair.value);
      }
    }

    return result;
  }

  entries() {
    const result = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        result.push({ key: pair.key, value: pair.value });
      }
    }

    return result;
  }

  resize(newCapacity) {
    const oldEntries = this.entries();
    this.capacity = newCapacity;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    for (const pair of oldEntries) {
      this.set(pair.key, pair.value);
    }
  }
}

export default { HashMap };