namespace KPIBuilderAPI.Models
{
    public class KPITrend
    {
        public enum KPITrendEnum
        {
            up,
            down,
            unchanged
        }

        public KPITrendEnum LTTP { get; set; }
        public KPITrendEnum CA { get; set; }
        public KPITrendEnum CRF { get; set; }
        public KPITrendEnum MTTR { get; set; }
        public KPITrendEnum Incidents { get; set; }
        public KPITrendEnum SecurityDefects { get; set; }
        public KPITrendEnum UnitTestCoverage { get; set; }
        public KPITrendEnum PipelineFitness { get; set; }
        public KPITrendEnum LowestFWVersion { get; set; }
        public KPITrendEnum EngineeringImprovement { get; set; }
    }
}
