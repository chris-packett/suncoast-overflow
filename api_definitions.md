# Controllers
- [ ] api/posts
- [ ] api/search

## GET

#### GET for api/posts
<!-- Get all posts that are questions -->
- [ ] api/posts/questions
<!-- Get all answers for a question -->
- [ ] api/posts/questions/{id}/answers


#### GET for api/search
<!-- Get all questions where the search term/phrase is a substring of the question title/body -->
- [ ] api/search?q={search_term}


## POST

#### POST for api/posts
<!-- Post a question -->
- [ ] api/posts/questions/add
<!-- Post an answer on a question -->
- [ ] api/posts/questions/{id}/answers/add


## PUT

#### PUT for api/posts
<!-- Update a question -->
- [ ] api/posts/questions/{id}/edit
<!-- Upvote a question -->
- [ ] api/posts/questions/{id}/upvote
<!-- Undo Upvoting a question -->
- [ ] api/posts/questions/{id}/upvote/undo
<!-- Downvote a question -->
- [ ] api/posts/questions/{id}/downvote
<!-- Undo Downvoting a question -->
- [ ] api/posts/questions/{id}/upvote/undo
<!-- Update an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/edit


## DELETE

#### DELETE for api/posts
<!-- Delete a question -->
- [ ] api/posts/questions/{id}/delete
<!-- Delete an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/delete