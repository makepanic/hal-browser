class Configuration {
  entryPoint: string = '/';

  loadFromElement(element = document.querySelector('[data-hal]')){
    if (element) {
      if (element.getAttribute('data-hal-entrypoint')) {
        this.entryPoint = element.getAttribute('data-hal-entrypoint');
      }
    }

    return this;
  }
}

const configuration = new Configuration();
export {Configuration};
export default configuration;
