namespace KPIBuilderAPI.Models
{
    public class KPIOutput
    {
        public KPI Current { get; set; }
        public KPI Previous { get; set; }
        public KPITrend Trend { get; set; }
        public KPIRAG RAG { get; set; }
    }
}
