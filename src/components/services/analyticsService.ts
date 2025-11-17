// API 호출 담당(fetch, axios 등)

export async function fetchKpi() {
  await wait(500); // Skeleton 테스트용
  return {
    todayVisitors: 1420,
    pv: 3810,
    bounceRate: 42,
    avgSession: 128,
  };
}

export async function fetchVisitorsTrend() {
  await wait(600);
  return {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [300, 450, 600, 500, 800, 900, 700],
  };
}

export async function fetchInsight() {
  await wait(450);
  return "오늘 트래픽은 오전 10~11시에 집중되었으며 신규 방문자 비율이 높습니다.";
}

/* 내부 wait 유틸 */
function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
