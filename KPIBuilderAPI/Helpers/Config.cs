using System.Drawing;
using KPIBuilderAPI.Models;

namespace KPIBuilderAPI.Helpers
{
    public class Config
    {
        public IConfiguration _configuration { get; set; }

        public Config(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public UserCredentials GetCredentials()
        {
            return new UserCredentials(_configuration.GetValue<string>("Username"), _configuration.GetValue<string>("Password"));
        }
    }
}
