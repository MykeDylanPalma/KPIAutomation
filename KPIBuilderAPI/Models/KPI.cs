using static System.Net.Mime.MediaTypeNames;

namespace KPIBuilderAPI.Models
{
    public class KPI
    {
        public string LTTP { get; set; }
        public string CA { get; set; }
        public string CRF { get; set; }
        public string MTTR { get; set; }
        public string Incidents { get; set; }
        public string SecurityDefects { get; set; }
        public string UnitTestCoverage { get; set; }
        public string PipelineFitness { get; set; }
        public string LowestFWVersion { get; set; }
        public string EngineeringImprovement { get; set; }
        public DateTime KPIDate { get; set; }
    }
}