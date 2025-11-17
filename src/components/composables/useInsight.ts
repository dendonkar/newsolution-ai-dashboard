// AI 인사이트 관련 로직

export function useInsight() {
  function pretty(text: string) {
    return text.trim();
  }

  return { pretty };
}
