// KPI 계산만 담당

export function useKpi() {
  function formatNumber(num: number) {
    return num.toLocaleString();
  }

  function calculateDiff(today: number, yesterday: number) {
    const diff = today - yesterday;
    return diff >= 0 ? `+${diff}` : `${diff}`;
  }

  return { formatNumber, calculateDiff };
}
