import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;


async function setUser(userId: string) {
  await Storage.set({
    key: 'user',
    value: JSON.stringify({
      id: userId,
    }),
  });
}


function setUserStorage(id: string) {
    setUser(id).then(resolve => {
        return true;
    });
}

async function getUserStorage(): Promise<any> {
    const item = await Storage.get({ key: 'user' });
    return item.value;
  }

export {
    setUserStorage,
    getUserStorage
};
