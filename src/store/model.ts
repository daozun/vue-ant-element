export interface Tag {
  key: string;
  name: string;
  isActive: boolean;
}

export interface State {
  isCollapsed: boolean;
  currentRoute: string;
  tagList: Tag[];
  selectedKeys: string[];
}
