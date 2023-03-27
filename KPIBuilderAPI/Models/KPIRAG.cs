namespace KPIBuilderAPI.Models
{
    public class KPIRAG
    {
        public enum KPIRAGEnum
        {
            green,
            yellow,
            red,
        }
        public KPIRAGEnum LTTP { get; set; }
        public KPIRAGEnum CA { get; set; }
        public KPIRAGEnum CRF { get; set; }
        public KPIRAGEnum MTTR { get; set; }
        public KPIRAGEnum Incidents { get; set; }
        public KPIRAGEnum SecurityDefects { get; set; }
        public KPIRAGEnum UnitTestCoverage { get; set; }
        public KPIRAGEnum PipelineFitness { get; set; }
        public KPIRAGEnum LowestFWVersion { get; set; }
        public KPIRAGEnum EngineeringImprovement { get; set; }

    }
}
