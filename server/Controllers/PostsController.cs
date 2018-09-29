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
        public ActionResult<ResponseObject> GetAllQuestions()
        {
            var _questions = this.db.Questions.OrderByDescending(o => o.CreatedOn);

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _questions
            };

            return _rv;
        }

        //GET api/posts/questions/{id}
        [HttpGet]
        [Route("questions/{id}")]
        public ActionResult<ResponseObject> GetQuestion(int id)
        {
            var _question = this.db.Questions.FirstOrDefault(f => f.Id == id);

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _question
            };
            
            return _rv;
        }

        //GET api/posts/questions/{id}/answers
        [HttpGet]
        [Route("questions/{id}/answers")]
        public ActionResult<ResponseObject> GetAllAnswers(int id)
        {
            var _answers = this.db.Answers.OrderByDescending(o => o.CreatedOn);

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _answers
            };

            return _rv;
        }


        //POST api/posts/questions/add
        [HttpPost]
        [Route("questions/add")]
        public ActionResult<ResponseObject> PostQuestion([FromBody] Question question)
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

        //POST api/posts/questions/{id}/answers/add
        [HttpPost]
        [Route("questions/{id}/answers/add")]
        public ActionResult<ResponseObject> PostAnswer([FromBody] Answer answer)
        {
            var _answer = new Answer
            {
                Content = answer.Content,
                CreatedOn = DateTime.Now,
                CreatedBy = answer.CreatedBy,
                QuestionId = answer.QuestionId
            };

            this.db.Answers.Add(_answer);

            this.db.SaveChanges();

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _answer
            };

            return _rv;
        }

        //PATCH api/posts/questions/{id}/{voteType}
        [HttpPatch]
        [Route("questions/{id}/{voteType}")]
        public ActionResult<ResponseObject> Vote(int id, string voteType)
        {
            var _question = this.db.Questions.FirstOrDefault(f => f.Id == id);

            switch (voteType)
            {
                case "upvote":
                    _question.UpvoteCount++;
                    break;
                case "downvote":
                    _question.DownvoteCount++;
                    break;
            }

            this.db.SaveChanges();

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _question
            };

            return _rv;
        }

        //PATCH api/posts/questions/{id}/{voteType}
        [HttpPatch]
        [Route("questions/{id}/{voteType}/undo")]
        public ActionResult<ResponseObject> UndoVote(int id, string voteType)
        {
            var _question = this.db.Questions.FirstOrDefault(f => f.Id == id);

            switch (voteType)
            {
                case "upvote":
                    _question.UpvoteCount--;
                    break;
                case "downvote":
                    _question.DownvoteCount--;
                    break;
            }

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