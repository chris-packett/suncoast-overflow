using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private SuncoastOverflowContext db { get; set; }

        public PostsController(SuncoastOverflowContext _db)
        {
            this.db = _db;
        }

        public class ResponseObject
        {
            public bool WasSuccessful { get; set; }
            public object Results { get; set; }
        }

        //GET api/posts/questions
        [HttpGet]
        [Route("questions")]
        public ActionResult<ResponseObject> Get()
        {
            var _questions = this.db.Questions.OrderByDescending(o => o.CreatedOn);

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _questions
            };

            return _rv;
        }

        //POST api/posts/questions/add
        [HttpPost]
        [Route("questions/add")]
        public ActionResult<ResponseObject> Post([FromBody] Question question)
        {
            var _question = new Question
            {
                Title = question.Title,
                Content = question.Content,
                CreatedOn = DateTime.Now,
                CreatedBy = question.CreatedBy
            };

            this.db.Questions.Add(_question);

            this.db.SaveChanges();

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _question
            };

            return _rv;
        }
    }
}