using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private SuncoastOverflowContext db { get; set; }

        public SearchController(SuncoastOverflowContext _db)
        {
            this.db = _db;
        }
    }
}