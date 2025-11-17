// 차트 데이터 생성 / gradient 생성 로직

export function useChart() {
  function createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(59,130,246,0.4)");
    gradient.addColorStop(1, "rgba(59,130,246,0)");
    return gradient;
  }

  return { createGradient };
}
