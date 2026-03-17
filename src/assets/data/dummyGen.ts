type DummyData = {
  id: number;
  name: string;
  uuid: string;
  total: number;
  progress: number;
  createdAt: number;
  message: string;
  timeStamp: number[];
  finishAt: number;
  status: number; // 0 pending, 1 progress, 2 finish
};

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomString(length: number) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(randomInt(0, chars.length - 1));
  }
  return result;
}

function generateUUID() {
  return randomString(5);
}

function generateMessage() {
  return randomString(randomInt(10, 20));
}

function generateDummyData(count: number): DummyData[] {
  const data: DummyData[] = [];

  for (let i = 0; i < count; i++) {
    const createdAt = Date.now() - randomInt(0, 100000000);
    const status = randomInt(0, 2);
    const total = randomInt(10, 100);

    let progress = randomInt(0, total);
    let finishAt = 0;

    if (status === 0) {
      progress = 0;
    }

    if (status === 2) {
      progress = total;
      finishAt = createdAt + randomInt(1000, 100000);
    }

    const tsCount = randomInt(1, 10);
    const timeStamp: number[] = [createdAt];

    for (let j = 1; j < tsCount; j++) {
      const nextTime = timeStamp[j - 1] + randomInt(1000, 10000);
      timeStamp.push(nextTime);
    }

    if (status === 2) {
      if (timeStamp.length === 1) {
        timeStamp.push(finishAt);
      } else {
        timeStamp[timeStamp.length - 1] = finishAt;
      }
    }

    data.push({
      id: i + 1,
      name: `Task-${i + 1}`,
      uuid: generateUUID(),
      total,
      progress,
      createdAt,
      message: generateMessage(),
      timeStamp,
      finishAt,
      status,
    });
  }

  return data;
}

export { generateDummyData }