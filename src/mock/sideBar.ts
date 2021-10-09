import {
  LayoutOutlined,
  FileOutlined,
  TableOutlined,
  MenuOutlined,
  LineChartOutlined,
  SendOutlined,
} from "@ant-design/icons-vue";

export const list = [
  {
    key: "1",
    name: "Dashboard",
    icon: LayoutOutlined,
    isActive: true,
  },
  {
    key: "2",
    name: "Document",
    icon: FileOutlined,
    isActive: false,
  },
  {
    key: "3",
    name: "Table",
    icon: TableOutlined,
    isActive: false,
  },
  {
    key: "4",
    name: "Tab",
    icon: MenuOutlined,
    isActive: false,
  },
  {
    key: "5",
    name: "Chart",
    icon: LineChartOutlined,
    isActive: false,
  },
  {
    key: "6",
    name: "Guide",
    icon: SendOutlined,
    isActive: false,
  },
];
