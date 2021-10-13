const resizeHandler = (chart: any) => {
  console.log("chart", chart);

  if (chart) {
    chart.resize();
  }
};

export const initResize = (chart: any) => {
  window.addEventListener("resize", () => {
    console.log("init");

    if (chart) {
      chart.resize();
    }
  });
};

export const cancelResize = (chart: any) => {
  window.removeEventListener("resize", () => {
    console.log("cancel");

    if (chart) {
      chart.resize();
    }
  });
};

// todo: 使用 hook 完善 resize 函数
