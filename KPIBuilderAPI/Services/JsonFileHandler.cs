using KPIBuilderAPI.Models;
using Newtonsoft.Json;

namespace KPIBuilderAPI.Services
{
    public class JsonFileHandler
    {
        public bool SaveKpiData(KPI kpi)
        {
            try
            {
                string jsonString = System.Text.Json.JsonSerializer.Serialize(kpi);

                File.WriteAllText($"{DateTime.Now.ToString("dd-mm-yyyy")}", jsonString);

                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public KPI ReadLastKpiData()
        {
            try
            {
                using (StreamReader r = new StreamReader($"{DateTime.Now.ToString("dd-mm-yyyy")}"))
                {
                    string json = r.ReadToEnd();
                    KPI? kpi = JsonConvert.DeserializeObject<KPI>(json);
                    return kpi == null ? new KPI() : kpi;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
