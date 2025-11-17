// 통계 페이지의 모든 상태 + 로직을 한 곳에서 관리하는 함수들

import { ref } from "vue";

export interface DeviceStats {
  device: string;
  count: number;
}

export interface VisitLog {
  id: number;
  time: string;
  user: string;
  device: string;
}

export interface BrowserStat {
  browser: string; // Chrome, Safari, Firefox
  count: number;
  rate: number; // 퍼센트
}

export interface SourceStat {
  source: string; // Google, Direct, SNS, Email
  rate: number;
}

export function useStatistics() {
  const loading = ref(true);

  const weeklyLabels = ref<string[]>([]);
  const weeklyValues = ref<number[]>([]);

  const deviceStats = ref<DeviceStats[]>([]);
  const visitLogs = ref<VisitLog[]>([]);

  // KPI
  const totalVisitors = ref<number>(0);
  const uniqueVisitors = ref<number>(0);
  const returningUsers = ref<number>(0);

  const browserStats = ref<BrowserStat[]>([]);

  const sourceStats = ref<SourceStat[]>([]);

  const loadStatistics = async () => {
    loading.value = true;

    // 실제 API 자리 (지금은 Mock)
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Weekly Traffic Chart
    weeklyLabels.value = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    weeklyValues.value = [120, 180, 260, 220, 300, 280, 350];

    // Device Pie Chart
    deviceStats.value = [
      { device: "Mobile", count: 68 },
      { device: "Desktop", count: 24 },
      { device: "Tablet", count: 8 },
    ];

    // Visit Table
    visitLogs.value = [
      { id: 1, time: "10:20", user: "Guest", device: "Mobile" },
      { id: 2, time: "10:45", user: "User123", device: "Desktop" },
      { id: 3, time: "11:10", user: "Guest", device: "Mobile" },
    ];

    // KPI Section
    totalVisitors.value = 1200;
    uniqueVisitors.value = 840;
    returningUsers.value = 360;

    loading.value = false;

    // 브라우저 통계 데이터 타입
    browserStats.value = [
      { browser: "Chrome", count: 420, rate: 62 },
      { browser: "Safari", count: 150, rate: 22 },
      { browser: "Edge", count: 60, rate: 9 },
      { browser: "Firefox", count: 40, rate: 7 },
    ];

    sourceStats.value = [
      { source: "Google", rate: 45 },
      { source: "Direct", rate: 30 },
      { source: "SNS", rate: 15 },
      { source: "Email", rate: 10 },
    ];
  };

  return {
    loading,
    weeklyLabels,
    weeklyValues,
    deviceStats,
    visitLogs,
    totalVisitors,
    uniqueVisitors,
    returningUsers,
    browserStats,
    sourceStats,

    loadStatistics,
  };
}
