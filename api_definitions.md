# Controllers
- [ ] api/posts
- [ ] api/users
- [ ] api/search

## GET

#### GET for api/posts
<!-- Get all posts that are questions -->
- [ ] api/posts/questions
<!-- Get all posts that are answers -->
- [ ] api/posts/answers
<!-- Get all posts that are comments -->
- [ ] api/posts/comments
<!-- Get all answers for a question -->
- [ ] api/posts/questions/{id}/answers
<!-- Get all comments for a question -->
- [ ] api/posts/questions/{id}/comments
<!-- Get all comments for an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/comments

#### GET for api/users
<!-- Get all users of the site -->
- [ ] api/users
<!-- Get all questions posted by a user -->
- [ ] api/users/{id}/questions
<!-- Get all answers posted by a user -->
- [ ] api/users/{id}/answers
<!-- Get all comments posted by a user -->
- [ ] api/users/{id}/comments

#### GET for api/search
<!-- Get all questions where the search term/phrase is a substring of the question title/body -->
- [ ] api/search?q={search_term}


## POST

#### POST for api/posts
<!-- Post a question -->
- [ ] api/posts/questions/add
<!-- Post an answer on a question -->
- [ ] api/posts/questions/{id}/answers/add
<!-- Post a comment on a question -->
- [ ] api/posts/questions/{id}/comments/add
<!-- Post a comment on an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/comments/add

#### POST for api/users
<!-- Create a new user -->
- [ ] api/users/add


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
<!-- Update a comment on a question -->
- [ ] api/posts/questions/{question_id}/comments/{comment_id}/edit
<!-- Update a comment on an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/comments/{comment_id}/edit

#### PUT for api/users
<!-- Update a user -->
- [ ] api/users/{id}/edit


## DELETE

#### DELETE for api/posts
<!-- Delete a question -->
- [ ] api/posts/questions/{id}/delete
<!-- Delete an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/delete
<!-- Delete a comment on a question -->
- [ ] api/posts/questions/{question_id}/comments/{comment_id}/delete
<!-- Delete a comment on an answer on a question -->
- [ ] api/posts/questions/{question_id}/answers/{answer_id}/comments/{comment_id}/delete

#### DELETE for api/users
<!-- Delete a user -->
- [ ] api/users/{id}/delete