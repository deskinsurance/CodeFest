using InsurancePrediction.Com.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePrediction.Com.Helpers
{
    public class CallRequestResponseService
    {
        public static async Task<string> InvokeRequestResponseService(InsuranceModel model)
        {
            using (var client = new HttpClient())
            {
                var scoreRequest = new
                {
                    Inputs = new Dictionary<string, List<Dictionary<string, string>>>() {
                        {
                            "input1",
                            new List<Dictionary<string, string>>(){new Dictionary<string, string>(){
                                            {
                                                "age", model.age.ToString()
                                            },
                                            {
                                                "sex", model.sex.ToString()
                                            },
                                            {
                                                "bmi", model.bmi.ToString()
                                            },
                                            {
                                                "children", model.children.ToString()
                                            },
                                            {
                                                "smoker", model.smoker.ToString()
                                            },
                                            {
                                                "region", model.region.ToString()
                                            },
                                            {
                                                "charges", model.charges.ToString()
                                            },
                                }
                            }
                        },
                    },
                    GlobalParameters = new Dictionary<string, string>()
                    {
                    }
                };

                const string apiKey = "WN7bsC1N3+/HjqSgVoviUIzAf+zo7HcTTnw37QblIDl321BXuElhK1Cu6VKtghvOw3dQLiybJZqVyx62obBNLw=="; // Replace this with the API key for the web service
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
                client.BaseAddress = new Uri("https://ussouthcentral.services.azureml.net/workspaces/7e089a9ec28140138cdaf6f17fe1b0c8/services/918e313f56554573a27952c971b433b6/execute?api-version=2.0&format=swagger");

                string result = string.Empty;
                try
                {
                    HttpResponseMessage response = await client.PostAsJsonAsync("", scoreRequest);

                    if (response.IsSuccessStatusCode)
                    {
                        result = await response.Content.ReadAsStringAsync();
                                            
                    }
                    else
                    {
                        Console.WriteLine(string.Format("The request failed with status code: {0}", response.StatusCode));

                        Console.WriteLine(response.Headers.ToString());

                        result = await response.Content.ReadAsStringAsync();                                          
                    }
                }
                catch (Exception e)
                {
                    var ex = e;
                }

                return result;
            }
        }
    }
}