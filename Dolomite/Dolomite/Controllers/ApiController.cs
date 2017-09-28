using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dolomite.Controllers
{
    public class ApiController : Controller
    {
        public IActionResult Test()
        {
            return new ObjectResult("This is a test");
        }
    }
}