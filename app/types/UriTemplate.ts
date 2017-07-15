interface UriTemplateInstance {
  varNames: Array<string>;
  template: string;
  fill: (value: {[key: string]: any} | any) => string;
}

interface UriTemplate {
  new (template: string): UriTemplateInstance
}

declare var UriTemplate: UriTemplate;
