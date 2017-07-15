export interface Resource {
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  dataType?: string;
  contentType?: string;
  data?: any
}
