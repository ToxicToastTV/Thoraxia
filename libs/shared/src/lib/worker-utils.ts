export function workerUtils<T>(workerPath: string, workerData: string, callback: (data: T) => void): void {
  const worker = new Worker(workerPath);
  worker.postMessage(workerData);
  worker.addEventListener('message', (event: MessageEvent<T>) => {
    callback(event.data);
  });
}
