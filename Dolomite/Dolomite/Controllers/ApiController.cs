using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dolomite.Controllers
{
    public class ApiController : Controller
    {
        [HttpGet("api/test/{poop}")]
        public IActionResult Test(int poop)
        {
            return new ObjectResult("This is a test" + poop);
        }
    }
}