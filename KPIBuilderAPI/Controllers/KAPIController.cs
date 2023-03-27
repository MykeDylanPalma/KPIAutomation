using KPIBuilderAPI.Helpers;
using KPIBuilderAPI.Models;
using KPIBuilderAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using static KPIBuilderAPI.Models.KPIRAG;
using static KPIBuilderAPI.Models.KPITrend;

namespace KPIBuilderAPI.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class KAPIController : ControllerBase
    {
        private readonly Config _configuration;

        public KAPIController( Config configuration)
        {
            _configuration = configuration;
        }

        [HttpGet(Name = "GetKPI")]
        public async Task<IEnumerable<KPIOutput>> Get()
        {

            AtlassianAPI atlassianAPI = new AtlassianAPI(_configuration.GetCredentials());
            var x = await atlassianAPI.GetData();
            return null;
        }

        [HttpGet(Name = "GetKPISample")]
        public KPIOutput GetSample()
        {
            return new KPIOutput
            {
                Current = new KPI {
                    LTTP = "3h 57m",
                    CA = "99.873%",
                    CRF = "0 issues / 32 issues",
                    MTTR = "0",
                    Incidents = "0",
                    SecurityDefects = "0",
                    UnitTestCoverage = "78%",
                    PipelineFitness = "100%",
                    LowestFWVersion = ".NET 6",
                    EngineeringImprovement = "22%",
                    KPIDate = DateTime.Now
                },
                Previous = new KPI {
                    LTTP = "13h 59m",
                    CA = "99.877%",
                    CRF = "0 issues/29 issues",
                    MTTR = "0",
                    Incidents = "0",
                    SecurityDefects = "0",
                    UnitTestCoverage = "79%",
                    PipelineFitness = "100%",
                    LowestFWVersion = ".NET 6",
                    EngineeringImprovement = "36%",
                    KPIDate = DateTime.Now.AddDays(-7)
                },
                RAG = new KPIRAG {
                    LTTP = KPIRAGEnum.yellow,
                    CA = KPIRAGEnum.red,
                    CRF = KPIRAGEnum.green,
                    MTTR = KPIRAGEnum.green,
                    Incidents = KPIRAGEnum.green,
                    SecurityDefects = KPIRAGEnum.green,
                    UnitTestCoverage = KPIRAGEnum.yellow,
                    PipelineFitness = KPIRAGEnum.green,
                    LowestFWVersion = KPIRAGEnum.yellow,
                    EngineeringImprovement = KPIRAGEnum.yellow
                },
                Trend = new KPITrend {
                    LTTP = KPITrendEnum.up,
                    CA = KPITrendEnum.down,
                    CRF = KPITrendEnum.unchanged,
                    MTTR = KPITrendEnum.unchanged,
                    Incidents = KPITrendEnum.unchanged,
                    SecurityDefects = KPITrendEnum.unchanged,
                    UnitTestCoverage = KPITrendEnum.down,
                    PipelineFitness = KPITrendEnum.unchanged,
                    LowestFWVersion = KPITrendEnum.unchanged,
                    EngineeringImprovement = KPITrendEnum.down
                }
            };
        }
    }
}