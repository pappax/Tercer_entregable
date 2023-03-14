const fs = require('fs/promises');

class ProductManager {
  constructor(file) {
    this.file = file;
  }

  //Leer archivo JOSN
  
  async readProducts() {
    const data = await fs.readFile(this.file);
    return JSON.parse(data);
  }
}

module.exports = ProductManager;


