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

        public class ResponseObject
        {
            public bool WasSuccessful { get; set; }
            public object Results { get; set; }
        }

        //GET api/search?q={search_term}
        [HttpGet]
        public ActionResult<ResponseObject> Get([FromQuery] string q)
        {
            var _searchedQuestions = this.db.Questions.Where(w => w.Title.Contains(q));

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _searchedQuestions
            };

            return _rv;
        }
    }
}