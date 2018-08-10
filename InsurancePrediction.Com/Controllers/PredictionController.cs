using InsurancePrediction.Com.Helpers;
using InsurancePrediction.Com.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
 

namespace InsurancePrediction.Com.Controllers
{
    [Authorize]  
    public class PredictionController : ApiController
    {
        // GET api/values
        [AllowAnonymous]
        public async Task<string> Get()
        {
            return "value";
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [AllowAnonymous]
        public async Task<string> Post(InsuranceModel model)
        {
            var result = await CallRequestResponseService.InvokeRequestResponseService(model);
            return result.ToString();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

       
    }
}
