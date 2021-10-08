export interface Tag {
  key: string;
  name: string;
  isActive: boolean;
}

export interface State {
  isCollapsed: boolean;
  tagList: Tag[];
  selectedKeys: string[];
}
