using System;

namespace server.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int UpvoteCount { get; set; }
        public int DownvoteCount { get; set; }
        public DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        
        //Add Question FK
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }
}