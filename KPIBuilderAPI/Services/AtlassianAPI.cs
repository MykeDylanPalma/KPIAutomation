using System.Net.Http.Headers;
using System.Text;
using System;
using Newtonsoft.Json.Linq;
using KPIBuilderAPI.Models;
using Atlassian.Jira;
using RestSharp;

namespace KPIBuilderAPI.Services
{
    public class AtlassianAPI
    {
        private UserCredentials User { get; set; }

        public AtlassianAPI(UserCredentials user)
        {
            User = user;
        }

        public async Task<object> GetData()
        {
            try
            {
                //var jira = Jira.CreateRestClient(, User.Username, User.Password);

                var jira = Jira.CreateOAuthRestClient("https://newdaycards.atlassian.net/", "", "","","",Atlassian.Jira.OAuth.JiraOAuthSignatureMethod.HmacSha256);

                var boards = await jira.RestClient.ExecuteRequestAsync<JObject>(Method.GET, "/rest/agile/latest/board");

                var boardData = boards["values"].FirstOrDefault(b => b.Value<string>("name") == "Payback");

                var boardId = boardData?.Value<int>("id");
            }
            catch (Exception ex)
            {
                var x = ex;
            }

            //var chartData = await jira.Agile.GetControlChartAsync(boardId);

            //var leadTime = chartData.Value<JObject>("leadTime");
            //var averageTime = leadTime.Value<double>("movingAverage");

            return null;
        }
    }
}

// 