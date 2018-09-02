using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthentication.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet]
        [Route("getdata")]
        public string getdata() {
            return "Gihan Sandaru";
        }
    }
}
