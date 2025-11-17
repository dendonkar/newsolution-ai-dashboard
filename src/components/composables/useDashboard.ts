// 비동기 로직, KPI/차트/인사이트 계산

import { ref } from "vue";
import type { Component } from "vue";

import {
  ChartBarIcon,
  UserPlusIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/vue/24/outline";

export function useDashboard() {
  const loading = ref(true);

  /* KPI 데이터 */
  const kpiData = ref([
    { label: "Total Users", value: 12345, change: "+12%" },
    { label: "Active Sessions", value: 842, change: "-3%" },
    { label: "Bounce Rate", value: "32%", change: "-1%" },
    { label: "Revenue", value: "$12,540", change: "+8%" },
  ]);

  /* Chart 데이터 */
  const chartLabels = ref(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
  const chartValues = ref([120, 180, 260, 220, 300, 280, 350]);

  /* Insight 데이터 */
  const insightList = ref<
    { icon: Component; title: string; description: string }[]
  >([
    {
      icon: ChartBarIcon,
      title: "트래픽 패턴 분석",
      description:
        "오늘 트래픽은 오전 10~11시에 집중되었습니다. 점심시간 이후 다시 상승합니다.",
    },
    {
      icon: UserPlusIcon,
      title: "신규 방문자 증가",
      description:
        "신규 방문자 비율이 지난주 대비 15% 상승했습니다. 마케팅 효과가 반영되었습니다.",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "모바일 트래픽 급증",
      description: "모바일 방문자가 전체의 68%를 차지하며 계속 증가 중입니다.",
    },
  ]);

  const loadDashboard = () => {
    loading.value = true;

    setTimeout(() => {
      loading.value = false;
    }, 1000);
  };

  return {
    loading,
    kpiData,
    chartLabels,
    chartValues,
    insightList,
    loadDashboard,
  };
}
