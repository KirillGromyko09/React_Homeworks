export class StorageService {
  static storageTypes = Object.freeze({
    session: "session",
    local: "local",
  });

  #storage = null;
  #key = null;
  #currentId = null;

  constructor(storageType, key) {
    if (storageType === StorageService.storageTypes.local)
      this.#storage = localStorage;
    if (storageType === StorageService.storageTypes.session)
      this.#storage = sessionStorage;

    this.#key = key;

    this.getData().then((value) => {
      this.#currentId = value?.at(-1)?.id ? value.at(-1).id + 1 : 1;
    });
  }

  async getData() {
    const data = JSON.parse(this.#storage.getItem(this.#key));
    return data ? data : [];
  }

  async saveItem(item) {
    const data = await this.getData();
    data.push({
      ...item,
      id: this.#currentId,
    });

    this.#rewriteStorageData(data);
    this.#currentId += 1;

    const updatedData = await this.getData();
    return updatedData.at(-1);
  }

  async #rewriteStorageData(data) {
    try {
      this.#storage.setItem(this.#key, JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteItem(id) {
    const data = await this.getData();
    const itemIndex = data.findIndex((el) => el.id === id);
    const [removedElement] = data.splice(itemIndex, 1);
    await this.#rewriteStorageData(data);
    return removedElement;
  }
}

const storageService = new StorageService(
  StorageService.storageTypes.local,
  "formData",
);

export default storageService;
